# Getting Started with Create React App

This project was bootstrapped with [Create React App](http://github.com/facebook/create-react-app).

## Available Scripts

corvette-site/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Hero.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

my-corvette-site/
├── api/                  ← Vercel treats this as serverless backend
│   ├── index.js
│   ├── upload.js
│   ├── cloudinary.js
│   ├── authMiddleware.js
│   └── .env
├── public/
├── src/                  ← Your React frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── vercel.json
├── package.json


🔒 5. Use Cloudinary’s API to Tag, Transform, Secure
✅ Where to Put It:
In backend (Node.js/Express) or directly in Cloudinary dashboard

Use signed URLs for private access

✅ Example (Transform):
const url = `https://res.cloudinary.com/yourCloudName/image/upload/w_800,h_600,c_fill,g_auto,q_auto/corvette.jpg`;

✅ Example (Secure Upload):
Use signed upload with your backend:

const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload(filePath, {
  tags: ['corvette'],
  transformation: [{ width: 800, crop: 'scale' }],
  folder: 'corvettes',
});


What Each Section Does
"version": 2 → Required for Vercel’s latest configuration format.

"builds":

@vercel/node compiles your Express backend in api/index.js.

@vercel/static-build builds your React frontend using npm run build.

"routes":

/api/* routes are forwarded to your Express server.

All other routes (/, /gallery, /upload, etc.) serve your React app.







🧭 Summary
Feature	                Location	            Implementation Tip

Role-Based Access	    /upload, /garage	    Check idToken.claims.groups

Cloudinary Integration	UploadWidget, Gallery	Use widget + API

Route Guards	        App.jsx	Use             <SecureRoute>

Styled Components	    components/, styles/	Use ThemeProvider

Cloudinary API (secure)	Backend or widget config	Use signed URLs

Okta Token Protection	Express middleware	    Decode JWT

jamesavakian@Jamess-Mac-mini abc % sudo npm install -g vercel

Password:
npm warn deprecated path-match@1.2.4: This package is archived and no longer maintained. For support, visit https://github.com/expressjs/express/discussions

added 240 packages in 2s


jamesavakian@Jamess-Mac-mini abc % vercel login

Vercel CLI 48.1.0
> NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
> This information is used to shape the CLI roadmap and prioritize features.
> You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
> https://vercel.com/docs/cli/about-telemetry

  Visit vercel.com/device and enter LJGV-WSKV

  Congratulations! You are now signed in.

  To deploy something, run `vercel`.

  💡 To deploy every commit automatically,
  connect a Git Repository (vercel.link/git).
jamesavakian@Jamess-Mac-mini abc % 