import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thu Gôm Xử Lí Rác Thải Giá Rẻ - Công Ty TNHH Tài Lộc Vi Na Thu Mua Phế Liệu Giá Cao",
  description:
  "Công Ty TNHH Tài Lộc Vi Na cung cấp dịch vụ thu gom và xử lý rác thải giá rẻ, nhanh chóng và hiệu quả. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến giải pháp xử lý rác thải an toàn, bảo vệ môi trường và tối ưu chi phí cho khách hàng. Liên hệ với chúng tôi để được tư vấn dịch vụ xử lý rác thải tốt nhất.",
};

const XuLiRacThai = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-7 uppercase mt-7 ">
        Thu gom, vận chuyển và xử lý rác thải giá rẻ
      </h1>
      <div className="mt-7">
        <p>
          <strong> Công Ty TNHH Tài Lộc Vi Na</strong> cung cấp dịch vụ thu gom
          và xử lý rác thải hiệu quả với mức giá rẻ và hợp lý, phù hợp với nhu
          cầu của các doanh nghiệp và cá nhân. Chúng tôi chuyên thu gom rác thải
          công nghiệp, sinh hoạt và các loại rác thải khó xử lý, giúp bạn giải
          quyết vấn đề về môi trường một cách nhanh chóng và tiết kiệm, liên hệ
          <strong> 0989 015 053</strong>.
        </p>
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Dịch Vụ Thu Gôm Và Xử Lý Rác Thải Của Chúng Tôi Bao Gồm:
        </h2>
        <ul className="list-disc ml-7 text-justify leading-relaxed">
          <li>
            <h3 className="font-bold">Thu Gôm Rác Thải Sinh Hoạt</h3>
            <p>
              Dịch vụ thu gom rác thải sinh hoạt định kỳ, đảm bảo sạch sẽ, không
              gây ô nhiễm và giữ gìn vệ sinh khu vực.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Thu Gôm Và Xử Lý Rác Thải Công Nghiệp</h3>
            <p>
              Chúng tôi thu gom và xử lý các loại rác thải công nghiệp, bao gồm
              rác thải nhựa, kim loại, thủy tinh và các loại chất thải nguy hại
              khác.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Xử Lý Rác Thải Tái Chế</h3>
            <p>
              Dịch vụ tái chế các loại vật liệu có thể tái sử dụng như giấy, kim
              loại, vải vụn, nhựa... giúp bảo vệ môi trường và tiết kiệm tài
              nguyên.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Thu Gôm Rác Thải Xây Dựng</h3>
            <p>
              Thu gom rác thải từ các công trình xây dựng như gạch vỡ, bê tông,
              sắt thép... nhằm đảm bảo an toàn và vệ sinh cho công trường.
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7">
        <Image
          src="/Thu-gom-xu-ly-chat-thai-nguy-hai-scaled.jpg"
          alt="thu gôm xử lí rác thải giá rẻ"
          layout="responsive"
          width={300} // Set the desired width
          height={300} // Set the desired height
          sizes="(max-width: 640px) 100vw, 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src="/thu-gom-xu-ly-chat-thai-cong-nghiep-tai-loc-vi-na.jpg"
          alt="thu gôm xử lí rác thải giá rẻ"
          layout="responsive"
          width={300} // Set the desired width
          height={300} // Set the desired height
          sizes="(max-width: 640px) 100vw, 50vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Lý Do Khách Hàng Chọn Dịch Vụ Thu Gôm Và Xử Lý Rác Thải Của Công Ty
          Phế Liệu Tài Lộc Vi Na
        </h2>
        <ul className="list-disc ml-7 text-justify leading-relaxed">
          <li>
            <h3 className="font-bold">Giá Rẻ, Tiết Kiệm Chi Phí</h3>
            <p>
              Chúng tôi cung cấp dịch vụ thu gom và xử lý rác thải với chi phí
              cực kỳ hợp lý, giúp bạn tiết kiệm tối đa mà vẫn đảm bảo chất
              lượng.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Nhanh Chóng, Tiện Lợi</h3>
            <p>
              Dịch vụ của chúng tôi luôn đúng hẹn, nhanh chóng, và đảm bảo không
              làm gián đoạn hoạt động của bạn.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Cam Kết Bảo Vệ Môi Trường</h3>
            <p>
              Với các phương pháp xử lý rác thải hiệu quả, chúng tôi cam kết
              giảm thiểu tác động đến môi trường và tuân thủ quy định về bảo vệ
              môi trường.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Dịch Vụ Tận Nơi, Đảm Bảo An Toàn</h3>
            <p>
              Đội ngũ của chúng tôi thu gom và vận chuyển rác thải tận nơi, đảm
              bảo an toàn tuyệt đối trong quá trình thu gom và xử lý.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Liên Hệ Ngay Để Nhận Dịch Vụ Thu Gôm Và Xử Lý Rác Thải Giá Rẻ
        </h2>
        <p>
          Để nhận báo giá chi tiết và được tư vấn miễn phí về dịch vụ thu gom và
          xử lý rác thải, vui lòng liên hệ với chúng tôi qua các kênh sau:
        </p>
        <ul className="text-justify leading-relaxed">
          <li>
            <strong>Hotline: 0989 015 053</strong>
          </li>
          <li>
            <strong>Email: tailocvina.work@gmail.com</strong>
          </li>
          <li>
            Địa chỉ: Thửa đất số 1046, tờ bản đồ số 171, khu phố Hòa Lân 2,
            Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default XuLiRacThai;
