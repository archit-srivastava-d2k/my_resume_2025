'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

const explorerItems = [
  {
    name: 'home.tsx',
    path: '/',
    icon: '/logo/react_icon.svg',
  },
  {
    name: 'about.html',
    path: '/about',
    icon: '/logo/html_icon.svg',
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: '/logo/css_icon.svg',
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: '/logo/js_icon.svg',
  },
  {
    name: 'articles.json',
    path: '/articles',
    icon: '/logo/json_icon.svg',
  },
  {
    name: 'github.md',
    path: '/github',
    icon: '/logo/markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
<div className="hidden sm:block bg-[#1e1e1e] h-[calc(100vh-30px)] mx-16  min-w-[15px] text-[rgb(225,228,232)] font-sans border-r border-[#252526] 2xl:w-[8vw] xl:w-[8.8vw] lg:w-[5vw]  ">
      <p className="p-[0.5rem_0.75rem] font-light uppercase text-[0.9rem] tracking-wider mb-3">
        Explorer
      </p>
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 -z-10"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label
          htmlFor="portfolio-checkbox"
          className="uppercase font-bold text-[0.8rem] tracking-wider flex items-center cursor-pointer px-2"
        >
          <VscChevronRight
            className="transition-transform duration-200"
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className="py-2 cursor-pointer"
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className="px-4 py-[0.2rem] flex items-center text-[0.875rem] text-white hover:bg-[#2a2d2e]">
                <Image src={item.icon} alt={item.name} height={18} width={18} />
                <p className="ml-[5px]">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;