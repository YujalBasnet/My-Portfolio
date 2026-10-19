# My Portfolio

A modern full-stack portfolio website showcasing projects, technical skills, resume information, and contact functionality with a responsive and interactive user experience.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Hero section with personal introduction and calls to action
- About section for profile and background information
- Projects showcase with project links and descriptions
- Technical skills section
- Contact form connected to a backend API
- Email notifications for new contact messages
- Smooth animations and interactive UI components
- Custom domain support through GitHub Pages (`CNAME`)

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

### Backend

- Node.js
- Express
- CORS
- dotenv
- Resend for email delivery

## Project Structure

```text
.
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── Project1/
├── CNAME
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Resend API key for contact-form email delivery

### 1. Clone the repository

```bash
git clone https://github.com/YujalBasnet/My-Portfolio.git
cd My-Portfolio
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The Vite development server will display the local URL in the terminal.

### 3. Configure and start the backend

Open a second terminal from the repository root:

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your email address and Resend API key:

```env
EMAIL_USER=your-email@example.com
RESEND_API_KEY=your-resend-api-key
```

Start the backend in development mode:

```bash
npm run dev
```

Or start it normally:

```bash
npm start
```

The backend runs on port `5000` by default. You can override the port by setting `PORT` in your environment.

## Available Scripts

### Frontend

Run these commands from `frontend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Backend

Run these commands from `backend/`:

| Command | Description |
| --- | --- |
| `npm start` | Start the Express server |
| `npm run dev` | Start the server with Nodemon |

## API

### Send a contact message

```http
POST /api/contact
Content-Type: application/json
```

Request body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello!"
}
```

The endpoint validates the required fields and sends the message through Resend. The backend returns an error if any field is missing or email delivery fails.

## Environment Variables

Backend configuration is kept in `backend/.env` and should not be committed to the repository.

| Variable | Description |
| --- | --- |
| `EMAIL_USER` | Email address that receives portfolio messages |
| `RESEND_API_KEY` | API key used to send contact-form emails |
| `PORT` | Optional backend port; defaults to `5000` |

## Deployment

Build the frontend before deploying it to a static hosting provider:

```bash
cd frontend
npm run build
```

The generated files are placed in `frontend/dist`. Deploy the backend separately to a Node.js-compatible hosting provider and configure the frontend to use the deployed API URL.

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes.
4. Push the branch and open a pull request.

## License

No license has been specified for this project yet.

## Author

**Yujal Basnet**

- GitHub: [@YujalBasnet](https://github.com/YujalBasnet)
