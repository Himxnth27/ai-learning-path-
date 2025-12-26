# 🚀 SkillPath AI - The 2026 Student Terminal

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://github.com/Himxnth27/ai-learning-path-)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

SkillPath AI is a premium, GenZ-focused career preparation platform that leverages AI to generate high-demand learning paths, analyze resumes with 2026 industry standards, and provide a practice arena for technical interviews.

## ✨ Features

- **🎯 Skill Architect**: AI-powered personalized roadmaps for 2026 tech roles
- **📄 Resume Intelligence**: Advanced PDF analysis with scoring and keyword detection
- **💬 Practice Arena**: Interactive interview questions with ideal response strategies
- **📊 Command Center**: A sleek, premium dashboard for tracking personal growth

## 🎨 Design Aesthetic

- **Mesh Gradients**: Dynamic, futuristic backdrops
- **Glassmorphism**: Sophisticated frosted-glass components
- **Smooth Motion**: Powered by Framer Motion for a premium feel
- **Typography**: Clean, geometric 'Outfit' font family

## 🛠️ Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express
- MySQL database
- CORS enabled
- Environment-based configuration

## 📁 Project Structure

```
learning path 2/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── App.jsx      # Main app component
│   └── package.json
├── server/              # Backend Express API
│   ├── routes/          # API route handlers
│   ├── database/        # Database schema
│   ├── index.js         # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL Server (v8.0 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Himxnth27/ai-learning-path-.git
   cd ai-learning-path-
   ```

2. **Set up the Backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `server` directory:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your MySQL credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=job_prep_db
   ```

4. **Set up the Database**
   
   Run the SQL schema to create the database and tables:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

5. **Set up the Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running Locally

1. **Start the Backend Server**
   ```bash
   cd server
   npm start
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Access the Application**
   
   Open your browser and navigate to `http://localhost:5173`

## 🌐 Deployment

### Backend Deployment (Render/Railway)

1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `cd server && npm install`
4. Set start command: `cd server && npm start`
5. Add environment variables from `.env.example`
6. Deploy!

### Frontend Deployment (Vercel/Netlify)

1. Create a new project
2. Set root directory to `client`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

**Important**: Update API URLs in frontend to point to your deployed backend.

## 📝 Environment Variables

### Server (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `DB_HOST` | MySQL host | `localhost` |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | - |
| `DB_NAME` | Database name | `job_prep_db` |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Himxnth27**
- GitHub: [@Himxnth27](https://github.com/Himxnth27)

## 🙏 Acknowledgments

- Design inspiration from modern GenZ aesthetics
- Built with ❤️ for students preparing for their 2026 careers

---

**Note**: This is a demonstration project. For production use, implement proper authentication, input validation, and security measures.
