# BookIt: Experiences & Slots

A complete fullstack web application for booking travel experiences with slot management.

## 🚀 Live Demo
- **Frontend**: https://highway-delite-3-pyo4.onrender.com
- **Backend API**: https://highway-delite-1-8o83.onrender.com

## ✨ Features

- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB with Mongoose
- **Responsive Design**: Mobile-first approach matching Figma designs
- **Complete Booking Flow**: Home → Details → Checkout → Result
- **Real-time Validation**: Form validation and promo code verification
- **Search Functionality**: Filter experiences by title and location

## 📁 Project Structure

```
highway-delite/
├── src/                    # Frontend React app
│   ├── components/         # Reusable components
│   │   ├── ExperienceCard.tsx
│   │   └── Header.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Experience listing
│   │   ├── ExperienceDetails.tsx
│   │   ├── Checkout.tsx   # Booking form
│   │   └── Result.tsx     # Confirmation page
│   ├── services/          # API services
│   │   └── api.ts         # Axios configuration
│   ├── types/             # TypeScript interfaces
│   └── App.tsx            # Main app component
├── backend/               # Backend API
│   ├── src/
│   │   ├── routes/        # API routes
│   │   │   ├── experiences.ts
│   │   │   ├── bookings.ts
│   │   │   └── promo.ts
│   │   ├── models/        # Mongoose models
│   │   │   ├── Experience.ts
│   │   │   └── Booking.ts
│   │   ├── data/          # Sample data
│   │   └── server.ts      # Express server
│   ├── package.json
│   └── tsconfig.json
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud)
- **Git** for version control

### 📋 Quick Start

1. **Clone the repository**:
```bash
git clone <repository-url>
cd highway-delite
```

2. **Install root dependencies**:
```bash
npm install
```

3. **Setup Backend**:
```bash
cd backend
npm install
```

4. **Configure Environment Variables**:
Create `.env` file in root directory:
```env
VITE_API_URL=https://highway-delite-1-8o83.onrender.com
```

Create `.env` file in `backend/` directory:
```env
MONGODB_URI=mongodb://localhost:27017/bookit
PORT=3001
```

5. **Seed Database** (Optional):
```bash
cd backend
npm run seed
```

6. **Start Development Servers**:

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:
```bash
npm run dev
```

### 🌐 Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|-------------|
| GET | `/api/experiences` | Get all experiences | - |
| GET | `/api/experiences/:id` | Get experience details | - |
| POST | `/api/bookings` | Create new booking | `{ experienceId, date, time, quantity, fullName, email, total }` |
| POST | `/api/promo/validate` | Validate promo code | `{ code }` |
| GET | `/health` | Health check | - |

## 🎟️ Available Promo Codes

| Code | Discount | Type |
|------|----------|------|
| `SAVE10` | 10% | Percentage |
| `FLAT100` | ₹100 | Flat Amount |
| `WELCOME20` | 20% | Percentage |

## 🚀 Deployment Guide

### Frontend Deployment (Vercel)

1. **Connect Repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project" and import your GitHub repository

2. **Configure Build Settings**:
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Environment Variables**:
   ```
   VITE_API_URL=https://highway-delite-1-8o83.onrender.com
   ```

### Backend Deployment (Railway)

1. **Connect Repository**:
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project" → "Deploy from GitHub repo"

2. **Configure Settings**:
   ```
   Root Directory: backend
   Build Command: npm run build
   Start Command: npm start
   ```

3. **Environment Variables**:
   ```
   MONGODB_URI=your-mongodb-connection-string
   PORT=3001
   NODE_ENV=production
   ```

4. **Frontend Configuration**:
   The frontend automatically uses the deployed backend URL from environment variables

### Alternative: Render Deployment

**Backend on Render**:
1. Create new Web Service
2. Connect GitHub repository
3. Set:
   ```
   Root Directory: backend
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

## 🛠️ Development Commands

### Frontend Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Commands
```bash
npm run dev          # Start development server with nodemon
npm run build        # Compile TypeScript to JavaScript
npm start            # Start production server
npm run seed         # Seed database with sample data
```

## 🧪 Testing the Application

1. **Browse Experiences**: Visit home page to see all available experiences
2. **Search**: Use the search bar to filter experiences
3. **View Details**: Click on any experience to see details and available slots
4. **Book Experience**: Select date, time, quantity and proceed to checkout
5. **Apply Promo**: Use codes `SAVE10`, `FLAT100`, or `WELCOME20`
6. **Complete Booking**: Fill form and confirm booking

## 🐛 Troubleshooting

### Common Issues

**Frontend not loading**:
- Check if backend is running on port 3001 (local) or deployed URL
- Verify VITE_API_URL in `.env` file
- Check browser console for errors
- Ensure `.env` file exists in root directory

**Backend connection errors**:
- Ensure MongoDB is running
- Check MONGODB_URI in `.env` file
- Verify port 3001 is not in use

**Database issues**:
- Run `npm run seed` to populate sample data
- Check MongoDB connection string
- Ensure database permissions are correct

### Port Conflicts
If ports are in use:
```bash
# Kill process on port 3001
netstat -ano | findstr :3001
taskkill /PID <process-id> /F

# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <process-id> /F
```

## ✅ Features Implemented

- ✅ **Responsive Design**: Mobile-first approach matching Figma
- ✅ **Experience Listing**: Dynamic data from backend API
- ✅ **Search Functionality**: Filter by title and location
- ✅ **Date & Time Selection**: Available slots management
- ✅ **Quantity Management**: Multiple bookings support
- ✅ **Promo Code System**: Discount validation and application
- ✅ **Form Validation**: Email, name, and required field validation
- ✅ **Booking Flow**: Complete end-to-end booking process
- ✅ **Error Handling**: Comprehensive error states
- ✅ **Loading States**: User feedback during API calls
- ✅ **Double-booking Prevention**: Backend validation
- ✅ **TypeScript**: Full type safety

## 🏗️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and dev server
- **TailwindCSS** for styling and responsive design
- **React Router** for client-side navigation
- **Axios** for HTTP requests

### Backend
- **Node.js** with Express framework
- **TypeScript** for type safety
- **MongoDB** with Mongoose ODM
- **CORS** enabled for cross-origin requests
- **UUID** for unique identifiers
- **Nodemon** for development hot-reload

### Development Tools
- **ESLint** and **Prettier** for code quality
- **PostCSS** and **Autoprefixer** for CSS processing
- **TypeScript** compiler for both frontend and backend

## 🎨 Design Fidelity

The application matches the provided Figma designs exactly:
- ✅ **Color Scheme**: Primary (#F4D03F) and secondary colors
- ✅ **Typography**: Consistent font sizes and weights
- ✅ **Component Spacing**: Exact padding and margins
- ✅ **Interactive States**: Hover, disabled, and selected states
- ✅ **Responsive Breakpoints**: Mobile, tablet, and desktop layouts
- ✅ **Loading States**: Skeleton screens and spinners
- ✅ **Error States**: User-friendly error messages

## 📝 Assignment Requirements Checklist

### Frontend Requirements ✅
- ✅ React + TypeScript with Vite
- ✅ TailwindCSS for styling
- ✅ All 4 required pages (Home, Details, Checkout, Result)
- ✅ Responsive and mobile-friendly design
- ✅ API integration with Axios
- ✅ State management with React hooks
- ✅ Form validation
- ✅ Matches Figma design exactly

### Backend Requirements ✅
- ✅ Node.js with Express
- ✅ MongoDB database
- ✅ All required API endpoints
- ✅ Data validation
- ✅ Double-booking prevention

### Integration Requirements ✅
- ✅ Complete booking flow
- ✅ Dynamic data from backend
- ✅ Real-time promo code validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of a fullstack development assignment.

---

**Built with ❤️ for the Fullstack Intern Assignment**