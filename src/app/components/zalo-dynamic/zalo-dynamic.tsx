import Image from "next/image";
import Link from "next/link";

const ZaloDynamic = () => {
  return (
    <div className="w-12 h-12  fixed bottom-0 right-0 mr-5 mb-36  ">
      <div className="absolute  bg-[#1d4ed8] w-12 h-12 rounded-full animate-ping"></div>
      <Link href="https://zalo.me/0989015053" target="_blank" className="absolute animate-bounce block">
        <Image src="/icons8-zalo.svg" alt="" width={64} height={64} />
      </Link>
    </div>
  );
};
export default ZaloDynamic;
