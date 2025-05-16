'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      }
    }
  };

 const vsTheme = {
  bg: "bg-[#1e1e1e]",             
  sidebar: "bg-[#252526]",        
  highlight: "text-[#569cd6]",   
  text: "text-[#d4d4d4]",        
  comment: "text-[#6a9955]",      
  string: "text-[#ce9178]",       
  keyword: "text-[#c586c0]",      
  method: "text-[#dcdcaa]",   
};


  return (
    <div className={`${vsTheme.bg} text-gray-300 min-h-screen`}>
      <div className="max-w-4xl mx-auto px-4 py-8 lg:mt-[30rem] mt-[90rem]  md:py-16 md:mt-[78rem]">
        {/* Header resembling VSCode tabs */}
        <div className="flex border-b border-gray-700 mb-6 md:mb-8 overflow-x-auto hide-scrollbar">
          <div className={`${vsTheme.highlight} px-3 sm:px-4 py-2 border-b-2 border-blue-400 font-medium whitespace-nowrap`}>about.js</div>
          <div className="px-3 sm:px-4 py-2 text-gray-500 whitespace-nowrap">projects.js</div>
          <div className="px-3 sm:px-4 py-2 text-gray-500 whitespace-nowrap">contact.js</div>
        </div>

        <motion.div 
          className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Left side - Description */}
          <motion.div className="w-full lg:w-3/5" variants={itemVariants}>
            <motion.div 
              className="mb-6 md:mb-8"
              variants={itemVariants}
            >
              <motion.h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${vsTheme.highlight} tracking-tight`}>Archit Srivastava</motion.h1>
              <motion.h2 className={`text-lg ${vsTheme.keyword} font-medium mb-4 sm:mb-6`}>Software Engineer</motion.h2>
              
              <motion.div className={`p-4 sm:p-5 rounded-md ${vsTheme.sidebar} mb-5 sm:mb-6 border-l-4 border-blue-400`}>
                <motion.p className="mb-3 sm:mb-4 leading-relaxed">
                  Hey! I'm a software engineer from Mumbai, India. I primarily work with JavaScript / TypeScript and the React ecosystem.
                </motion.p>
                <motion.p className="leading-relaxed">
                  I'm focused on frontend development with React, but you'll also find me working with Node.js, MongoDB and Express while building the backend for my personal projects.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={`p-4 sm:p-5 rounded-md ${vsTheme.sidebar} mb-5 sm:mb-6`}
              variants={itemVariants}
            >
              <motion.div className="flex items-center mb-3 sm:mb-4">
                <motion.span className={`${vsTheme.method} text-lg sm:text-xl mr-2`}>{">"}</motion.span>
                <motion.h3 className={`text-lg sm:text-xl font-semibold ${vsTheme.method}`}>Experience</motion.h3>
              </motion.div>
              <motion.p className="mb-3 sm:mb-4 leading-relaxed">
                Currently at <motion.span 
                  className={`${vsTheme.string} font-medium cursor-pointer relative group`}
                  whileHover={{ scale: 1.02 }}
                >
                  Tessact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </motion.span> as Software Engineer 2, working with a lean team of 4 frontend engineers to build a next-gen video creation suite for the people of video.
              </motion.p>
              <motion.p className="leading-relaxed">
                I've been leading the development efforts for bringing collaborative video reviewing and editing to the platform. I also maintain our in-house component library, icon library and website.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className={`p-4 sm:p-5 rounded-md ${vsTheme.sidebar} mb-5 sm:mb-6`}
              variants={itemVariants}
            >
              <motion.div className="flex items-center mb-3 sm:mb-4">
                <motion.span className={`${vsTheme.method} text-lg sm:text-xl mr-2`}>{">"}</motion.span>
                <motion.h3 className={`text-lg sm:text-xl font-semibold ${vsTheme.method}`}>Writing</motion.h3>
              </motion.div>
              <motion.p className="leading-relaxed">
                I've had the pleasure of writing for some amazing publications like{' '}
                <motion.a 
                  href="#" 
                  className={`${vsTheme.string} font-medium cursor-pointer relative group`}
                  whileHover={{ scale: 1.02 }}
                >
                  100ms Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>,{' '}
                <motion.a 
                  href="#" 
                  className={`${vsTheme.string} font-medium cursor-pointer relative group`}
                  whileHover={{ scale: 1.02 }}
                >
                  LogRocket Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>,{' '}
                <motion.a 
                  href="#" 
                  className={`${vsTheme.string} font-medium cursor-pointer relative group`}
                  whileHover={{ scale: 1.02 }}
                >
                  DEV.to
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a> and more as a freelance technical author.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className={`p-4 sm:p-5 rounded-md ${vsTheme.sidebar}`}
              variants={itemVariants}
            >
              <motion.div className="flex items-center mb-3 sm:mb-4">
                <motion.span className={`${vsTheme.method} text-lg sm:text-xl mr-2`}>{">"}</motion.span>
                <motion.h3 className={`text-lg sm:text-xl font-semibold ${vsTheme.method}`}>Beyond Code</motion.h3>
              </motion.div>
              <motion.p className="leading-relaxed">
                Aside from programming and writing, I like to read a good dystopian novel, listen to calm piano music or just laze around.
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image and Visual Elements */}
          <motion.div 
            className="w-full lg:w-2/5 lg:sticky lg:top-20 flex flex-col items-center mt-6 lg:mt-0"
            variants={imageVariants}
          >
            {/* Image with code block style frame */}
            <motion.div 
              className={`w-full rounded-lg ${vsTheme.sidebar} overflow-hidden border border-gray-700 shadow-2xl`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Code-like header */}
              <div className="flex justify-between items-center p-2 border-b border-gray-700 bg-gray-800">
                <span className="text-xs text-gray-400">profile.png</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Image */}
              <div className="p-2">
                <img 
                  src="/logo/my-img.jpg" 
                  alt="Archit Srivastava" 
                  className="w-full rounded object-cover h-auto"
                />
              </div>
              
              {/* Code-like footer with line numbers */}
              <div className="flex text-xs p-1 bg-gray-800 border-t border-gray-700">
                <div className="text-gray-500 w-10 text-center border-r border-gray-700">42</div>
                <div className="text-gray-400 pl-2">// That's me coding away!</div>
              </div>
            </motion.div>
            
            {/* VSCode-style panel */}
            <motion.div 
              className={`mt-6 sm:mt-8 w-full rounded-lg ${vsTheme.sidebar} border border-gray-700 overflow-hidden`}
              variants={itemVariants}
            >
              <div className="p-3 bg-gray-800 border-b border-gray-700">
                <span className={`${vsTheme.keyword} font-medium`}>SKILLS</span>
              </div>
              <div className="p-3 sm:p-4">
                <div className="mb-3">
                  <span className={`${vsTheme.method}`}>frontend</span>
                  <span className={`${vsTheme.text}`}>: [</span>
                  <span className={`${vsTheme.string}`}>"React"</span>
                  <span className={`${vsTheme.text}`}>, </span>
                  <span className={`${vsTheme.string}`}>"TypeScript"</span>
                  <span className={`${vsTheme.text}`}>, </span>
                  <span className={`${vsTheme.string}`}>"Next.js"</span>
                  <span className={`${vsTheme.text}`}>]</span>
                </div>
                <div className="mb-3">
                  <span className={`${vsTheme.method}`}>backend</span>
                  <span className={`${vsTheme.text}`}>: [</span>
                  <span className={`${vsTheme.string}`}>"Node.js"</span>
                  <span className={`${vsTheme.text}`}>, </span>
                  <span className={`${vsTheme.string}`}>"Express"</span>
                  <span className={`${vsTheme.text}`}>]</span>
                </div>
                <div>
                  <span className={`${vsTheme.method}`}>database</span>
                  <span className={`${vsTheme.text}`}>: [</span>
                  <span className={`${vsTheme.string}`}>"MongoDB"</span>
                  <span className={`${vsTheme.text}`}>]</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* VSCode-like footer */}
        <motion.div 
          className="mt-8 sm:mt-12 pt-4 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 gap-2"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>UTF-8</span>
            <span>Ln 42, Col 18</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;