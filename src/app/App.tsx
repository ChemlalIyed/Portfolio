import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TabBar } from './components/TabBar';
import { StatusBar } from './components/StatusBar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import Activity from './components/activity';

export type Tab = {
  id: string;
  title: string;
  icon: string;
};

export default function App() {
  const [activeTab, setActiveTab] = useState('about.tsx');
  const [openTabs, setOpenTabs] = useState<Tab[]>([
    { id: 'about.tsx', title: 'about.tsx', icon: 'react' },
  ]);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleFileClick = (fileId: string, fileName: string, icon: string) => {
    if (!openTabs.find((tab) => tab.id === fileId)) {
      setOpenTabs([...openTabs, { id: fileId, title: fileName, icon }]);
    }
    setActiveTab(fileId);
  };

  const handleCloseTab = (tabId: string) => {
    const newTabs = openTabs.filter((tab) => tab.id !== tabId);
    setOpenTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about.tsx':
        return <About />;
      case 'projects.tsx':
        return <Projects />;
      case 'skills.tsx':
        return <Skills />;
      case 'contact.tsx':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-screen bg-[#1e1e1e] text-[#cccccc] flex flex-col overflow-hidden">
      {/* Top Menu Bar */}
      <div className="h-9 bg-[#323233] flex items-center px-2 text-sm border-b border-[#2d2d30]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="ml-2">File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
        <div className="flex-1 text-center">Portfolio - Visual Studio Code</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Activity/>
        <Sidebar
          onFileClick={handleFileClick}
          activeFile={activeTab}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar
            tabs={openTabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
            onCloseTab={handleCloseTab}
          />
          
          {/* Content */}
          <div className="flex-1 overflow-auto bg-[#1e1e1e] p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}
