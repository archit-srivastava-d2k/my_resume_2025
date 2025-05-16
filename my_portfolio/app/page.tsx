'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import Head from 'next/head';

export default function Home() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const codeLines = [
    { code: 'const Home = () => {', type: 'function' },
    {
      code: '  const [isLoaded, setIsLoaded] = useState(true);',
      type: 'variable',
    },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Archit Srivastava',", type: 'array-item' },
    { code: "    role: 'Full Stack Developer',", type: 'array-item' },
    { code: "    bio: 'Building modern web experiences'", type: 'array-item' },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  useEffect(() => {', type: 'nested-function' },
    {
      code: '    document.title = `${developerInfo.name} | Portfolio`;',
      type: 'return',
    },
    { code: '    setIsLoaded(true);', type: 'function-call' },
    { code: '  }, []);', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  return (', type: 'return-object' },
    { code: '    <main className="hero-container">', type: 'object-method' },
    { code: '      <h1>{developerInfo.name}</h1>', type: 'object-method' },
    { code: '      <p>{developerInfo.role}</p>', type: 'object-method' },
    { code: '      <div className="cta">', type: 'object-method' },
    {
      code: '        <Link href="/projects">View Projects</Link>',
      type: 'object-method',
    },
    { code: '      </div>', type: 'object-method' },
    { code: '    </main>', type: 'object-method' },
    { code: '  );', type: 'close' },
    { code: '};', type: 'close-function' },
    { code: '', type: 'blank' },
    { code: 'export default Home;', type: 'function-call' },
  ];

  // Check window size and update states
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  // Line type variants for syntax highlighting
  const getLineClass = (type:any) => {
    switch (type) {
      case 'function':
        return 'text-[#C586C0]';
      case 'variable':
        return 'text-[#9CDCFE]';
      case 'array-item':
        return 'text-[#CE9178]';
      case 'array-end':
        return 'text-[#DCDCAA]';
      case 'nested-function':
        return 'text-[#C586C0]';
      case 'return':
        return 'text-[#DCDCAA]';
      case 'function-call':
        return 'text-[#4EC9B0]';
      case 'close':
        return 'text-[#808080]';
      case 'return-object':
        return 'text-[#9CDCFE]';
      case 'object-method':
        return 'text-[#DCDCAA]';
      case 'close-function':
        return 'text-[#C586C0]';
      default:
        return 'text-[#CCCCCC]';
    }
  };

  // Mobile-specific highlighted code sample
  const MobileCodePreview = () => (
    <div className="w-full bg-[#1E1E1E] rounded-lg shadow-lg p-4 mb-6 pt-14 border border-[#252526] text-sm">
      <div className="text-[#C586C0]">const</div>
      <div className="text-[#DCDCAA] ml-2">developer</div>
      <div className="text-[#CCCCCC] ml-2">= {`{`}</div>
      <div className="text-[#9CDCFE] ml-4">name:</div>
      <div className="text-[#CE9178] ml-2 inline">'Nitin Ranganath',</div>
      <div className="text-[#9CDCFE] ml-4">skills:</div>
      <div className="text-[#CCCCCC] ml-2">[</div>
      <div className="text-[#CE9178] ml-6">'React', 'Next.js', 'Full Stack'</div>
      <div className="text-[#CCCCCC] ml-2">]</div>
      <div className="text-[#CCCCCC]">{`};`}</div>
    </div>
  );

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="relative flex justify-center items-center h-[80vh] w-full font-['Inter',sans-serif]">
        <div className="z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-8 lg:px-4">
          {/* Conditional rendering based on screen size */}
          {!isMobile ? (
            /* Desktop and Tablet Code Section */
            <div className={`w-full ${isTablet ? 'order-2' : 'lg:w-1/2'} relative z-10`}>
              <div className="w-full max-w-full lg:max-w-xl h-[440px] md:h-[500px] lg:h-[550px] bg-[#1E1E1E] rounded-lg shadow-2xl overflow-hidden border border-[#252526] font-['JetBrains_Mono',monospace]">                
                <div className="flex h-full relative overflow-hidden">
                  {/* Line Numbers */}
                  <div className="flex flex-col py-4 w-12 bg-[#1E1E1E] text-[#636E83] text-xs select-none text-right z-[2]">
                    {codeLines.map((_, index) => (
                      <div
                        key={index}
                        className={`leading-relaxed py-[2px] pr-2.5 transition-colors duration-300 ${
                          index === activeLineIndex ? 'text-white' : ''
                        }`}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1 py-4 pr-5 text-xs text-white overflow-y-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#1E1E1E] z-[2]">
                    {codeLines.map((line, index) => (
                      <div
                        key={index}
                        className={`py-[2px] transition-all duration-300 relative whitespace-pre ${getLineClass(line.type)} ${
                          index === activeLineIndex ? 'bg-[rgba(255,255,255,0.04)] rounded' : ''
                        }`}
                      >
                        {index === activeLineIndex && (
                          <span className="absolute left-[-10px] top-0 bottom-0 w-[3px] bg-[#0078D4] rounded-r"></span>
                        )}
                        {line.code}
                      </div>
                    ))}
                  </div>
                  
                  {/* Overlay Glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-[rgba(0,120,212,0.03)] to-transparent pointer-events-none z-[1]"></div>
                </div>
              </div>
            </div>
          ) : (
            /* Mobile Code Preview */
            <MobileCodePreview />
          )}

          {/* Info Section */}
          <div className={`w-full ${!isMobile && !isTablet ? 'lg:w-1/2' : ''} flex flex-col gap-6 relative z-10 py-6 md:py-12`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight text-center lg:text-left">
             Archit <span className="text-[#0078D4]">Srivastava</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl text-[rgba(255,255,255,0.8)] -mt-2 text-center lg:text-left">
              Full Stack Web Developer
            </div>

            <p className="text-base md:text-lg leading-relaxed text-[rgba(255,255,255,0.7)] max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              I build elegant, responsive web applications with modern
              technologies. Focused on clean code and intuitive user experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-2">
              <Link 
                href="/projects" 
                className="group flex items-center gap-2 bg-[#0078D4] hover:bg-[#0086F0] text-white px-6 py-3 rounded-md font-medium relative overflow-hidden isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0078D4]/30"
              >
                View Projects 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <VscArrowRight />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-[-1]"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30 z-[-2]"></div>
          
          {/* Code Flare */}
          <div className="absolute top-[-150px] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-radial-gradient from-[rgba(0,120,212,0.08)] via-[rgba(0,120,212,0.02)] to-transparent blur-[40px] opacity-80 z-[-1] animate-pulse"></div>
          
          {/* Don't render these on mobile for performance */}
          {!isMobile && (
            <>
              {/* Code Blocks */}
              <div className="absolute top-[10%] left-0 opacity-15 text-[rgba(0,120,212,0.08)] text-[100px] md:text-[180px] font-['JetBrains_Mono',monospace] font-bold leading-none select-none blur-[2px] -rotate-10 animate-float">
                {'{'}
              </div>
              
              <div className="absolute bottom-[10%] right-[15%] opacity-10 text-[rgba(0,120,212,0.08)] text-[100px] md:text-[180px] font-['JetBrains_Mono',monospace] font-bold leading-none select-none blur-[2px] rotate-10 animate-float-delayed">
                {'}'}
              </div>
              
              <div className="absolute top-[30%] right-[5%] opacity-5 text-[rgba(0,120,212,0.08)] text-[80px] md:text-[150px] font-['JetBrains_Mono',monospace] font-bold leading-none select-none blur-[2px] animate-float-alt">
                {'<>'}
              </div>
              
              <div className="absolute bottom-[10%] left-[20%] opacity-8 text-[rgba(0,120,212,0.08)] text-[90px] md:text-[160px] font-['JetBrains_Mono',monospace] font-bold leading-none select-none blur-[2px] animate-float-extra">
                {'/>'}
              </div>
              
              {/* Orbs */}
              <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-gradient-to-br from-[#0078D4] to-transparent blur-[30px] opacity-20 top-[20%] left-[10%] animate-orb-float"></div>
              
              <div className="absolute w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full bg-gradient-to-r from-[rgba(97,218,251,0.5)] to-transparent blur-[30px] opacity-20 bottom-[10%] right-[5%] animate-orb-float-alt"></div>
              
              {/* Code Symbols */}
              <div className="absolute top-[55%] right-[8%] opacity-12 text-[rgba(255,255,255,0.08)] text-[80px] md:text-[120px] font-['JetBrains_Mono',monospace] font-bold blur-px select-none z-[-1] rotate-10 animate-float-slow">
                {'()'}
              </div>
              
              <div className="absolute bottom-[25%] left-[7%] opacity-9 text-[rgba(255,255,255,0.08)] text-[80px] md:text-[120px] font-['JetBrains_Mono',monospace] font-bold blur-px select-none z-[-1] -rotate-5 animate-float-slow-alt">
                {'[]'}
              </div>
              
              {/* Dot Pattern */}
              <div className="absolute top-[10%] right-[30%] w-[150px] h-[150px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:15px_15px] rounded-full opacity-30 -rotate-10 animate-rotate-slow"></div>
            </>
          )}
        </div>
      </div>
      
      {/* Add custom animation classes */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(10deg); }
          50% { transform: translateY(20px) rotate(15deg); }
        }
        
        @keyframes float-alt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        
        @keyframes float-extra {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(10deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        
        @keyframes float-slow-alt {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(10px) rotate(-10deg); }
        }
        
        @keyframes orb-float {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(-20px); }
        }
        
        @keyframes orb-float-alt {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.2) translateY(20px); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-pulse {
          animation: pulse 8s infinite ease-in-out;
        }
        
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        
        .animate-float-delayed {
          animation: float-delayed 20s infinite ease-in-out;
          animation-delay: -7s;
        }
        
        .animate-float-alt {
          animation: float-alt 20s infinite ease-in-out;
          animation-delay: -3s;
        }
        
        .animate-float-extra {
          animation: float-extra 20s infinite ease-in-out;
          animation-delay: -10s;
        }
        
        .animate-float-slow {
          animation: float-slow 25s infinite ease-in-out;
        }
        
        .animate-float-slow-alt {
          animation: float-slow-alt 22s infinite ease-in-out;
          animation-delay: -8s;
        }
        
        .animate-orb-float {
          animation: orb-float 15s infinite alternate ease-in-out;
        }
        
        .animate-orb-float-alt {
          animation: orb-float-alt 20s infinite alternate-reverse ease-in-out;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 35s linear infinite;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 50%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
        }
        
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thumb-[#444]::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 10px;
        }
        
        .scrollbar-track-[#1E1E1E]::-webkit-scrollbar-track {
          background: #1E1E1E;
        }
      `}</style>
    </>
  );
}