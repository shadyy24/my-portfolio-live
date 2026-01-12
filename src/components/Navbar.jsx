import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaLaptopCode, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <FaHome /> },
    { name: 'About', to: 'about', icon: <FaUser /> },
    { name: 'Skills', to: 'skills', icon: <FaCode /> },
    { name: 'Projects', to: 'projects', icon: <FaLaptopCode /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: '90%',
          maxWidth: '600px',
        }}
      >
        <div style={{
          background: 'rgba(20, 20, 25, 0.65)',
          backdropFilter: 'blur(16px)',
          webkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50px',
          padding: '10px 25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : '0 5px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}>

          <div className="logo" style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', marginRight: '20px' }}>
            <span className="gradient-text">SK.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="desktop-menu" style={{ display: 'flex', gap: '5px', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  activeClass="active-pill"
                  className="nav-link-pill"
                >
                  <span className="icon">{link.icon}</span>
                  <span className="text">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '50%',
              x: '-50%',
              width: '90%',
              maxWidth: '300px',
              background: '#111',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '20px',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="mobile-link"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .nav-link-pill:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }

        .active-pill {
          background: var(--primary-color) !important;
          color: #000 !important;
          box-shadow: 0 0 15px rgba(204, 255, 0, 0.3);
          font-weight: 700;
        }

        .mobile-toggle {
          display: none;
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }

        .mobile-link:hover {
          background: rgba(255,255,255,0.05);
          color: var(--primary-color);
          padding-left: 18px;
        }
        
        .nav-link-pill .icon { display: none; }

        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
