# Deployment Options

Here are alternative ways to share your website with friends.

## Option 1: Replit (Recommended Alternative)
Similar to Glitch, Replit is an online IDE that can run Node.js and SQLite.

1.  Go to [replit.com](https://replit.com).
2.  Sign up/Log in.
3.  Click **"+ Create Repl"** -> **"Import from GitHub"**.
4.  Paste your URL: `https://github.com/Himxnth27/ai-learning-path-.git`
5.  Click **Import**.
6.  Once loaded, click the big green **"Run"** button.
7.  A webview window will appear with your live link (e.g., `https://ai-learning-path.replit.co`).

## Option 2: Render.com (Professional Cloud)
Render is a more professional platform, but **warning**: the free tier does not save your database permanently (data vanishes if the server restarts).

1.  Go to [render.com](https://render.com).
2.  New **Web Service**.
3.  Connect your GitHub repo.
4.  Build Command: `npm install`
5.  Start Command: `node server.js`
6.  Click **Create Web Service**.

## Option 3: Local Tunnel (Quickest, Temporary)
Run the website on your computer and give your friend a temporary link.

1.  Install `localtunnel` globally:
    ```bash
    npm install -g localtunnel
    ```
2.  Start your server in one terminal:
    ```bash
    node server.js
    ```
3.  Run the tunnel in a **new** terminal:
    ```bash
    lt --port 3000
    ```
4.  It will give you a link (e.g., `https://fancy-cat-22.loca.lt`). Send that to your friend!
**Note:** The link only works while your computer is on.
