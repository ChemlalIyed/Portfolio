import { useState } from 'react';
import { FaJsSquare, FaPython, FaReact } from 'react-icons/fa';
import { IoChevronForward, IoChevronDown, IoFolderOpen, IoFolder, IoSearch, IoSettings, IoGitBranch, IoMenu, IoSettingsOutline } from 'react-icons/io5';
import { SiC } from 'react-icons/si';

type SidebarProps = {
  onFileClick: (fileId: string, fileName: string, icon: string) => void;
  activeFile: string;
  collapsed: boolean;
  onToggleCollapse: () => void;
};

export function Sidebar({ onFileClick, activeFile, collapsed }: SidebarProps) {
  const [portfolioExpanded, setPortfolioExpanded] = useState(true);

  const files = [
    { id: 'about.tsx', name: 'about.tsx', icon: 'react' },
    { id: 'projects.tsx', name: 'projects.js', icon: 'js' },
    { id: 'skills.tsx', name: 'skills.py', icon: 'py' },
    { id: 'contact.tsx', name: 'contact.c', icon: 'c' },
  ];

  if (collapsed) {
    return (
      <div className="w-12 bg-[#252526] border-r border-[#2d2d30] flex flex-col items-center py-4 gap-4">
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoMenu size={20} />
        </button>
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoSearch size={20} />
        </button>
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoGitBranch size={20} />
        </button>
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoSettingsOutline size={20}  />
        </button>
      </div>
    );
  }

  return (
    <div className="w-55 bg-[#252526] border-r border-[#2d2d30] flex flex-col">
      {/* Sidebar Header */}
      <div className="h-9 flex items-center px-4 text-xs uppercase tracking-wider text-[#858585]">
        Explorer
      </div>

      {/* File Explorer */}
      <div className="flex-1 overflow-auto">
        <div>
          {/* Portfolio Folder */}
          <div
            className="flex items-center gap-1 px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer"
            onClick={() => setPortfolioExpanded(!portfolioExpanded)}
          >
            {portfolioExpanded ? (
              <IoChevronDown size={16} className="text-[#858585]" />
            ) : (
              <IoChevronForward size={16} className="text-[#858585]" />
            )}
            {portfolioExpanded ? (
              <IoFolderOpen size={16} className="text-[#dcb67a]" />
            ) : (
              <IoFolder size={16} className="text-[#dcb67a]" />
            )}
            <span className="text-sm">PORTFOLIO</span>
          </div>

          {/* Files */}
          {portfolioExpanded && (
            <div className="ml-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className={`flex items-center gap-2 px-4 py-1 cursor-pointer text-sm ${
                    activeFile === file.id
                      ? 'bg-[#37373d] text-white'
                      : 'hover:bg-[#2a2d2e]'
                  }`}
                  onClick={() => onFileClick(file.id, file.name, file.icon)}
                >
                  <span>
                     {file.icon === 'react' ? <FaReact fill='#61dafb'/> : ''}
                     {file.icon === 'py' ? <FaPython fill='#3776AB'/> : ''}
                      {file.icon === 'js' ? <FaJsSquare fill='#f7df1e'/> : ''}
                      {file.icon === 'c' ? <SiC fill='00599C'/> : ''}
                  </span>
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Footer Icons */}
      <div className="border-t border-[#2d2d30] p-2 flex gap-2">
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoSearch size={20} />
        </button>
        <button className="text-[#858585] hover:text-[#cccccc]">
          <IoGitBranch size={20} />
        </button>
        <button className="text-[#858585] hover:text-[#cccccc]">
         <IoSettingsOutline size={20}  />
        </button>
      </div>
    </div>
  );
}
/// #61dafb