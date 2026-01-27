# Todo App

A modern, feature-rich todo application built with React and Firebase, allowing users to manage their tasks efficiently with secure authentication.

## Features

- 📝 **Create, Read, Update, Delete Notes** - Full CRUD functionality for managing your todos
- 🔐 **User Authentication** - Secure login and sign-up with Firebase Authentication
- 🔄 **Status Management** - Track note status and organization
- 🎨 **Responsive UI** - Built with Bootstrap and React Bootstrap for a clean interface
- 💾 **Cloud Storage** - Firebase backend for data persistence
- 🛣️ **Multi-page Navigation** - Router-based navigation with React Router DOM
- 🔑 **Password Recovery** - Recover account access with password recovery feature

## Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.3.6
- **Routing**: React Router DOM 6.4.3
- **UI Framework**: Bootstrap 5.2.2, React Bootstrap 2.5.0
- **Backend**: Firebase 12.4.0
- **Icons**: React Icons 4.6.0
- **Styling**: CSS Modules & Custom CSS

## Project Structure

```
├── src/
│   ├── App.jsx                    # Main app component with routing
│   ├── index.jsx                  # Entry point
│   ├── firebase.jsx               # Firebase configuration
│   ├── Navbar.jsx                 # Navigation component
│   ├── Styles.css                 # Global styles
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx        # Authentication context provider
│   │
│   ├── NotesComponents/           # Note management components
│   │   ├── Modal.jsx              # Modal dialog for notes
│   │   ├── Note.jsx               # Individual note component
│   │   ├── NoteComponent.jsx      # Note display component
│   │   ├── NoteForm.jsx           # Form for creating/editing notes
│   │   ├── NotesContainer.jsx     # Container for all notes
│   │   └── NoteStatus.jsx         # Status indicator component
│   │
│   ├── Pages/                     # Page components
│   │   ├── Home.jsx               # Home page
│   │   ├── Dashboard.jsx          # Main dashboard with notes
│   │   ├── Login.jsx              # Login page
│   │   ├── SignUp.jsx             # Sign-up page
│   │   ├── PasswordRecovery.jsx   # Password recovery page
│   │   └── Assets/
│   │       └── Styles.css         # Page-specific styles
│   │
│   └── Styles/                    # CSS Modules
│       ├── formStyle.module.css   # Form styling
│       ├── notesStyles.module.css # Notes styling
│       └── noteStatus.module.css  # Status styling
│
├── public/
│   ├── manifest.json              # PWA manifest
│   └── images/                    # Static images
│
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies
├── vite.config.mjs                # Vite configuration
└── README.md                      # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Firebase configuration variables:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Running the App

**Development Server:**
```bash
npm start
```
The app will be available at `http://localhost:5173`

**Production Build:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm serve
```

## Routes

- `/` - Home page
- `/dashboard` - Main dashboard for managing notes
- `/login` - User login
- `/sign-up` - User registration
- `/password-recovery` - Password recovery
- `*` - Catch-all route redirecting to home

## Authentication Flow

The app uses Firebase Authentication with Context API for state management:
- Users can sign up with email and password
- Login with existing credentials
- Recover forgotten passwords
- Authentication state is managed globally via `AuthContext`

## Components Overview

### Core Components
- **Navbar**: Navigation bar with links and authentication status
- **NotesContainer**: Main container displaying all user notes
- **NoteForm**: Form for creating and editing notes
- **Modal**: Dialog for note interactions

### Pages
- **Home**: Landing page for new users
- **Dashboard**: Main application hub where users manage their notes
- **Login/SignUp**: Authentication pages
- **PasswordRecovery**: Account recovery page

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run serve` - Preview production build

## Dependencies

### Core Dependencies
- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **firebase** - Backend services and authentication

### UI & Styling
- **bootstrap** - CSS framework
- **react-bootstrap** - Bootstrap components for React
- **react-icons** - Icon library

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.