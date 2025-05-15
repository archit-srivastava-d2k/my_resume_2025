import Image from 'next/image';

const Navbar = () => {
  return (
    <section className="bg-[#252526] h-[30px] px-2 flex items-center justify-center text-white font-sans text-sm border-b border-[#191d20]">
      <Image
        src="/logo/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className="flex-none"
      />
      <div className="flex flex-1 ml-2 mr-auto">
        <p className="px-2 cursor-pointer md:block hidden">File</p>
        <p className="px-2 cursor-pointer md:block hidden">Edit</p>
        <p className="px-2 cursor-pointer md:block hidden">View</p>
        <p className="px-2 cursor-pointer md:block hidden">Go</p>
        <p className="px-2 cursor-pointer md:block hidden">Run</p>
        <p className="px-2 cursor-pointer md:block hidden">Terminal</p>
        <p className="px-2 cursor-pointer md:block hidden">Help</p>
      </div>
      <p className="text-center md:flex-1 flex-4">Archit Srivastava - Visual Studio Code</p>
      <div className="flex flex-1 items-center ml-auto">
        <span className="ml-auto h-[13px] w-[13px] rounded-full bg-[#f1fa8c] cursor-pointer"></span>
        <span className="ml-2 h-[13px] w-[13px] rounded-full bg-[#50fa7b] cursor-pointer"></span>
        <span className="ml-2 h-[13px] w-[13px] rounded-full bg-[#ff5555] cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Navbar;