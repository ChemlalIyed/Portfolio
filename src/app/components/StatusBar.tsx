import { FaDiscord } from 'react-icons/fa';
import { IoGitBranch } from 'react-icons/io5';

export function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <IoGitBranch size={14} />
          <span>main</span>
        </div>
        <div>0 ✓ 0 ✗</div>
        <a href='https://discord.com/users/iyedch_' className="flex items-center gap-2" >
          <FaDiscord fill='white'/>
          <p>Connected to Discord</p>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div>Ln 1, Col 1</div>
        <div>Spaces: 2</div>
        <div>UTF-8</div>
        <div>TypeScript JSX</div>
      </div>
    </div>
  );
}