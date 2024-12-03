import { FaLocationDot, FaPhone, FaEarthAmericas } from "react-icons/fa6";
import { MdEmail, MdAccessTimeFilled } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0d1c25] w-full ">
      <div className="container px-4 mx-auto">
        {/* hr */}
        <div className="container mx-auto my-7 px-4 border-b-white/20 border-b-2"></div>
        {/*  */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h2 className="text-white/70 text-lg font-bold mb-3 uppercase">
                CÔNG TY PHẾ LIỆU TÀI LỘC VI NA
              </h2>
              <div className="flex flex-col gap-2">
                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <FaLocationDot className="text-[#86bb46] text-xl" />
                    </div>
                    <p className="text-white/70">Địa chỉ</p>
                  </div>
                  <p className="text-white  pl-6 text-sm">
                    Thửa đất số 1046, tờ bản đồ số 171, khu phố Hòa Lân 2,
                    Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt
                    Nam
                  </p>
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <FaPhone className="text-[#86bb46] text-xl" />
                    </div>
                    <p className="text-white/70">Hotline</p>
                  </div>
                  <p className="text-white  pl-6 text-sm">0989 015 053</p>
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <MdEmail className="text-[#86bb46] text-xl" />
                    </div>
                    <p className="text-white/70">Email</p>
                  </div>
                  <p className="text-white  pl-6 text-sm">
                    phelieutailocvina@gmail.com
                  </p>
                </div>

                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <FaEarthAmericas className="text-[#86bb46] text-xl" />
                    </div>
                    <p className="text-white/70">Website</p>
                  </div>
                  <p className="text-white  pl-6 text-sm">
                    https://www.phelieutailocvina.com/
                  </p>
                </div>

                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <MdAccessTimeFilled className="text-[#86bb46] text-xl" />
                    </div>
                    <p className="text-white/70">Thứ 2 - Chủ nhật</p>
                  </div>
                  <p className="text-white  pl-6 text-sm">Hỗ trợ tư vấn 24/7</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white/70 text-lg font-bold mb-3 uppercase">
                DANH MỤC THU MUA
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white text-justify">
                <li>- Thu mua vải vụn số lượng lớn giá cao</li>
                <li>- Thu mua phế liệu nhôm giá cao</li>
                <li>- Thu mua phế liệu đồng giá cao</li>
                <li>- Thu Mua Phế Liệu Sắt Giá Cao</li>
                <li>- Thu Mua Phế Liệu Inox Giá Cao</li>
                <li>- Thu mua phế liệu thiếc giá cao</li>
                <li>- Thu gôm và xử lý rác thải công nghiệp giá rẻ</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white/70 text-lg font-bold mb-3 uppercase">
                KHU VỰC THU MUA
              </h2>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="text-white">
                  <p>- Thu mua phế liệu HCM</p>
                </li>
                <li className="text-white">
                  <p>- Thu mua phế liệu Bình Dương</p>
                </li>
                <li className="text-white">
                  <p>- Thu mua phế liệu Đồng Nai</p>
                </li>
                <li className="text-white">
                  <p>- Thu mua phế liệu Long An</p>
                </li>
                <li className="text-white">
                  <p>- Thu mua phế liệu Miền Tây</p>
                </li>
                <li className="text-white">
                  <p>- Thu mua phế liệu Tây Ninh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className=" my-7 px-4 border-b-white/20 border-b-2"></div>
      <div className="text-center text-[#99999999] pb-7">
        Copyright 2024 © TaiLocViNa
      </div>
    </footer>
  );
};

export default Footer;
