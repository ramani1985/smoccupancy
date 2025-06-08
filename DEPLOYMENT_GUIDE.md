
# Vercel Deployment Guide (Frontend)

1. Push `frontend/` folder to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and import the repository.
3. Set root directory to `frontend/` in Vercel settings.
4. It will automatically detect React and deploy.

# Render Deployment Guide (Backend)

1. Push `backend/` folder to GitHub.
2. Go to [https://render.com](https://render.com) and create new web service.
3. Choose Node environment, and set root as `backend/`.
4. Add environment variable: `OPENAI_API_KEY`
5. Auto-deploy on push.

