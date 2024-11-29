"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const FeedBack = () => {
  const slides = [
    {
      name: "Chú Tưởng",
      avatarUrl: "50-year-old-man.jpg",
      feedback:
        "Tôi đã hợp tác với công ty thu mua phế liệu Tài Lộc Vi Na trong nhiều năm qua. Dịch vụ của họ rất chuyên nghiệp, giá cả luôn được báo chính xác và hợp lý. Nhân viên thì thân thiện, nhanh nhẹn. Nếu bạn cần thanh lý phế liệu, tôi khuyên bạn nên chọn công ty này.",
    },
    {
      name: "Anh Vương",
      avatarUrl: "40-year-old-man.jpg",
      feedback:
        "Công ty Tài Lộc Vi Na là đối tác xử lý rác thải môi trường của nhà máy chúng tôi trong nhiều năm. Đội ngũ nhân viên rất nhiệt tình, thu gom rác thải đúng quy định và đảm bảo an toàn môi trường. Đặc biệt, giá cả cạnh tranh và báo giá minh bạch. Đây là sự lựa chọn hàng đầu khi cần xử lý rác thải công nghiệp và phế liệu.",
    },
    {
      name: "Chị Tuyết",
      avatarUrl: "40-year-old-woman.jpg",
      feedback:
        "Tôi đã hợp tác với công ty thu mua phế liệu Tài Lộc Vi Na để thanh lý số lượng lớn vải vụn từ xưởng may của mình. Dịch vụ của họ rất chuyên nghiệp, giá thu mua cao và luôn xử lý nhanh gọn. Đây là một công ty đáng tin cậy trong lĩnh vực thu mua vải vụn và rác thải công nghiệp. Tôi hoàn toàn hài lòng và sẽ tiếp tục hợp tác lâu dài.",
    },
    {
      name: "Anh Mạnh",
      avatarUrl: "25-year-old-man.jpg",
      feedback:
        "Là chủ một xưởng nhỏ, tôi rất cần tìm đối tác thu mua vải vụn thường xuyên. Tài Lộc Vi Na đã giúp tôi xử lý nhanh số lượng lớn vải thừa và phế liệu, đảm bảo vệ sinh xưởng. Dịch vụ rất tốt, giá thu mua cao và đội ngũ làm việc đúng giờ. Tôi chắc chắn sẽ tiếp tục hợp tác lâu dài.",
    },
    {
        name: "Anh Hoàn",
        avatarUrl: "40-year-old-man-build.jpg",
        feedback:
          "Công ty Tài Lộc Vi Na luôn là lựa chọn hàng đầu của tôi khi cần thanh lý phế liệu công trình. Họ làm việc nhanh chóng, giá thu mua phế liệu cao và minh bạch. Tôi rất ấn tượng với thái độ làm việc chuyên nghiệp của đội ngũ nhân viên tại đây.",
      },
  ];
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-colorPrimary font-bold text-xl sm:text-2xl text-center mb-7">
        Ý KIẾN KHÁCH HÀNG
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
       loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <div className="flex items-start gap-4">
                <div className="bg-colorPrimary p-1 rounded-full">
                  <div className="rounded-full relative h-24 w-24 ">
                    <Image
                      src={`/${slide.avatarUrl}`}
                      alt="ý kiến khách hàng từ công ty thu mua phế liệu tài lộc vi na"
                      sizes=""
                      fill
                      className="rounded-full"
                     
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <FaStar className="text-yellow-500 text-lg " />
                    <FaStar className="text-yellow-500 text-lg " />
                    <FaStar className="text-yellow-500 text-lg " />
                    <FaStar className="text-yellow-500 text-lg " />
                    <FaStar className="text-yellow-500 text-lg " />
                  </div>
                  <p className="mb-2 text-black/90 text-justify leading-relaxed">
                    <i>{slide.feedback}</i>
                  </p>
                  <p className="capitalize">
                    <strong>{slide.name}</strong>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;
