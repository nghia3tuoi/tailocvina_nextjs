"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackTopDynamic = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Header hiển thị mặc định
  const [lastScrollPos, setLastScrollPos] = useState(0); // Lưu vị trí cuộn cuối cùng
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos && currentScrollPos > 300) {
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
  const handleBackTop = () => {
    // Cuộn về đầu trang (vị trí (0, 0) tức là đầu trang)
    window.scrollTo({
      top: 0, // Vị trí đầu trang
      behavior: "smooth", // Cuộn mượt mà
    });
  };
  return (
    <>
      {isVisible && (
        <div className="w-12 h-12 fixed bottom-0 right-0 mr-5 mb-60 ">
          <div className="absolutebg-[#fff] w-12 h-12 rounded-full flex justify-center items-center shadow-sm shadow-slate-400 z-10 active:bg-colorPrimary/30 cursor-pointer" onClick={handleBackTop}>
            <FaAngleUp className="text-red-500" />
          </div>
        </div>
      )}
    </>
  );
};
export default BackTopDynamic;
