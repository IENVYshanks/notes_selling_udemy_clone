import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ChatIcon from '@mui/icons-material/Chat';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import BuildIcon from '@mui/icons-material/Build';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// const svgVariants = {
//  close: {
//     rotate: 360,
//  },
//  open: {
//     rotate: 180,
//  },
// };

const containerVariants = {
 close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
 },
 open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
 },
};

function NavBar() {
 const [isOpen, setIsOpen] = useState(false);

 const containerControls = useAnimationControls();
 const svgControls = useAnimationControls();

 useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
 }, [isOpen]);

 const handleOpenClose = () => {
    setIsOpen(!isOpen);
 };

 return (
    <motion.nav>
      <motion.div
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="text-gray-400 text-lg pl-4 pt-4 flex flex-col h-[50rem] justify-start bg-stone-800 items-start bg--700 w-[15rem]  rounded-lg"
      >
        {/* <button
          className="p-1 rounded-full flex"
          onClick={handleOpenClose}
        > */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              animate={svgControls}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </svg>
        </button> */}
        <div className="space-y-3" onMouseEnter={handleOpenClose}>
        <div className="space-y-2" onMouseEnter= {handleOpenClose}>
          {isOpen ? (
            <div className="flex flex-col gap-4">
              <Link to="/Course">
               
               <h1 className="hover:bg-gray-600  text-xl p-2 rounded-lg w-[12rem] font-bold"><OndemandVideoIcon/>    Course</h1>
              </Link>
              <Link to="/Pages/Instructor/Communication"> 
                <h1 className="hover:bg-gray-600  text-xl p-2 rounded-lg w-[12rem] font-bold"><ChatIcon/>          Communication</h1>
              </Link>
              <Link to="/Performance"> 
                <h1 className="hover:bg-gray-600  text-xl p-2 rounded-lg w-[12rem] font-bold"><LeaderboardIcon/>   Performance</h1>
              </Link>
              <Link to="/Tools">
                <h1 className="hover:bg-gray-600  text-xl p-2 rounded-lg w-[12rem] font-bold"><BuildIcon/>    Tools</h1>
              </Link>
              <Link to="/Resource">
                <h1 className=" hover:bg-gray-600 text-xl p-2 rounded-lg w-[12rem] font-bold"><HelpOutlineIcon/>     Resource</h1>
              </Link>
            </div>

          ) : (
            <div className="flex flex-col gap-6">
              <Link to="/Coures">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <OndemandVideoIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
              <Link to="/Communication">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <ChatIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
              <Link to="/Performance">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <LeaderboardIcon sx={{ fontSize: 30}} />
                </motion.div>
              </Link>
              <Link to="/Tools">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <BuildIcon sx={{ fontSize: 30}} />
                </motion.div>
              </Link>
              <Link to="/Resource">
                <motion.div initial={{ scale: 1 }}
                 whileTap={{ scale: 1.2 }}
                 whileHover={{ opacity: 0.1, scale: 1.4 }}
                >
                 <HelpOutlineIcon sx={{ fontSize: 30}}/>
                </motion.div>
              </Link>
            </div>
          )}
        </div>
        </div>
      </motion.div>
    </motion.nav>
 );
}

export default NavBar;