# runllm

running runllm on local machine:

- `cd into runllm`
- `npm install`
- `npm start` (frontend)
- on successful start should be able to view frontend on http://localhost:3000

in seperate terminal:
- `cd runllm-backend`
- `npm install`
- `node server.mjs` (backend)
- for successful run should say server is running on http://localhost:5001
- NOTE: you will need to `touch .env` in runllm-backend root and add in `REACT_APP_OPENAI_API_KEY='your_openai_key'` for OpenAI assistant calls to work.
- NOTE: as of 10/9 has the old system/assistant prompts.

OR for phaser:
- `cd runllm-t`
- `npm install`
- `npm run dev`

Image gallery:
Artificial intelligence, artwork - https://www.sciencephoto.com/media/351841/view/artificial-intelligence-artwork

OR for blog:
- `cd runllm-blog/runllm-blog`
- `npm install`
- `npm run dev`

    to deploy:
    - `npm run build`
    - `firebase deploy`
    - project console: https://console.firebase.google.com/project/runllm-blog/overview 
    - hosting url: https://runllm-blog.web.app 