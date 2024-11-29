"use client";

import Link from "next/link";
import { MutableRefObject } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  handleToggleMenu: () => void;
  menuRef: MutableRefObject<HTMLDivElement | null>;
}

const MenuHeader = ({ handleToggleMenu, menuRef }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 font-sans">
      <div
        className="absolute w-72 bg-white/95 bottom-0 top-0 left-0 animate-slideIn"
        ref={menuRef}
      >
        <ul className="py-7">
          <li>
            <Link
              href="/"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              href="/gioi-thieu"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link
              href="/thu-mua-phe-lieu"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
              onClick={handleToggleMenu}
            >
              DANH MỤC THU MUA
            </Link>
          </li>
          <li>
            <Link
              href="/lien-he"
              className="block py-3 pl-5 text-[#8b8b8b] font-bold uppercase text-xs hover:text-black hover:bg-black/5"
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
