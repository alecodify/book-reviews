import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from '../api';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, [location]);

  const handleLogout = async () => {
    try {
      
      const response = await api.logout();
      if (response.status === "Success") {
        localStorage.removeItem('userId')
        navigate('/')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 right-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Book Reviews App</Link>
        <div className="space-x-4">
          {isLoggedIn && (
            <>
              <Link to="/browser" className="hover:underline">Home</Link>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <Link to="" onClick={handleLogout} className="hover:underline">Logout</Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/signin" className="hover:underline">Sign In</Link>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
