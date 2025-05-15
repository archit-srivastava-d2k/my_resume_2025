// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
} from "react-icons/vsc";

const sidebarTopItems = [
  { Icon: VscFiles, path: "/" },
  { Icon: VscGithubAlt, path: "/github" },
  { Icon: VscCode, path: "/projects" },
  { Icon: VscEdit, path: "/articles" },
  { Icon: VscMail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: "/about" },
  { Icon: VscSettings, path: "/settings" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-[#1e1e1e] flex flex-col justify-between w-[4.5vw] min-w-[40px] h-[calc(100vh-30px)] 2xl:w-[2.5vw] lg:w-[4vw] md:w-[8vw] sm:w-[10vw] fixed top-[30px]">
      <div>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`w-full cursor-pointer hover:bg-[#2a2d2e] ${
                pathname === path ? "border-l-2 border-[#0078d4]" : ""
              }`}
            >
              <Icon
                size={16}
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
                className="h-12 w-12 py-[0.65rem] mx-auto block md:h-12 md:w-12 md:p-[0.6rem] sm:h-10 sm:w-10 sm:p-[0.6rem]"
              />
            </div>
          </Link>
        ))}
      </div>
      <div>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`w-full cursor-pointer hover:bg-[#2a2d2e] ${
                pathname === path ? "border-l-2 border-[#0078d4]" : ""
              }`}
            >
              <Icon
                size={16}
                fill={pathname === path ? "rgb(225, 228, 232)" : "rgb(106, 115, 125)"}
                className="h-12 w-12 py-[0.65rem] mx-auto block md:h-12 md:w-12 md:p-[0.6rem] sm:h-10 sm:w-10 sm:p-[0.6rem]"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;