import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thu Mua Vải Vụn Giá Cao - Công Ty TNHH Tài Lộc Vi Na Thu Mua Phế Liệu Giá Cao",
  description:
    "Công Ty TNHH Tài Lộc Vi Na chuyên thu mua vải vụn giá cao, cam kết mang đến dịch vụ nhanh chóng, hiệu quả và bảo vệ môi trường. Với nhiều năm kinh nghiệm trong ngành, chúng tôi luôn sẵn sàng cung cấp giải pháp thu mua vải vụn an toàn, tiết kiệm và tối ưu chi phí. Liên hệ với chúng tôi ngay hôm nay để nhận báo giá tốt nhất.",
};
const ThuMuaVaiVunGiaCao = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-7">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-7">
          THU MUA VẢI VỤN GIÁ CAO SỐ LƯỢNG LỚN
        </h1>
        <p className="text-justify leading-relaxed">
          <strong>Công ty TNHH Tài Lộc Vi Na</strong> chuyên thu mua vải vụn giá
          cao, thu gom vải vụn công nghiệp số lượng lớn từ các nhà máy, xưởng
          may, và các cơ sở sản xuất. Chúng tôi cam kết giá thu mua cạnh tranh
          nhất thị trường, hỗ trợ vận chuyển tận nơi, thanh toán nhanh chóng và
          chuyên nghiệp.
        </p>
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Chúng Tôi Thu Mua Những Loại Vải Nào?
        </h2>
        <ul className="list-disc ml-7 text-justify leading-relaxed">
          <li>
            Vải vụn từ các xưởng may: vải thừa, vải cắt, hoặc lỗi không dùng
            đến.
          </li>
          <li>Vải công nghiệp: thun, cotton, polyester, vải denim, kaki…</li>
          <li>
            Vải tái chế: từ quần áo lỗi mốt, vải tồn kho hoặc không đạt tiêu
            chuẩn xuất khẩu.
          </li>
          <li>
            Vải hỗn hợp số lượng lớn: Chúng tôi không giới hạn số lượng, phù hợp
            với mọi nhu cầu.
          </li>
          <li>
            Vải vụn: là các mảnh vải nhỏ bị cắt, đục, khoét trong quá trình cắt
            may.
          </li>
          <li>Vải khúc: là các cây vải ngắn, có chiều dài từ 1 đến 10 mét.</li>
          <li>
            Vải lộn xộn: là các loại vải không có quy cách, không đồng đều về
            chất lượng, màu sắc, kích thước.
          </li>
          <li>
            Quần áo cũ: là các loại quần áo đã qua sử dụng, không còn mới hoặc
            lỗi mốt.
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7">
        <Image
          src="/phe-lieu-vai-vun-2.jpg"
          alt="thu mua phế liệu vải vụn giá cao"
          layout="responsive"
          width={300} // Set the desired width
          height={300} // Set the desired height
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src="/phe-lieu-vai-vun.jpg"
          alt="thu mua phế liệu vải vụn giá cao"
          layout="responsive"
          width={300} // Set the desired width
          height={300} // Set the desired height
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Tại Sao Khách Hàng Nên Bán Vải Vụn Cho Chúng Tôi?
        </h2>
        <ul className="list-disc ml-7 text-justify leading-relaxed">
          <li>
            Giá trị cao từ những gì bạn tưởng là phế liệu: Tối ưu hóa nguồn thu
            từ những vật liệu không còn sử dụng.
          </li>
          <li>
            Giải phóng không gian kho bãi: Thu gom nhanh chóng, giúp xưởng của
            bạn luôn gọn gàng, sạch sẽ.
          </li>
          <li>
            Đảm bảo pháp lý: Hợp đồng thu mua rõ ràng, minh bạch và tuân thủ các
            quy định về môi trường.
          </li>
        </ul>
      </div>
      <div className="mt-7">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold capitalize">
          Liên hệ ngay với chúng tôi
        </h2>
        <ul className="list-disc ml-7 text-justify leading-relaxed">
          <li>Hotline: 0989 015 053</li>
          <li>Email: tailocvina.work@gmail.com</li>
          <li>
            Địa chỉ: Thửa đất số 1046, tờ bản đồ số 171, khu phố Hòa Lân 2,
            Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ThuMuaVaiVunGiaCao;
