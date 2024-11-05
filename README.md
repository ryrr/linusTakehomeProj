# linusTakehomeProj
takehome proj for linus

# Setup
- clone the repo
- make sure you have the docker CLI installed (command might also be `docker-compose` instead depending on your system)
- `cd linusTakeHomeProj`
- `cd my-backend` -> `npm install` -> `docker compose up`
- `cd ../my-next-app` -> `npm install` -> `npm run dev`
- navigate to `localhost:3001/bikes`

# Considerations
-  Some validation is done on the frontend and there is not much to be seen in the backend
-  In a production system the backend would do Input sanitization as well as additional data validity checks
-  Since this is a small CRUD app decent frontend validation is enough although if we had a malicious user he could easily break it by sending bad requests to our BE
-  Could handle this in prod with nginx in between to disguise our BE url and OFC sanitize input and add nice error msgs on the BE
-  You can toggle viewing the app as Admin with a click of a button, this obviously should be done in prod by separating pages to Admin and User views
-  The admin page would sit behind an OAuth portal and require some kind of valid cookie or key to access.
-  It's implemented this way purely for simplicities sake
-  Didn't have time to find images for the bikes although this is a prime case for SSR when many assets exist on the page and we want to render them all before page load
-  In prod would setup a CDN and use the next.js Image component for help in rendering out our images before page load 

# Spec Adherence 
- Adheres to the document specs, in CRUD operations and page viewing, the page is responsive to re-sizing

# Video
[Link HERE](https://www.loom.com/share/9539e2a1773b4d78ab9c20fbc5b74b5d?sid=9d806a65-0d03-4872-81c1-81e696ad787a)

