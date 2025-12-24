import { IoMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <span className="text-[#c586c0]">const</span>{' '}
        <span className="text-[#4ec9b0]">contact</span> = {'{'} 
      </div>
      
      <div className="ml-8 space-y-4">
        <div>
          <span className="text-[#9cdcfe]">email</span>
          <span className="text-[#d4d4d4]">: </span>
          <a 
            href="mailto:iyedchemlal@gmail.com" 
            className="text-[#ce9178] hover:underline"
          >
            "iyedchemlal@gmail.com"
          </a>
          <span className="text-[#d4d4d4]">,</span>
        </div>
        
        <div>
          <span className="text-[#9cdcfe]">social</span>
          <span className="text-[#d4d4d4]">: {'{'}</span>
        </div>
        
        <div className="ml-8 space-y-2">
          <div>
            <span className="text-[#9cdcfe]">github</span>
            <span className="text-[#d4d4d4]">: </span>
            <a 
              href="https://github.com/ChemlalIyed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ce9178] hover:underline"
            >
              "github.com/ChemlalIyed"
            </a>
            <span className="text-[#d4d4d4]">,</span>
          </div>
          
          <div>
            <span className="text-[#9cdcfe]">linkedin</span>
            <span className="text-[#d4d4d4]">: </span>
            <a 
              href="https://linkedin.com/in/chemlal-iyed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ce9178] hover:underline"
            >
              "linkedin.com/in/chemlal-iyed"
            </a>
            <span className="text-[#d4d4d4]">,</span>
          </div>
          
          <div>
            <span className="text-[#9cdcfe]">Discord</span>
            <span className="text-[#d4d4d4]">: </span>
            <a 
              href="https://discord.com/users/iyedch_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ce9178] hover:underline"
            >
              "discord.com/users/iyedch_"
            </a>
            <span className="text-[#d4d4d4]">,</span>
          </div>

          <div>
            <span className="text-[#9cdcfe]">LeetCode</span>
            <span className="text-[#d4d4d4]">: </span>
            <a 
              href="https://leetcode.com/u/miyedch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ce9178] hover:underline"
            >
              "leetcode.com/u/miyedch/"
            </a>
          </div>
        </div>
        
        <div className="text-[#d4d4d4]">{'},'}</div>
        
        <div>
          <span className="text-[#9cdcfe]">availability</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"Open to opportunities"</span>
          <span className="text-[#d4d4d4]">,</span>
        </div>
        
        <div>
          <span className="text-[#9cdcfe]">preferredContact</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"email"</span>
        </div>
      </div>
      
      <div className="mt-8 text-[#d4d4d4]">{'};'}</div>

      <div className="mt-12 pt-8 border-t border-[#2d2d30]">
        <div className="flex gap-6 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-[#2d2d30] hover:bg-[#3e3e42] rounded transition-colors"
          >
            <IoMail size={20} />
            <span>Email Me</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#2d2d30] hover:bg-[#3e3e42] rounded transition-colors"
          >
            <IoLogoGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#2d2d30] hover:bg-[#3e3e42] rounded transition-colors"
          >
            <IoLogoLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="mt-12">
        <span className="text-[#6a9955]">// Feel free to reach out for collaborations or just a chat!</span>
      </div>
      
      <div className="mt-4">
        <span className="text-[#c586c0]">export default</span>{' '}
        <span className="text-[#4ec9b0]">contact</span>
        <span className="text-[#d4d4d4]">;</span>
      </div>
    </div>
  );
}