import { FaEarthAmericas, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Liên Hệ - Công Ty TNHH Tài Lộc Vi Na Thu Mua Phế Liệu Giá Cao",
  description:
    "Liên hệ với Công Ty TNHH Tài Lộc Vi Na, chuyên thu mua phế liệu giá cao, uy tín và chuyên nghiệp. Chúng tôi cam kết mang lại giá trị tối đa cho khách hàng qua dịch vụ thu mua phế liệu nhanh chóng, an toàn. Hãy liên hệ với chúng tôi ngay hôm nay để nhận báo giá tốt nhất.",
};
const Contact = () => {
  <Head>
    <title>
      Liên Hệ - Công Ty Thu Mua Phế Liệu Tài Lộc Vi Na Thu Mua Phế Liệu Giá Cao
    </title>
    <link
      rel="canonical"
      href="https://www.phelieutailocvina.com/"
      key="canonical"
    />
  </Head>;
  return (
    <div className="container mx-auto px-4">
      <h1 className="uppercase font-bold text-2xl text-center mt-7">
        Thông Tin Lên Hệ Công Ty Thu Mua Phế Liệu Tài Lộc Vi Na
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pb-7">
        <div className="mt-7  bg-[#f6f6f6] border p-5">
          <h2 className="uppercase font-bold  text-lg mb-3">
            CÔNG TY THU MUA PHẾ LIỆU TÀI LỘC VI NA
          </h2>
          <div className="flex flex-col gap-5 text-justify ">
            <p className="leading-loose">
              Hãy liên hệ ngay với <strong> Công ty TNHH Tài Lộc Vi Na</strong>,
              đơn vị uy tín chuyên thu mua phế liệu, vải vụn số lượng lớn và xử
              lý rác thải công nghiệp tại Bình Dương.
            </p>

            <div className="flex gap-2 ">
              <div className="flex items-center">
                <FaPhone className="text-lg" />
              </div>
              <p className="flex items-center gap-2">
                <span className="font-bold">Hotline</span>: 0989 015 053
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-center">
                <MdEmail className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Email: </span>
                phelieutailocvina@gmail.com
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-center">
                <FaEarthAmericas className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Website: </span>
                phelieutailocvina.com
              </p>
            </div>

            <div className="flex  gap-2">
              <div className="flex items-start">
                <FaLocationDot className="text-xl" />
              </div>
              <p>
                <span className="font-bold">Địa chỉ:</span> Thửa đất số 1046, tờ
                bản đồ số 171, khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố
                Thuận An, Tỉnh Bình Dương, Việt Nam
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 text-justify leading-loose p-5 border">
          <h2 className=" font-bold  text-lg mb-3 uppercase">
            Bản đồ chỉ đường
          </h2>
          <p className="mb-3">
            Chúng tôi tọa lạc tại khu vực trung tâm, dễ dàng tiếp cận. Hãy ghé
            thăm địa chỉ của chúng tôi hoặc liên hệ qua các phương thức bên trên
            để được hỗ trợ tốt nhất.
          </p>
          <iframe
            className="mx-auto"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31336.168584732306!2d106.7026670096219!3d10.961780581842907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x3174d9e25a214119%3A0x1bb1444bcbd5375a!2zS2h1IFBo4buRIEjDsmEgTMOibiAyLCBUaHXhuq1uIEdpYW8sIFRodeG6rW4gQW4sIELDrG5oIETGsMahbmc!3m2!1d10.948164799999999!2d106.7255649!4m3!3m2!1d10.996204299999999!2d106.6627808!5e0!3m2!1svi!2s!4v1732878803476!5m2!1svi!2s"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
