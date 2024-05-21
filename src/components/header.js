import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ButtonWithLink = ({ to, children, expanded }) => {
  return (
    <Link
      to={to}
      className={`flex justify-center items-center p-3.5 h-[41px] rounded-sm text-[#3F83E7] bg-[white] w-[120px] max-md:w-auto ${expanded ? 'bg-white' : ''} border border-sky-600 border-solid`}
    >
      {children}
    </Link>
  );
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);


  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.href='/'
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setHideButtons(window.innerWidth <= 768 || location.pathname === '/signin' || location.pathname === '/signup');
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center relative z-10 gap-5 px-16 py-4 w-full h-[86px] bg-[#003B95] max-md:px-5">
        <div className="flex-auto my-auto text-2xl text-slate-100">
          Booking.com
        </div>
        <div className="flex items-center">
          {isSmallScreen && (
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMenu}
                className="text-slate-100 focus:outline-none"
              >
                <svg
                  className="w-10 h-10" // Increased size of hamburger icon
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className={`flex flex-1 justify-end items-center gap-2 ${isSmallScreen ? 'hidden' : 'max-md:flex'}`}>
          {isLoggedIn ? (
            <button onClick={handleSignOut} className="flex justify-center items-center p-3.5 h-[41px] bg-white rounded-sm border border-sky-600 border-solid text-[#3F83E7] w-auto max-md:w-full">
              Sign out
            </button>
          ) : (
            <>
              {!hideButtons && (
                <>
                  <ButtonWithLink to="/signup" expanded={menuOpen}>
                    Register
                  </ButtonWithLink>
                  <ButtonWithLink to="/signin" expanded={menuOpen}>
                    Sign in
                  </ButtonWithLink>
                </>
              )}
            </>
          )}
        </div>
        {menuOpen && (
          <div className="absolute top-[86px] right-0 bg-[#003B95] w-full flex flex-col items-center max-md:flex">
            <ButtonWithLink to="/signup" expanded={menuOpen}>
              Register
            </ButtonWithLink>
            <ButtonWithLink to="/signin" expanded={menuOpen}>
              Sign in
            </ButtonWithLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
