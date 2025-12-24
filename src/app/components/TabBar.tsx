import { IoClose } from 'react-icons/io5';
import { Tab } from '../App';
import { FaJsSquare, FaPython, FaReact } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
type TabBarProps = {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
};

export function TabBar({ tabs, activeTab, onTabClick, onCloseTab }: TabBarProps) {
  return (
    <div className="h-9 bg-[#252526] border-b border-[#2d2d30] flex items-center overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`h-full flex items-center gap-2 px-4 border-r border-[#2d2d30] cursor-pointer group relative ${
            activeTab === tab.id
              ? 'bg-[#1e1e1e] text-white'
              : 'bg-[#252526] text-[#858585] hover:text-[#cccccc]'
          }`}
          onClick={() => onTabClick(tab.id)}
        >
          {activeTab === tab.id && (
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#007acc]"></div>
          )}
            <span>
                               {tab.icon === 'react' ? <FaReact fill='#61dafb'/> : ''}
                               {tab.icon === 'py' ? <FaPython fill='#3776AB'/> : ''}
                                {tab.icon === 'js' ? <FaJsSquare fill='#f7df1e'/> : ''}
                                {tab.icon === 'c' ? <SiC fill='00599C'/> : ''}
                            </span>
          <span className="text-sm">{tab.title}</span>
          <button
            className="opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded p-0.5"
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(tab.id);
            }}
          >
            <IoClose size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}