import Image from "next/image";
import Link from "next/link";

const ZaloDynamic = () => {
  return (
    <div className="w-12 h-12  fixed bottom-0 right-0 mr-5 mb-36  ">
      <div className="absolute  bg-[#1d4ed8] w-12 h-12 rounded-full animate-ping"></div>
      <Link href="https://zalo.me/0762213488"  rel="noopener noreferrer"  target="_blank" className="absolute  block"   aria-label="liên hệ phế liệu tài lộc vi na qua zalo">
        <Image src="/icons8-zalo.svg" alt="liên hệ với công ty thu mua phế liệu tài lộc vi na qua zalo" width={64} height={64} />
      </Link>
    </div>
  );
};
export default ZaloDynamic;
