import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Menus, signOutAction } from "../utils/helpers";
import { slideUpOut } from "../animations";

const UserProfileDetails = () => {
  // const navigate = useNavigate()
  const user = useSelector((state) => state.user?.user);
  const [isMenu, setIsMenu] = useState(false);

  // const handleOnClick = () => {
  //   navigate("../home/projects")
  // }

  return (
    <div className="flex items-center justify-center gap-4 relative">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500">
        {user?.photoURL ? (
          <>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <motion.p
            whileHover={{ scale: 1.4 }}
            className="text-3xl text-white font-semibold capitalize"
          >
            {user?.email[0]}
          </motion.p>
        )}
      </div>
      <motion.div
        onClick={() => setIsMenu(!isMenu)}
        whileTap={{ scale: 0.9 }}
        className="px-4 py-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
      >
        <FaChevronDown className="text-primaryText" />
      </motion.div>

      <AnimatePresence>
        {isMenu && (
          <motion.div
            {...slideUpOut}
            className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-md shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]"
          >
            {Menus &&
              Menus.map((menu) => (
                <Link
                  to={menu.url}
                  key={menu.id}
                  className="text-primaryText hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
                >
                  {menu.name}
                </Link>
              ))}
            <motion.p
              onClick={signOutAction }
              whileTap={{ scale: 0.9 }}
              className="text-primaryText hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md cursor-pointer"
            >
              <p>Sign Out</p>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileDetails;
