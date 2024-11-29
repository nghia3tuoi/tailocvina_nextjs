import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail, MdAccessTimeFilled } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0d1c25] w-full ">
      <div className="container px-4 mx-auto">
        {/* hr */}
        <div className="container mx-auto my-7 px-4 border-b-white/20 border-b-2"></div>
        {/*  */}
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-20">
            <li>
              <h3 className="text-white text-xl font-bold mb-3 uppercase">
                CÔNG TY TNHH TÀI LỘC VI NA
              </h3>
              <div className="mb-2">
                <div className="flex items-center gap-1">
                  <div>
                    <FaLocationDot className="text-[#86bb46] text-xl" />
                  </div>
                  <p className="text-white/70">Địa chỉ</p>
                </div>
                <p className="text-white  pl-6">
                  Thửa đất số 1046, tờ bản đồ số 171, khu phố Hòa Lân 2, Phường
                  Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam
                </p>
              </div>
              <div className="mb-2">
                <div className="flex items-center gap-1">
                  <div>
                    <FaPhone className="text-[#86bb46] text-xl" />
                  </div>
                  <p className="text-white/70">Hotline</p>
                </div>
                <p className="text-white  pl-6">0989 015 053</p>
              </div>
              <div className="mb-2">
                <div className="flex items-center gap-1">
                  <div>
                    <MdEmail className="text-[#86bb46] text-xl" />
                  </div>
                  <p className="text-white/70">Email</p>
                </div>
                <p className="text-white  pl-6">tailocvina.work@gmail.com</p>
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-1">
                  <div>
                    <MdAccessTimeFilled className="text-[#86bb46] text-xl" />
                  </div>
                  <p className="text-white/70">Thứ 2 - Chủ nhật</p>
                </div>
                <p className="text-white  pl-6">Hỗ trợ tư vấn 24/7</p>
              </div>
            </li>
            <li>
              <h3 className="text-white text-xl font-bold mb-3 uppercase">
                DANH MỤC THU MUA
              </h3>
              <p className="text-white/80 text-justify leading-relaxed">
                <strong>Công Ty TNHH Tài Lộc Vi Na</strong> tự hào là đơn vị
                <strong> thu mua phế liệu</strong>, <strong>vải vụn</strong>,
                <strong> hàng tồn kho</strong>, và{" "}
                <strong>hàng thanh lý</strong> uy tín, giá cao. Chúng tôi chuyên
                thu gom và xử lý <strong>rác thải công nghiệp</strong> nhanh
                chóng, đảm bảo an toàn môi trường. Hãy liên hệ ngay với{" "}
                <strong>Tài Lộc Vi Na</strong> – khi bạn cần, chúng tôi sẵn sàng
                có mặt!
              </p>
            </li>
            <li>
              <h3 className="text-white text-xl font-bold mb-3 uppercase">
                KHU VỰC THU MUA
              </h3>
              <ul>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu HCM</p>
                </li>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu Bình Dương</p>
                </li>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu Đồng Nai</p>
                </li>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu Long An</p>
                </li>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu Miền Tây</p>
                </li>
                <li className="text-white/80">
                  <p>- Thu mua phế liệu Tây Ninh</p>
                </li>
              </ul>
            </li>
          </ul>
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
