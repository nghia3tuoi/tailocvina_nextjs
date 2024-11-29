"use client";

import Link from "next/link";
import { MutableRefObject, useState } from "react";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
interface Props {
  handleToggleMenu: () => void;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

const MenuHeader = ({ handleToggleMenu, menuRef }: Props) => {
  const [isDropdown, setIsDropDown] = useState(false);
  const handleToggleDropdown = (): void => {
    setIsDropDown(!isDropdown);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 ">
      <div
        className="absolute w-72 bg-white/95 bottom-0 top-0 left-0 animate-slideIn"
        ref={menuRef}
      >
        <ul className="py-7">
          <li>
            <Link
              href="/"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-sm hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              href="/gioi-thieu"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-sm hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              Giới thiệu
            </Link>
          </li>
          <li>
            <div
              className="flex justify-between items-center  hover:bg-black/5  cursor-pointer"
              onClick={handleToggleDropdown}
            >
              <div className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-sm hover:text-black ">
                DANH MỤC THU MUA
              </div>
              <IoIosArrowDown className="text-2xl text-[#8b8b8b] mr-5" />
            </div>
            {/* drop down */}
            {isDropdown && (
              <ul className="pl-7">
                <li>
                  <Link
                     href="/thu-mua-vai-vun-gia-cao"
                    className="block text-[#8b8b8b] uppercase text-xs font-medium py-2 hover:text-black"
                  onClick={handleToggleMenu}>
                    Thu mua vải vụn số lượng lớn giá cao
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#8b8b8b] uppercase text-xs font-medium block py-2 hover:text-black"
                  >
                    Thu Gôm và Xử lí rác giá rẻ
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/lien-he"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-sm hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="absolute right-0 p-1 cursor-pointer"
        onClick={handleToggleMenu}
      >
        <IoMdClose className="text-3xl text-[#8b8b8b]/50 hover:text-red-400" />
      </button>
    </div>
  );
};

export default MenuHeader;
