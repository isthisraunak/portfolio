import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children, darkMode, setDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Mouse follower gradient */}
      <motion.div 
        className="fixed pointer-events-none w-32 h-32"
        animate={{ 
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: 'spring', mass: 0.5 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-blue-400/30 to-purple-400/20' : 'from-blue-400/20 to-purple-400/10'} rounded-full blur-2xl`} />
      </motion.div>

      {/* Navigation */}
      <nav className="px-6 py-4 md:px-8 md:py-6 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          Raunak S. Negi
        </motion.h1>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg transition-all ${
            darkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </motion.button>
      </nav>

      {children}
    </div>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Raunak
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting immersive digital experiences through modern web development
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="min-h-screen flex flex-col justify-center items-center pb-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="flex justify-center gap-12">
            {/* Email */}
            <motion.a
              href="mailto:negiraunak49@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-6 rounded-2xl backdrop-blur-lg bg-opacity-20 bg-gray-100 dark:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/raunaksnegi1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-6 rounded-2xl backdrop-blur-lg bg-opacity-20 bg-gray-100 dark:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-pink-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-xl text-gray-500 dark:text-gray-400"
          >
            Feel free to reach out!
          </motion.p>
        </motion.div>
      </section>
    </Layout>
  );
}
