// src/app/layout.js
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
