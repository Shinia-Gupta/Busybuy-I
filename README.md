# BusyBuy

BusyBuy is an e-commerce web application built using React.js and Firebase. It allows users to browse products, add them to their cart, place orders, and much more. This project was developed as a part of a full-stack web development course to showcase various skills and technologies. 
[LIVE APP](https://teal-baklava-4f8e44.netlify.app/)


## Features

- User authentication with Firebase Authentication, including Google OAuth integration.
- Browse products with filtering and search functionality.
- Add products to cart, manage cart items, and place orders.
- Real-time updates on order status.
- Admin panel to manage products, orders, and users.
- Responsive design for seamless experience across devices.

## Technologies Used

- **Frontend**: React.js, React Router, Tailwind CSS, React-Toastify, React-Spinners
- **Backend**: Firebase Authentication, Firebase Firestore
- **Authentication**: Firebase Authentication with Google OAuth
- **Deployment**: Netlify Hosting

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Shinia-Gupta/Busybuy-I.git
   ```

2. Install dependencies:

   ```bash
   cd busybuy
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore in your Firebase project.
   - Add your Firebase configuration in a `.env` file:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

