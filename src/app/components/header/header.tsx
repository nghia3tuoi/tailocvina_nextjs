"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTelephoneInboundFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import MenuHeader from "../header.menu/header.menu";
import { useEffect, useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Header hiển thị mặc định
  const [lastScrollPos, setLastScrollPos] = useState(0); // Lưu vị trí cuộn cuối cùng
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

  const handleToggleMenu = (): void => {
    setIsMenu(!isMenu);
  };
  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenu(false); // Đóng menu khi click bên ngoài
    }
  };

  return (
    <div>
      <header className="bg-slate-500">
        <div className="bg-colorPrimary">
          <div className="flex md:justify-between justify-center md:container mx-auto py-1 items-center px-4 w-full">
            {/* tablet */}
            <div>
              <p className="text-xs text-textPrimary font-bold hidden md:block uppercase">
                chào mừng quý khách đến với{" "}
                <strong>công ty phế liệu tài lộc vi na</strong>
              </p>
            </div>
            <div className="md:flex gap-2 hidden">
              <div className="flex items-center gap-1 border-indigo-500">
                <FaLocationDot className="text-textPrimary/70 text-sm" />
                <p className="text-textPrimary/70 text-xs uppercase">
                  khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An, Tỉnh
                  Bình Dương
                </p>
              </div>
              <div className="border-r-[1px] border-textPrimary/20"></div>
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-textPrimary/70 text-xs" />
                <p className="text-textPrimary/70 text-xs uppercase">
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
        <div className="bg-white h-24 flex justify-center items-center relative">
          <div className="flex md:container items-center md:justify-between w-full px-4">
            <div className="md:hidden absolute">
              <MdOutlineMenu
                className="mr-3 text-3xl text-black/80  cursor-pointer"
                onClick={handleToggleMenu}
              />
            </div>
            <Link href="/" className="mx-auto md:mx-0 z-10">
              <Image
                src="/logo-horizontal.svg"
                priority
                width={0}
                height={0}
                alt="công ty thu mua phế liệu tài lộc vi na"
                className="w-60 h-auto"
              />
            </Link>
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
          <div className="md:container max-w-full mx-auto flex items-center px-4">
            <ul className="flex items-center py-2">
              <li>
                <Link
                  href="/"
                  className="uppercase block text-textPrimary text-sm font-bold py-2 mr-2 hover:text-textColorTitle"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/gioi-thieu"
                  className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2 hover:text-textColorTitle block"
                >
                  Giới thiệu
                </Link>
              </li>
              <li className="relative group">
                <div className="uppercase text-textPrimary text-sm font-bold py-2 mx-2 hover:text-textColorTitle cursor-pointer">
                  Thu mua phế liệu giá cao
                </div>
                {/* dropdown */}
                <ul className=" z-10 hidden group-hover:block bg-colorPrimary top-[125%] absolute divide-y divide-white/20 rounded-sm w-60">
                  <li>
                    <Link
                      href="/thu-mua-vai-vun-gia-cao"
                      className="hover:text-textColorTitle  text-sm px-2 py-4 font-bold text-white block capitalize"
                    >
                      Thu mua vải vụn số lượng lớn giá cao
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/thu-gom-xu-ly-rac-thai-gia-re"
                      className=" hover:text-textColorTitle text-sm px-2 py-4 font-bold text-white  capitalize block"
                    >
                      Thu Gôm Xử Lí Rác Thải Giá rẻ
                    </Link>
                  </li>
                </ul>
                <div className="absolute h-4 w-full z-10 "></div>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="block uppercase text-textPrimary text-sm  font-bold py-2 mx-2 hover:text-textColorTitle"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {isVisible && (
        <header className="fixed left-0 top-0 right-0 animate-slideDown z-10">
          <div className="bg-white/90 h-20 flex justify-center">
            <div className="flex md:w-[1170px] items-center md:justify-between w-full px-4">
              <div className="md:hidden">
                <MdOutlineMenu
                  className="mr-3 text-3xl text-black/80  cursor-pointer"
                  onClick={handleToggleMenu}
                />
              </div>
              <div className="mx-auto md:mx-0">
              <Image
                src="/logo-horizontal.svg"
                priority
                width={0}
                height={0}
                alt="công ty thu mua phế liệu tài lộc vi na"
                className="w-60 h-auto"
              />
              </div>
              <div className="md:flex items-center gap-2 hidden">
                <div className="border-2 border-colorPrimary rounded-full p-2">
                  <BsTelephoneInboundFill className="text-xl text-colorPrimary" />
                </div>
                <p className="text-lg text-black">
                  <strong>0989 015 053</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-colorPrimary hidden md:block">
            <div className="w-[1170px] mx-auto  flex items-center px-4">
              <ul className="flex items-center py-2">
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm font-bold py-2 mr-2 block"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-textPrimary text-sm  font-bold py-2 mx-2 block"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li className="relative group">
                  <div className="uppercase text-textPrimary text-sm font-bold py-2 mx-2 cursor-pointer">
                    Thu mua phế liệu giá cao
                  </div>
                  {/* dropdown */}
                  <ul className="group-hover:block hidden bg-colorPrimary top-[125%] absolute divide-y divide-white/20 rounded-sm w-60">
                    <li>
                      <Link
                        href="/thu-mua-vai-vun-gia-cao"
                        className="hover:text-textColorTitle  text-sm px-2 py-4 font-bold text-white block capitalize"
                      >
                        Thu mua vải vụn số lượng lớn giá cao
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/thu-gom-xu-ly-rac-thai-gia-re"
                        className=" hover:text-textColorTitle text-sm px-2 py-4 font-bold text-white block capitalize"
                      >
                        Thu Gôm Xử Lí Rác Thải Giá rẻ
                      </Link>
                    </li>
                  </ul>
                  <div className="absolute h-4 w-full z-10 "></div>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block uppercase text-textPrimary text-sm  font-bold py-2 mx-2"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      )}
      {isMenu && (
        <MenuHeader handleToggleMenu={handleToggleMenu} menuRef={menuRef} />
      )}
    </div>
  );
};

export default Header;
