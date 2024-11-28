"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTelephoneInboundFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import MenuHeader from "../header.menu/header.menu";
import { useEffect, useState } from "react";
const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Header hiển thị mặc định
  const [lastScrollPos, setLastScrollPos] = useState(0); // Lưu vị trí cuộn cuối cùng

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos && currentScrollPos > 250) {
        // Cuộn xuống và đã cuộn quá 100px, hiện header
        setIsVisible(true);
      } else {
        // Cuộn lên hoặc chưa cuộn đủ 100px, ẩn header
        setIsVisible(false);
      }
      setLastScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);
  return (
    <>
      <header className="bg-slate-500">
        <div className="bg-colorPrimary">
          <div className="flex md:justify-between justify-center md:max-w-[1170px] mx-auto p-1 items-center px-3.5 w-full">
            {/* tablet */}
            <div>
              <p className="text-xs text-textPrimary uppercase font-bold hidden md:block">
                CHÀO QUÝ KHÁCH ĐẾN VỚI THU MUA PHẾ LIỆU TÀI LỘC VI NA
              </p>
            </div>
            <div className="md:flex gap-2 hidden">
              <div className="flex items-center gap-1 border-indigo-500">
                <FaLocationDot className="text-textPrimary/70 text-sm" />
                <p className="text-textPrimary/70 text-sm uppercase">
                  Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương
                </p>
              </div>
              <div className="border-r-[1px] border-textPrimary/20"></div>
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-textPrimary/70 text-base" />
                <p className="text-textPrimary/70 text-base uppercase">
                  <strong>0989 015 053</strong>
                </p>
              </div>
            </div>
            {/* mobile */}
            <div className="p-2 md:hidden">
              <div className="flex items-center gap-2 w-full">
                <div className="border-2 border-textPrimary rounded-full p-2">
                  <BsTelephoneInboundFill className="text-xl text-textPrimary" />
                </div>
                <p className="text-lg text-textPrimary ">
                  <strong>0989 015 053</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-24 flex justify-center">
          <div className="flex md:max-w-[1170px]  items-center md:justify-between w-full  px-3.5">
            <MenuHeader />
            <div className="mx-auto md:mx-0">
              <Image
                src="/logo-horizontal.svg"
                width={240}
                height={0}
                alt="Công Ty TNHH Tài Lộc Vi Na"
                priority
              />
            </div>
            <div className="md:flex items-center gap-2 hidden">
              <div className="border-2 border-colorPrimary rounded-full p-2">
                <BsTelephoneInboundFill className="text-xl text-colorPrimary" />
              </div>
              <p className="text-lg ">
                <strong>0989 015 053</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-colorPrimary hidden md:block">
          <div className="w-[1170px] mx-auto flex items-center px-3.5">
            <ul className="flex items-center py-2">
              <li>
                <Link
                  href="#"
                  className="uppercase text-textPrimary text-sm font-bold py-2 mr-2"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                >
                  Thu mua phế liệu giá cao
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isVisible && (
        <header className="fixed left-0 top-0 right-0 animate-slideDown z-50">
          <div className="bg-white/90 h-20 flex justify-center">
            <div className="flex md:w-[1170px] items-center md:justify-between w-full px-4">
              <MenuHeader />
              <div className="mx-auto md:mx-0">
                <Image
                  src="/logo-horizontal.svg"
                  width={240}
                  height={0}
                  alt="Công Ty TNHH Tài Lộc Vi Na"
                  priority
                />
              </div>
              <div className="md:flex items-center gap-2 hidden">
                <div className="border-2 border-colorPrimary rounded-full p-2">
                  <BsTelephoneInboundFill className="text-xl text-colorPrimary" />
                </div>
                <p className="text-lg text-black"><strong>0989 015 053</strong></p>
              </div>
            </div>
          </div>
          <div className="bg-colorPrimary hidden md:block">
            <div className="w-[1170px] mx-auto  flex items-center px-4">
              <ul className="flex items-center py-2">
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm font-bold py-2 mr-2"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                  >
                    Thu mua phế liệu giá cao
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
