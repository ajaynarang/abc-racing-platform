**# Product Verticals
The is to outlines the User Experience verticals for the ABC Racing Company’s digital initiative. The experiences divided into multiple vertical slices, each focusing on a specific area of the fan experience.

## Team Structure

![abc-platform-Copy of verticals](https://github.com/user-attachments/assets/fad0174f-03e8-4789-90b5-dd9b4417a95b)


**Shell/Container Team**: This team is responsible for branding, design system, and the overall shell of the digital experience. They ensure consistency across the platform.
**Feature-Specific Teams**: These teams handle different area of the user journey:
- Fixture & Result Team: Focus on delivering race fixtures and results.
- Ticketing/Hospitality Team: To manage ticketing, VIP access and other features.
- Fan Engagement Team: To enhances user interaction, social media integrations and gamification etc.
- More Teams: Additional teams could be created for other features like store etc., in future.

This modular approach ensures that different team can develop, optimize and scale the different aspects of the digital experience independently under a unified design system and branding taken care by core team.


# Tech Stack

Tech stack outlines the key technologies and tools that could be used to build the next-gen mobile/web experience. The stack is divided into four main layers:

![abc-platform-tech-stack](https://github.com/user-attachments/assets/e9dffec5-0f2d-4597-943e-628f13702533)


## Frontend/ User Interface
- **Core Technologies**: HTML, JavaScript, CSS
- **Framework**: React + Next.js (with TypeScript) for server-side rendering (SSR) and static site generation (SSG)
- **Styling**: Tailwind CSS, CSS-in-JS, Component Library.
- **State Management**: Redux Toolkit for efficient state management
- **Testing**: JEST + Cypress for unit, integration, and end-to-end (E2E) testing
- **Build & Package Management**: npm for dependency management and 
- **Webpack/Next.js** for bundling
  
## Backend (REST APIs & Server rendering)
- **Dynamic Content Handling**: Next.js for SSR & SSG. It could be handy for SEO, and improve the load time for the app with auto code splitting and SSR and SSG. 
- **API Layer**: Node.js with Express, built TypeScript for maintainability and scalability. Platform appears to perform mostly I/O operation and not CPU intensive task so NodeJS could fit pretty well here. 
- **Proxy/Gateway**: Tyk API Gateway for managing authentication, security, and rate limiting and other cross cutting concerns. Any gateway could work. 
- **CDN**: Caching static content via a CDN ensures optimized performance. A CDN/Edge network is essential to serve users across different geographical locations as per the specifications.
- **Hosting**: Container-based deployment for scalability (Docker + K8). Needed to scalability and K8 could be really useful for scalability and fault tolerance/high availability.
- **Caching**: Redis for data caching - needed to improve response times and reducing database load
  
## Database (Data Storage)
- **MongoDB**: A MongoDB semi-structured database could be used to store user and other application data. Since the app is expected to be read-heavy and the database structure may evolve over time, so a NoSQL solution with horizontal scalability seems like a good choice. 
- Also, for above stack it's  a perfect fit for handling JSON end-to-end.

## DevOps & Infrastructure
- **Code Management**: GitHub for version control
- **CI/CD Pipeline**: Jenkins/GitHub Actions for continuous integration and deployment
- **Containerization & Orchestration**: Docker + Kubernetes (K8s) for scalability and efficient microservices management. Needed for easy deployment, scalability and especially K8 could be really useful for scalability and fault tolerance/high availability.
- **Cloud Provider**: AWS (or any other) for hosting, storage (like S3 for images/videos), and cloud-based services.
- **Code Quality & Security**: SonarQube for static code analysis and for high-quality code.
  
This tech stack would ensures good performance, modularity, and extensibility, aligning with the business requirements as per  specifications.


# E2E Architecture
The diagram shows an end-to-end interaction flow of the application, covering frontend, backend, database and analytics. 

![abc-platform-e2e](https://github.com/user-attachments/assets/07606b1c-7cad-4c04-84e0-f410140e797d)


 ## Frontend
   - Users access the application via mobile or web browsers.
   - Service workers browser cache (PWA) could be used for offline support. 
   - Static content is served from a CDN/Edge server for better performance.

## Backend (Web + Application Layer)
   - Dynamic content requests go through a proxy and web server.
   - An API Gateway to handles API requests and routes them to appropriate microservices or BFF service.
   - BFF with GraphQL could be used to optimizes data read.
   - Multiple microservices handle different features as per vertical:
     - Fixture Service for event scheduling.
     - Ticketing/Hospitality Service for reservations.
     - Fan Engagement Service for user interactions.
     - More...
## Caching Layer
   - Redis could be used for data caching, to reduce load on the database.
   - Cache is checked first before fetching data from the database.

## Database Layer
   - MongoDB (semi-structured database) stores application data, supporting scalability and flexibility.

## Data Analytics
   - FullStory or google analytics can be used to gather user experience insights. 
   - I have experience working with FullStory which capture users interacdtions and provide good insights on rage clicks, playback etc.
   - Additional logs can be collected
   - Analytics layer managing the analysis.

# Frontend Architecture - One Vertical

This outlines a **component-based, micro-frontend approach** for building a scalable vertical using **React and Next.js**.

![abc-platform-frontend](https://github.com/user-attachments/assets/c53878ed-7fc2-4725-84e6-bf5a96cc9ae2)


## **Key Elements:**  
- Fixture and Result (separate Page or Fragment):
   - UI page or fragment fixture and result feature.  

- Container Components (Data Interaction):  
   - Serve as data-handling layers that interact with the Shared App State and pass data down as **props** to child components.  
   - Enables easy and clean state management and API interactions.  
- Component Hierarchy
   - The UI is broken down into reusable components
   - Nested components allow for better modularity.  
- Shared App State
   - A global state (Redux toolit)  provides a single source of truth for the app.  
   - Ensures components stay in sync.  
- API Integrations
   - Services called from Thunks to fetch the data.

This would enable building and maintaining independent, yet interconnected frontend verticals.


# Core Architectural Considerations
## Performance Strategy
- Optimized rendering with SSR and SSG to improve page load times.
- Lazy Loading: Load only the required components and images/videos.
- Minimize over-fetching or under fetching with GraphQL. 
- CDN & Caching: Serve static content like videos/images via a CDN and use browser caching (PWA)
- Implement data using Redis to reduce load 
- Image/Video Optimization: Use formats like WebP and device specific image to fetch optimized media.

## Accessibility  
- WCAG Compliance
- Implement axe tool with build pipeline
- Use semantic HTML and ARIA attributes to use assistive technologies.
- Ensure text is readable by ensuring contrast and allow users to adjust font sizes
  

## Scalability and Extensibility 
- Microfrontend architecture
- Microservices architecture
- Containerized Deployment with docker and k8 to ensure scalabilty and high availability
- Load Balancing
- Database horiozontal scaling

## Analytics
- Use FullStory or Google Analytics to capture and analyze user interactions.
- Logging

## Offline Viewing 
- Use service workers to cache static resources and API responses for offline access.
- Implement PWA feature to allow offline access to importaant content.
- Store essential data locally so users can browse cached content without an internet connection.
- Make use of IndexDB 

# Innovation Idea to increase fan base
We can provide features like multi-angle viewing letting users switch between different camera such as aerial views, racer view etc.  Addtionally interactive map allowing users to view key race events such as overtakes, pit stops,crashes etc. 
**