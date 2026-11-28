 ## Setup and run :
Requirements: Node.js (LTS) and Git.

    git clone https://github.com/HamzaEldaif/Web-Project.git
    cd Web-Project/fitness-app
    npm install
    npm run dev

Open the address printed in the terminal (usually http://localhost:5173).

Production build: npm run build, then npm run preview.

## Deployment :
The front end is deployed as a Render Static Site
(root directory fitness-app, build command npm install && npm run build,
publish directory dist, with a rewrite rule /* to /index.html).