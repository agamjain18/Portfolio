from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Agnoz API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Update this to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URI)
db = client.agnoz_db

# Models
class Inquiry(BaseModel):
    name: str
    email: EmailStr
    service: str
    message: str

class Application(BaseModel):
    jobTitle: str
    fullName: str
    email: EmailStr
    phone: str
    portfolio: str = None
    resume: str = None 

@app.get("/")
async def root():
    return {"status": "online", "agency": "Agnoz", "api_version": "1.0.0"}

@app.post("/api/inquiry")
async def create_inquiry(inquiry: Inquiry):
    try:
        new_inquiry = inquiry.dict()
        new_inquiry["created_at"] = datetime.utcnow()
        result = await db.inquiries.insert_one(new_inquiry)
        return {"success": True, "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/apply")
async def create_application(application: Application):
    try:
        new_app = application.dict()
        new_app["created_at"] = datetime.utcnow()
        result = await db.applications.insert_one(new_app)
        return {"success": True, "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
