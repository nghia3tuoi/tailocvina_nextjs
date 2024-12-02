import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneDynamic = () => {
  return (
    <div className="w-12 h-12 fixed bottom-0 right-0 mr-5 mb-10  ">
      <div className="absolute  bg-colorPrimary w-12 h-12 rounded-full animate-ping"></div>
      <Link href="tel:0989015053"  target="_blank" className="absolute bg-[#16a34a] rounded-full w-12 h-12"  aria-label="liên hệ phế liệu tài lộc vi na qua số điện thoại">
        <FaPhoneAlt className=" text-white w-full h-full p-3 " />
      </Link >
    </div>
  );
};
export default PhoneDynamic;
