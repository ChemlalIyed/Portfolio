import { VscVscode } from "react-icons/vsc";
import { SiLeetcode, SiPostman } from "react-icons/si";
import { FaGithub, FaPython, FaReact } from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
const Activity = () => {
  return (
    <div className=" w-13 flex flex-col  items-center ">
      <div className="text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        <VscVscode size={30}  />
      </div>
      <div className="text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        <FaGithub size={30}  />
      </div>
      <div className=" text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        {" "}
        <VscDebugAlt size={30}  />
      </div>
      <div className=" text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        {" "}
        <SiPostman size={30}  />
      </div>
      <div className=" text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        {" "}
        <FaPython size={30} />
      </div>
      <div className=" text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        <FaReact size={30}  />
      </div>
      <div className=" text-[#858585] hover:text-white  w-full flex items-center justify-center h-13 ">
        <SiLeetcode size={30}  />
      </div>
    </div>
  );
};
export default Activity;
