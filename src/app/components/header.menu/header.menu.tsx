"use client";

import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const MenuHeader = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleToggleMenu = (): void => {
    setIsMenu(!isMenu);
  };
  const handleClickOutside = (event: MouseEvent):void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenu(false); // Đóng menu khi click bên ngoài
    }
  };
  useEffect(() => {
    if (isMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenu]);
  
  return (
    <div className="md:hidden">
      <MdOutlineMenu className="mr-3 text-3xl text-[#878787]  cursor-pointer" onClick={handleToggleMenu}/>
      {isMenu && (
        <div  className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
          <div className="absolute w-72 bg-white/95 bottom-0 top-0 left-0 animate-slideIn"  ref={menuRef}>
            <ul className="py-7">
              <li>
                <Link
                  href="#"
                  className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
                >
                  Thu mua phế liệu giá cao
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <button className="absolute right-0 p-1 cursor-pointer" onClick={handleToggleMenu}>
            <IoMdClose className="text-3xl text-[#8b8b8b]/50 hover:text-red-400" />
          </button>
        </div>
      )}
    </div>
  );
};
export default MenuHeader;
