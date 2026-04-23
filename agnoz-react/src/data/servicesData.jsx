import React from 'react';
import { Layout, Smartphone, Palette, Globe, ShieldCheck, TrendingUp } from 'lucide-react';

export const servicesData = [
  {
    id: 'web-design',
    num: '01',
    icon: <Layout size={22} />,
    title: 'Web Design & Development',
    desc: 'Pixel-perfect websites built for performance, conversion, and long-term growth. Every interaction is intentional.',
    fullDesc: 'We don’t just build websites; we architect digital experiences that drive measurable business results. Our approach combines cutting-edge engineering with psychological design principles to create platforms that are as fast as they are beautiful.',
    features: [
      { title: 'Custom React & Next.js Development', desc: 'We build high-performance, scalable web applications using the latest React features and Next.js for optimal SSR and SEO.' },
      { title: 'Headless CMS Integration (Sanity, Contentful)', desc: 'Empower your team with a flexible content management system that decouples your data from the presentation layer.' },
      { title: 'High-Performance E-commerce Solutions', desc: 'Custom storefronts designed for high conversion rates, fast load times, and seamless payment integrations.' },
      { title: 'Advanced SEO & Core Web Vitals Optimization', desc: 'We ensure your site ranks high and passes all performance metrics for the best possible user experience.' },
      { title: 'Progressive Web Apps (PWA)', desc: 'Deliver an app-like experience in the browser with offline capabilities and push notifications.' }
    ],
    tags: ['React', 'Next.js', 'Webflow'],
    color: '#80e800',
    image: '/image/web_design_modern.png',
    process: [
      { 
        title: 'Discovery', 
        desc: 'Understanding your business goals and user needs.',
        flow: [
          { title: 'Goals Audit', desc: 'Defining KPIs and success metrics for the project.' },
          { title: 'User Research', desc: 'Deep dive into user behavior and pain points.' },
          { title: 'Market Analysis', desc: 'Identifying trends and competitor advantages.' },
          { title: 'Tech Feasibility', desc: 'Choosing the right stack for scalability.' },
          { title: 'Roadmap', desc: 'Setting milestones and delivery timelines.' },
          { title: 'Scope Definition', desc: 'Finalizing the feature set and project boundaries.' }
        ]
      },
      { 
        title: 'UI/UX Design', 
        desc: 'Crafting intuitive and high-converting interfaces.',
        flow: [
          { title: 'Architecture', desc: 'Defining the site map and information flow.' },
          { title: 'Visual Concept', desc: 'Moodboarding and defining the look & feel.' },
          { title: 'Design System', desc: 'Creating reusable components and styles.' },
          { title: 'Prototyping', desc: 'High-fidelity interactive mockups.' },
          { title: 'User Testing', desc: 'Verifying flows with actual representative users.' },
          { title: 'Feedback', desc: 'Iterating based on stakeholder testing.' }
        ]
      },
      { 
        title: 'Development', 
        desc: 'Building with clean, scalable, and optimized code.',
        flow: [
          { title: 'Sys-Arch', desc: 'Designing a scalable database and API layer.' },
          { title: 'CI/CD Pipeline', desc: 'Setting up automated deployment workflows.' },
          { title: 'Integration', desc: 'Connecting frontend to backend services.' },
          { title: 'UI Sprints', desc: 'Pixel-perfect frontend development.' },
          { title: 'State Management', desc: 'Optimizing data flow and application logic.' },
          { title: 'Security', desc: 'Implementing auth and data protection.' }
        ]
      },
      { 
        title: 'Testing', 
        desc: 'Rigorous quality assurance across all devices.',
        flow: [
          { title: 'QA Audit', desc: 'Unit testing and code quality checks.' },
          { title: 'User Scenarios', desc: 'Testing real-world usage paths and edge cases.' },
          { title: 'Cross-Device', desc: 'Ensuring perfection on all screens.' },
          { title: 'Perf-Tuning', desc: 'Optimizing for speed and core vitals.' },
          { title: 'SEO Audit', desc: 'Verifying metadata and indexing structures.' },
          { title: 'Deployment', desc: 'Pushing to staging for final sign-off.' }
        ]
      }
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Framer Motion']
  },
  {
    id: 'mobile-apps',
    num: '02',
    icon: <Smartphone size={22} />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps that feel natural on every device, backed by solid architecture and AI features.',
    fullDesc: 'From concept to App Store, we build mobile applications that users love. We leverage cross-platform frameworks to ensure high performance while maintaining a single codebase for faster iteration and lower maintenance costs.',
    features: [
      { title: 'Cross-Platform Flutter & React Native', desc: 'Build once, deploy everywhere. High-performance mobile apps for both iOS and Android from a single codebase.' },
      { title: 'Native iOS (Swift) & Android (Kotlin)', desc: 'When performance is critical, we build native applications that leverage the full power of the device hardware.' },
      { title: 'Real-time Data Synchronization', desc: 'Keep your users in sync with real-time updates using technologies like Firebase and WebSockets.' },
      { title: 'Custom API & Backend Integration', desc: 'We design and build robust APIs that power your mobile experiences with security and speed.' },
      { title: 'App Store Optimization (ASO)', desc: 'Maximize your visibility and downloads with optimized metadata, keywords, and creative assets.' }
    ],
    tags: ['Flutter', 'React Native', 'Swift'],
    color: '#80e800',
    image: '/image/app_dev_modern.png',
    process: [
      { 
        title: 'Strategy', 
        desc: 'Defining the app architecture and feature set.',
        flow: [
          { title: 'Market Fit', desc: 'Analyzing the competitive landscape and target audience.' },
          { title: 'User Journey', desc: 'Mapping the critical paths for user engagement.' },
          { title: 'Strategy', desc: 'Defining the app architecture and feature set.' },
          { title: 'Tech Stack', desc: 'Selecting frameworks for cross-platform performance.' },
          { title: 'Security Map', desc: 'Designing data protection and privacy flows.' },
          { title: 'MVP Scoping', desc: 'Prioritizing features for the initial release.' }
        ]
      },
      { 
        title: 'Prototyping', 
        desc: 'Interactive wireframes to test user flow.',
        flow: [
          { title: 'Low-Fi Wireframes', desc: 'Mapping out basic layouts and interactions.' },
          { title: 'Visual Mockups', desc: 'Applying brand identity to the app screens.' },
          { title: 'Interactive Proto', desc: 'Building a clickable model for testing.' },
          { title: 'Usability Test', desc: 'Gathering feedback from target users.' },
          { title: 'Design System', desc: 'Standardizing components for development.' },
          { title: 'Final Review', desc: 'Stakeholder sign-off on the design direction.' }
        ]
      },
      { 
        title: 'App Dev', 
        desc: 'Coding with performance and security in mind.',
        flow: [
          { title: 'Env-Setup', desc: 'Configuring the cross-platform development environment.' },
          { title: 'API Sync', desc: 'Connecting the app to backend data sources.' },
          { title: 'UI Coding', desc: 'Implementing pixel-perfect responsive layouts.' },
          { title: 'Feature Dev', desc: 'Building core functionalities and modules.' },
          { title: 'Offline-Mode', desc: 'Implementing local caching and data persistence.' },
          { title: 'Performance', desc: 'Optimizing render cycles and asset loading.' }
        ]
      },
      { 
        title: 'Deployment', 
        desc: 'Handling App Store and Play Store submissions.',
        flow: [
          { title: 'QA Polish', desc: 'Final bug fixes and performance checks.' },
          { title: 'Store Assets', desc: 'Creating screenshots and marketing copy.' },
          { title: 'Beta Testing', desc: 'Deploying to TestFlight and Play Console Beta.' },
          { title: 'Compliance', desc: 'Verifying adherence to store guidelines.' },
          { title: 'Live Launch', desc: 'Submitting for review and going public.' },
          { title: 'Post-Launch', desc: 'Monitoring crashes and user feedback.' }
        ]
      }
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'branding',
    num: '03',
    icon: <Palette size={22} />,
    title: 'Brand & Graphic Design',
    desc: 'Bold visual identities, logo systems, and marketing assets that make your brand impossible to ignore.',
    fullDesc: 'Design is not just what it looks like; it’s how it works and communicates. We create cohesive brand identities that resonate with your target audience and stand out in crowded markets.',
    features: [
      { title: 'Visual Identity & Logo Design', desc: 'Crafting a unique visual language that captures your brand essence and stands out in the marketplace.' },
      { title: 'Brand Strategy & Positioning', desc: 'Defining your unique value proposition and how you communicate it to your target audience.' },
      { title: 'Social Media & Marketing Assets', desc: 'High-impact visuals designed to stop the scroll and drive engagement across all digital channels.' },
      { title: 'Motion Graphics & Video Editing', desc: 'Bringing your brand to life with dynamic movement and editorial-grade video content.' },
      { title: 'Print & Packaging Design', desc: 'Extending your brand into the physical world with premium print materials and shelf-ready packaging.' }
    ],
    tags: ['Logo', 'Brand Book', 'Motion'],
    color: '#80e800',
    image: '/image/brand_design_modern.png',
    process: [
      { 
        title: 'Moodboard', 
        desc: 'Exploring visual directions and color palettes.',
        flow: [
          { title: 'Visual Research', desc: 'Exploring industry trends and visual languages.' },
          { title: 'Moodboard', desc: 'Defining the color theory and emotional tone.' },
          { title: 'Logo Sketching', desc: 'Iterating on hand-drawn concepts and marks.' },
          { title: 'Vector Refine', desc: 'Crafting the final shapes for scalability.' },
          { title: 'Brand Guide', desc: 'Defining typography and usage rules.' },
          { title: 'Rollout', desc: 'Applying the brand to digital and physical assets.' }
        ]
      },
      { 
        title: 'Logo Design', 
        desc: 'Iterating on concepts to find the perfect mark.',
        flow: [
          { title: 'Ideation', desc: 'Generating creative concepts and directions.' },
          { title: 'Sketching', desc: 'Hand-drawing unique marks and symbols.' },
          { title: 'Vectorizing', desc: 'Digitizing the best concepts in high resolution.' },
          { title: 'Typography', desc: 'Pairing marks with perfect font selections.' },
          { title: 'Color Theory', desc: 'Applying palettes that evoke the right emotion.' },
          { title: 'Lockups', desc: 'Creating various layouts for different use cases.' }
        ]
      },
      { 
        title: 'Brand Guide', 
        desc: 'Defining typography and usage rules.',
        flow: [
          { title: 'Brand Story', desc: 'Writing the core mission and value statements.' },
          { title: 'Visual Rules', desc: 'Setting constraints for colors and type.' },
          { title: 'Imagery Style', desc: 'Defining the photography and icon aesthetic.' },
          { title: 'Voice & Tone', desc: 'Crafting a unique communication personality.' },
          { title: 'Templates', desc: 'Creating reusable brand asset foundations.' },
          { title: 'Final Docs', desc: 'Compiling the master brand guidelines book.' }
        ]
      },
      { 
        title: 'Rollout', 
        desc: 'Applying the brand to all digital and physical assets.',
        flow: [
          { title: 'Collateral', desc: 'Designing business cards and stationery.' },
          { title: 'Social Kits', desc: 'Creating profiles and post templates.' },
          { title: 'Web Presence', desc: 'Updating digital platforms with new branding.' },
          { title: 'Presentation', desc: 'Pitching the new identity to the team.' },
          { title: 'Launch Strategy', desc: 'Planning the public announcement.' },
          { title: 'Asset Hub', desc: 'Organizing all files for easy team access.' }
        ]
      }
    ],
    technologies: ['Figma', 'Adobe CC', 'After Effects', 'Cinema 4D', 'Blender']
  },
  {
    id: 'cloud-hosting',
    num: '04',
    icon: <Globe size={22} />,
    title: 'Domain & Cloud Hosting',
    desc: 'Enterprise-grade infrastructure with blazing speeds, ironclad security, and 99.99% uptime guarantees.',
    fullDesc: 'Your digital presence deserves a rock-solid foundation. We provide managed cloud hosting solutions that scale with your traffic, ensuring your users never experience a slow moment.',
    features: [
      { title: 'AWS & Google Cloud Management', desc: 'Expertly configured cloud infrastructure that scales automatically with your business growth.' },
      { title: 'Global CDN & Edge Computing', desc: 'Deliver your content with lightning speed to users anywhere in the world using edge locations.' },
      { title: 'Automated Backups & Disaster Recovery', desc: 'Sleep easy knowing your data is safe with multi-region backups and rapid recovery protocols.' },
      { title: 'SSL & Advanced Security Protocols', desc: 'Ironclad security for your domains and data, including SSL, firewalls, and DDoS protection.' },
      { title: 'Domain Portfolio Management', desc: 'Consolidated management of your digital assets to ensure uptime and brand protection.' }
    ],
    tags: ['AWS', 'Cloudflare', 'VPS'],
    color: '#80e800',
    image: '/image/cloud_hosting_modern.png',
    process: [
      { 
        title: 'Audit', 
        desc: 'Assessing your current infrastructure needs.',
        flow: [
          { title: 'Infra Audit', desc: 'Assessing your current cloud resources and needs.' },
          { title: 'Migration', desc: 'Seamlessly moving data with zero downtime.' },
          { title: 'DNS Setup', desc: 'Configuring global routing and failovers.' },
          { title: 'Config', desc: 'Optimizing servers for speed and security.' },
          { title: 'WAF Guard', desc: 'Implementing web application firewalls.' },
          { title: 'Monitoring', desc: '24/7 watch over your digital assets.' }
        ]
      },
      { 
        title: 'Migration', 
        desc: 'Seamlessly moving data with zero downtime.',
        flow: [
          { title: 'Pre-Backup', desc: 'Ensuring data integrity before the move.' },
          { title: 'DB-Transfer', desc: 'Migrating databases with zero record loss.' },
          { title: 'File Sync', desc: 'Moving media and assets to new servers.' },
          { title: 'DNS Prep', desc: 'Lowering TTLs for a fast transition.' },
          { title: 'Final-Sync', desc: 'Running the last data update before switch.' },
          { title: 'Verification', desc: 'Testing all services on the new environment.' }
        ]
      },
      { 
        title: 'Config', 
        desc: 'Optimizing servers for speed and security.',
        flow: [
          { title: 'Kernel Tune', desc: 'Optimizing OS parameters for performance.' },
          { title: 'Web-Server', desc: 'Configuring Nginx or Apache for speed.' },
          { title: 'PHP/Node', desc: 'Fine-tuning the runtime environment.' },
          { title: 'Cache-Logic', desc: 'Implementing Redis or Memcached layers.' },
          { title: 'Hardening', desc: 'Disabling unnecessary services and ports.' },
          { title: 'Monitoring', desc: 'Setting up agent-based resource tracking.' }
        ]
      },
      { 
        title: 'Monitoring', 
        desc: '24/7 watch over your digital assets.',
        flow: [
          { title: 'Uptime Check', desc: 'Global monitoring from multiple locations.' },
          { title: 'Load Alerts', desc: 'Notifying on CPU or Memory spikes.' },
          { title: 'Log Analysis', desc: 'Checking for errors or unusual traffic.' },
          { title: 'Backups', desc: 'Automating multi-region data snapshots.' },
          { title: 'Patching', desc: 'Applying critical OS security updates.' },
          { title: 'Status Page', desc: 'Providing transparency to end users.' }
        ]
      }
    ],
    technologies: ['AWS', 'Google Cloud', 'Cloudflare', 'Docker', 'Nginx']
  },
  {
    id: 'maintenance',
    num: '05',
    icon: <ShieldCheck size={22} />,
    title: 'Website Maintenance',
    desc: 'Proactive monitoring, security patches, and performance optimizations keep your platform running flawlessly.',
    fullDesc: 'The web is constantly evolving, and so should your website. Our maintenance plans take the headache out of updates, security, and performance, letting you focus on your business.',
    features: [
      { title: '24/7 Uptime & Security Monitoring', desc: 'Constant surveillance of your platform to detect and resolve issues before they affect your users.' },
      { title: 'Regular Framework & Plugin Updates', desc: 'Keeping your software stack up-to-date to ensure security, stability, and access to new features.' },
      { title: 'Content Updates & Management', desc: 'Need a change? Our team handles your content updates quickly and accurately.' },
      { title: 'Performance Audits & Speed Tuning', desc: 'Continuous optimization to keep your site running at peak efficiency and maintaining top speeds.' },
      { title: 'Priority Bug Fixes & Support', desc: 'Fast-track resolution for any technical issues that arise, ensuring minimal disruption to your business.' }
    ],
    tags: ['24/7 Monitor', 'Updates', 'Backup'],
    color: '#80e800',
    image: '/image/maintenance_modern.png',
    process: [
      { 
        title: 'Onboarding', 
        desc: 'Connecting your site to our monitoring tools.',
        flow: [
          { title: 'Onboarding', desc: 'Connecting your site to our monitoring tools.' },
          { title: 'Access Audit', desc: 'Verifying permissions and security credentials.' },
          { title: 'Cleanup', desc: 'Initial security sweep and speed optimization.' },
          { title: 'Optimization', desc: 'Database pruning and resource compression.' },
          { title: 'Updates', desc: 'Scheduled monthly maintenance and patching.' },
          { title: 'Reporting', desc: 'Regular updates on site health and performance.' }
        ]
      },
      { 
        title: 'Cleanup', 
        desc: 'Initial security sweep and speed optimization.',
        flow: [
          { title: 'Core Audit', desc: 'Verifying integrity of CMS core files.' },
          { title: 'Plugin-Sweep', desc: 'Removing unused or insecure extensions.' },
          { title: 'DB-Repair', desc: 'Optimizing tables and removing overhead.' },
          { title: 'Image-Tune', desc: 'Compressing oversized media assets.' },
          { title: 'Code-Polish', desc: 'Minifying JS and CSS for faster loads.' },
          { title: 'Security Fix', desc: 'Closing known vulnerabilities in scripts.' }
        ]
      },
      { 
        title: 'Updates', 
        desc: 'Scheduled monthly maintenance and patching.',
        flow: [
          { title: 'Staging', desc: 'Cloning the site for safe update testing.' },
          { title: 'Run-Updates', desc: 'Applying patches to core and plugins.' },
          { title: 'QA-Test', desc: 'Verifying all features work after updates.' },
          { title: 'Live-Push', desc: 'Deploying the tested changes to production.' },
          { title: 'Verify', desc: 'Post-deployment smoke testing on live.' },
          { title: 'Log-Event', desc: 'Recording all changes in the maintenance log.' }
        ]
      },
      { 
        title: 'Reporting', 
        desc: 'Regular updates on site health and performance.',
        flow: [
          { title: 'Traffic-Stat', desc: 'Summarizing visitor trends and engagement.' },
          { title: 'Health-Score', desc: 'Calculating overall system stability.' },
          { title: 'Security-Log', desc: 'Listing blocked attacks and scans.' },
          { title: 'Speed-Check', desc: 'Reporting on Core Web Vitals progress.' },
          { title: 'Advise', desc: 'Recommending future technical improvements.' },
          { title: 'Review', desc: 'Discussing the report with stakeholders.' }
        ]
      }
    ],
    technologies: ['New Relic', 'Datadog', 'Snyk', 'WordPress', 'Shopify']
  },
  {
    id: 'marketing',
    num: '06',
    icon: <TrendingUp size={22} />,
    title: 'Digital Marketing & SEO',
    desc: 'Data-driven growth strategies — from SEO and paid ads to social media — designed to scale your reach.',
    fullDesc: 'Traffic is good; conversion is better. We combine data analysis with creative storytelling to build marketing funnels that turn visitors into loyal customers.',
    features: [
      { title: 'Search Engine Optimization (SEO)', desc: 'Strategic keyword research and on-page optimization to drive sustainable organic traffic to your site.' },
      { title: 'Pay-Per-Click (PPC) Management', desc: 'Data-driven ad campaigns that maximize your ROI and put your brand in front of high-intent users.' },
      { title: 'Social Media Growth Strategies', desc: 'Building communities and brand awareness through organic and paid social media initiatives.' },
      { title: 'Content Marketing & Strategy', desc: 'Creating valuable, relevant content that establishes authority and nurtures leads through the funnel.' },
      { title: 'Email Marketing Automation', desc: 'Personalized email flows that engage your audience and drive conversions on autopilot.' }
    ],
    tags: ['SEO', 'PPC', 'Content'],
    color: '#80e800',
    image: '/image/marketing_modern.png',
    process: [
      { 
        title: 'Analysis', 
        desc: 'Researching competitors and keywords.',
        flow: [
          { title: 'Keyword Map', desc: 'Finding the high-intent terms your users use.' },
          { title: 'Analysis', desc: 'Researching competitors and content gaps.' },
          { title: 'Ad Strategy', desc: 'Defining budgets and campaign objectives.' },
          { title: 'Campaign', desc: 'Launching targeted ads and content flows.' },
          { title: 'Optimize', desc: 'A/B testing to maximize conversion rates.' },
          { title: 'Scale', desc: 'Increasing reach based on performance data.' }
        ]
      },
      { 
        title: 'Campaign', 
        desc: 'Launching targeted ads and content.',
        flow: [
          { title: 'Ad-Creation', desc: 'Designing high-impact visual assets.' },
          { title: 'Copywriting', desc: 'Crafting persuasive messaging and CTAs.' },
          { title: 'Platform-Set', desc: 'Configuring Google, Meta, or LinkedIn ads.' },
          { title: 'Pixels', desc: 'Implementing tracking and conversion tags.' },
          { title: 'Soft-Launch', desc: 'Testing campaigns with small budgets.' },
          { title: 'Full-Scale', desc: 'Ramping up high-performing ad sets.' }
        ]
      },
      { 
        title: 'Optimize', 
        desc: 'A/B testing to maximize conversion rates.',
        flow: [
          { title: 'A/B Testing', desc: 'Testing headlines and visual variations.' },
          { title: 'Landing-Page', desc: 'Optimizing landing pages for conversion.' },
          { title: 'Heatmaps', desc: 'Analyzing user clicks and scroll behavior.' },
          { title: 'Bid-Tune', desc: 'Adjusting bids for maximum ROI.' },
          { title: 'Funnel-Fix', desc: 'Removing friction from the user journey.' },
          { title: 'Data-Audit', desc: 'Verifying tracking accuracy and attribution.' }
        ]
      },
      { 
        title: 'Scale', 
        desc: 'Increasing reach based on performance data.',
        flow: [
          { title: 'Budget-Boost', desc: 'Safely increasing spend on winners.' },
          { title: 'Lookalikes', desc: 'Targeting users similar to current customers.' },
          { title: 'Market-Exp', desc: 'Launching in new regions or segments.' },
          { title: 'Creative-Ref', desc: 'Refreshing visuals to prevent ad fatigue.' },
          { title: 'Automation', desc: 'Setting up rules for 24/7 optimization.' },
          { title: 'Growth-Plan', desc: 'Projecting long-term ROI and expansion.' }
        ]
      }
    ],
    technologies: ['Google Ads', 'Meta Ads', 'Semrush', 'Ahrefs', 'HubSpot']
  },
];
