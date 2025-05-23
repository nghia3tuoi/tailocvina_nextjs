import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Question from "./components/home.question/home.question";
import FeedBack from "./components/home.feedback/home.feedback";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công Ty Thu Mua Phế Liệu Giá Cao | Tài Lộc Vi Na",
  description:
    "Công ty thu mua phế liệu giá cao Tài Lộc Vi Na tận nơi uy tín tại TPHCM, Bình Dương, Long An....Giá phế liệu cao nhất hôm nay, Cân đo chuẩn xác, Thanh toán liền tay",
  alternates: {
    canonical: "https://www.phelieutailocvina.com/",
  },
  openGraph: {
    title:
      "Công Ty Thu Mua Phế Liệu Giá Cao Bình Dương & Toàn Quốc | Tài Lộc Vi Na",
    description:
      "Công ty thu mua phế liệu giá cao Tài Lộc Vi Na tận nơi uy tín tại TPHCM, Bình Dương, Long An....Giá phế liệu cao nhất hôm nay, Cân đo chuẩn xác, Thanh toán liền tay",
    url: "https://www.phelieutailocvina.com/",
    siteName:
      "Công Ty Thu Mua Phế Liệu Giá Cao Bình Dương & Toàn Quốc | Tài Lộc Vi Na",
    type: "website",
    images: [
      {
        url: "https://www.phelieutailocvina.com/only-vertical.svg", // Must be an absolute URL
        width: 250,
        height: 250,
      },
    ],
    locale: "vi_VN",
  },
};

export default function Home() {
  return (
    <div>
      {/* banner */}
      <div className="relative h-[500px] ">
        <Image
          unoptimized
          priority
          src="/banner.jpg"
          alt="phế liệu Tài Lộc Vi Na"
          fill
          className="object-cover w-max h-auto " // Tùy chỉnh nếu bạn muốn hình ảnh cắt xén hay thu nhỏ theo tỷ lệ
          sizes="100vw"
        />
        <div className="bg-white/90 absolute text-center p-8 left-[5%] bottom-[5%] top-[5%] right-[5%] overflow-auto lg:right-[30%] max-w-full">
          <h1 className="uppercase  text-colorPrimary font-bold text-xl md:text-2xl lg:text-4xl my-2.5">
            công ty thu mua phế liệu tài lộc vi na
          </h1>
          <h2 className="text-colorPrimary md:text-xl lg:text-2xl my-2.5">
            Chuyên thu mua vải vụn, phế liệu, thu gôm và xử lý rác công nghiệp
            giá tốt nhất thị trường
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-justify my-4 leading-relaxed">
            <strong className="font-bold">
              Công ty thu mua phế liệu Tài Lộc Vi Na
            </strong>{" "}
            là nơi thu mua phế liệu, vải vụn, thanh lý hàng tồn kho giá tốt nhất
            thị trường, hỗ trợ xử lý rác thải công nghiệp uy tín hàng đầu tại
            Bình Dương. Đảm bảo giá thành cao, thanh toán nhanh, dọn dẹp sạch
            gọn. Khi có nhu cầu thanh lý hàng tồn đọng, vải vụn, phế liệu vui
            lòng liên hệ theo số:{" "}
            <strong className="text-blue-700"> 0989 015 053 </strong> chúng tôi
            luôn nhanh chóng phục vụ 24/24.
          </p>
          <Link
            href="tel:0989015053"
            className="gap-2 text-textPrimary sm:text-xl bg-colorPrimary p-2 rounded-md flex justify-center items-center mx-auto max-w-[300px] hover:opacity-90"
            aria-label="liên hệ phế liệu tài lộc vi na qua số điện thoại"
            target="_blank"
          >
            <FaPhoneAlt className="text-textPrimary  sm:text-xl" />
            <p className="uppercase text-textPrimary sm:text-xl ">Gọi ngay</p>
            0989 015 053
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 pt-7 gap-2.5 container mx-auto">
        <div className="flex items-center gap-4 ">
          <div className="bg-colorPrimary p-3 rounded-full flex items-center justify-center">
            <Image
              unoptimized
              src="/garbage-truck.svg"
              alt="Công ty phế liệu tài lộc vi na Thu mua tận nơi"
              width={50}
              height={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="min-w-[50px]"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-colorPrimary">
              Thu mua tận nơi
            </h3>
            <p className="text-justify leading-relaxed">
              Có đội xe tự bốc xếp, vận chuyển. Vệ sinh sạch sẽ nơi thu gom phế
              liệu.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-colorPrimary p-3 rounded-full flex items-center justify-center">
            <Image
              unoptimized
              src="/phone-call-call-svgrepo-com.svg"
              alt="Công ty phế liệu tài lộc vi na hoạt động 24/24"
              width={50}
              height={50}
              className="min-w-[50px]"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-colorPrimary">
              Thu mua 24/24
            </h3>
            <p className="text-justify leading-relaxed">
              Nhận mua tất cả các ngày trong tuần, kể cả ngày nghỉ lễ Tết.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-colorPrimary p-3 rounded-full flex items-center justify-center">
            <Image
              unoptimized
              src="/pay.svg"
              alt="công ty thu mua phế liệu tài lộc vi na thanh toán đa nền tảng"
              width={50}
              height={50}
              className="min-w-[50px]"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-colorPrimary">
              Thanh toán một lần
            </h3>
            <p className="text-justify leading-relaxed">
              Thanh toán tiền mặt hoặc chuyển khoản ngay khi các phế liệu được
              chất lên xe.
            </p>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/* description */}
      <div className="container mx-auto px-4">
        <h2 className="uppercase text-colorPrimary font-bold text-xl sm:text-2xl lg:text-3xl mb-7">
          công ty thu mua phế liệu tài lộc vi na
        </h2>
        <div className="flex flex-col sm:flex-row  gap-5">
          <div className="sm:basis-1/2">
            <p className="text-justify leading-relaxed">
              <strong className="text-blue-700 capitalize">
                Công ty thu mua phế Liệu Tài Lộc Vi Na
              </strong>{" "}
              với nhiều năm kinh nghiệm hoạt động trong ngành phế liệu tại Bình
              Dương nói riêng và trên toàn quốc nói chung, đơn vị cam kết đem
              đến cho quý khách hàng dịch vụ thu mua phế liệu giá cao, tận nơi,
              chuyên nghiệp, uy tín với mức giá tốt nhất.
            </p>
            <br />
            <p>
              Bên cạnh đó, trong quá trình thu mua, quý khách hàng sẽ được đảm
              bảo thanh toán nhanh gọn bằng nhiều hình thức khác nhau cùng dịch
              vụ chăm sóc nhiệt tình và chu đáo. Đó cũng chính là phương châm
              hoạt động của Tài Lộc Vi Na trong nhiều năm nay, lấy chữ tín làm
              mục tiêu để phát triển lâu dài.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              <strong className="text-blue-700 capitalize">
                phế liệu tài lộc vi Na
              </strong>{" "}
              cũng luôn cố gắng đặt ra các tiêu chí để cải thiện và phát triển
              dịch vụ, nhờ đó đảm bảo mức giá luôn ổn định, dọn dẹp sạch sẽ, đem
              đến sự hài lòng cho khách hàng. Đơn vị cũng cam kết mua bán các
              loại phế liệu với giá thị trường, không xảy ra tình trạng ép giá.
              Tuy nhiên, tùy thuộc vào thời điểm, chủng loại phế liệu, tình
              trạng và giá cả thị trường mà mức giá thu mua có thể thay đổi và
              sẽ được Tài Lộc Vi Na thường xuyên cập nhật trên trang web chính
              thức để khách hàng tham khảo.
            </p>
            <br />
            <p className="text-justify leading-relaxed">
              Hiện nay, công ty phế liệu Tài Lộc Vi Na đã và đang thu mua phế
              liệu tại các khu công nghiệp trên Bình Dương và các tỉnh lân cận
              như: Bình Phước, Tây Ninh, Long An, Cần Thơ, Vĩnh Long, Khu công
              nghiệp VSIP I, Khu công nghiệp VSIP, Khu công nghiệp Mỹ Phước, Khu
              công nghiệp Đại Đăng, Khu công nghiệp Đất Cuốc, Khu công nghiệp
              Sóng Thần I, Khu công nghiệp Sóng Thần II, Khu công nghiệp Việt
              Hương I, Khu công nghiệp Việt Hương II, Khu công nghiệp Tân Bình,
              Khu công nghiệp Phú Tân.
            </p>
          </div>
          <div className="sm:basis-1/2">
            <Image
              unoptimized
              src="/banner.jpg"
              alt="Thu Mua Phế Liệu Tài Lộc Vi Na"
              width={500}
              height={0}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/*  */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="uppercase text-colorPrimary font-bold">4 lý do</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-colorPrimary">
            bạn nên chọn thu mua phế liệu giá cao tài lộc vi na
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 gap-y-8 sm:gap-y-0">
          <div className="text-justify bg-[#bbf7d0] rounded-md p-4 relative">
            <h3 className="uppercase text-colorPrimary font-bold text-lg sm:text-2xl mb-3 mt-4 text-center">
              BÁO GIÁ NHANH
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Khi nhận thông tin từ khách hàng gọi đến, chúng tôi là đơn vị trực
              tiếp mua nên không qua bất kì công ty trung gian nào, nên chúng
              tôi sẽ báo giá thu mua phế liệu nhanh nhất với giá gốc từ công ty
              Tài Lộc Vi Na. Khách hàng sẽ được nhân viên báo giá và tư vấn
              nhiệt tình.
            </p>
            <div className="bg-[#22c55e] rounded-full absolute top-[-24px] mx-auto left-0 right-0 w-12 h-12 flex justify-center items-center">
              <p className="text-3xl text-white">1</p>
            </div>
          </div>
          <div className="text-justify bg-[#bbf7d0] rounded-md p-4 relative">
            <h3 className="uppercase text-colorPrimary font-bold text-lg sm:text-2xl mb-3 mt-4 text-center">
              THU MUA TRONG NGÀY
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Sau khi anh chị có ý định bán phế liệu, chúng tôi sẽ cử người và
              phương tiện tới thu mua ngay mà không cần để khách chờ đợi. Uy tín
              là phương ngôn để tồn tại tới ngày hôm nay. Nên chúng tôi sẽ làm
              mọi việc để giữ lòng tin của quý khách hàng.
            </p>
            <div className="bg-[#22c55e] rounded-full absolute top-[-24px] mx-auto left-0 right-0 w-12 h-12 flex justify-center items-center">
              <p className="text-3xl text-white">2</p>
            </div>
          </div>
          <div className="text-justify bg-[#bbf7d0] rounded-md p-4 relative">
            <h3 className="uppercase text-colorPrimary font-bold text-lg sm:text-2xl mb-3 mt-4 text-center ">
              THANH TOÁN LIỀN TAY
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Thanh toán tiền nhanh chóng sau khi mua hàng xong, quý khách yêu
              cầu tiền mặt hay chuyển khoán thì chúng tôi sẽ chuyển theo yêu
              cầu. Sau khi được nhân viên tư vấn và trao đổi thông tin mua bán
              thành công, chúng tôi sẽ lập tức cho đội ngũ thu mua đến ngay địa
              điểm thu mua giao dịch với khách hàng.
            </p>
            <div className="bg-[#22c55e] rounded-full absolute top-[-24px] mx-auto left-0 right-0 w-12 h-12 flex justify-center items-center">
              <p className="text-3xl text-white">3</p>
            </div>
          </div>
          <div className="text-justify bg-[#bbf7d0] rounded-md p-4 relative">
            <h3 className="uppercase text-colorPrimary font-bold text-lg sm:text-2xl mb-3 mt-4 text-center">
              CÂN ĐO UY TÍN
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Quy trình thu mua, Chúng tôi luôn tuân thủ theo quy định của khách
              hàng, mọi thứ được làm theo chỉ đạo của khách để làm yên tâm nhất.
              mọi quá trình cân đo sẽ diễn ra trước mặt khách hàng, đảm bảo
              khách hàng sẽ là người trực tiếp giám sát quy trình trên nhằm đảm
              bảo quyền lợi tối ưu nhất.
            </p>
            <div className="bg-[#22c55e] rounded-full absolute top-[-24px] mx-auto left-0 right-0 w-12 h-12 flex justify-center items-center">
              <p className="text-3xl text-white">4</p>
            </div>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/*  */}
      <div className="container mx-auto px-4">
        <h2 className="text-colorPrimary font-bold text-xl sm:text-2xl lg:text-3xl text-center uppercase">
          lý do khách hàng chọn công ty Phế Liệu Tài Lộc Vi Na
        </h2>
        <div className="mt-7  p-3 rounded-md">
          <ul className="list-disc text-justify leading-loose">
            <li>
              <p>
                Không thông qua trung gian: công ty Phế Liệu Tài Lộc Vi Na đưa
                ra mức giá cao hơn rất nhiều so với thị trường do không cần phải
                thông qua bất kỳ đại lý trung gian nào
              </p>
            </li>
            <li>
              <p>
                Nhiều năm kinh nghiệm: nhờ vào nhiều năm hoạt động, đội ngũ nhân
                viên có sức khỏe tốt cộng với các trang thiết bị, máy móc hiện
                đại hỗ trợ cho quá trình mua phế liệu được diễn ra nhanh hơn
              </p>
            </li>
            <li>
              <p>
                Nhân viên chuyên nghiệp: nhân viên hoạt động lâu năm trong nghề
                nên luôn nhận dạng và đánh giá đúng tất cả các loại phế liệu.
              </p>
            </li>
            <li>
              <p>
                Báo giá nhanh chóng: Phế Liệu Tài Lộc Vi Na là đơn vị trực tiếp
                thu mua phế liệu giá cao không qua trung gian cho nên báo giá
                ngay lập tức khi nhận thông tin
              </p>
            </li>
            <li>
              <p>
                Thanh toán liền tay: đơn vị chúng tôi thanh toán với các hình
                thức sao cho thuận tiện nhất như: bằng tiền mặt hoặc chuyển
                khoản nhanh chóng ngay sau khi các phế liệu được nhân viên chúng
                tôi thu mua.
              </p>
            </li>
            <li>
              <p>
                Giá thu mua cao: Phế Liệu Tài Lộc Vi Na đưa ra mức giá thu mua
                luôn cao hơn thị trường từ 10% – 40% Mua hàng nhanh gọn: Sau khi
                đạt được thỏa thuận, Phế Liệu Tài Lộc Vi Na sẽ đến tận nơi vận
                chuyển bằng nhiều hình thức theo nhu cầu của quý khách hàng để
                đạt được hiệu quả cao nhất.
              </p>
            </li>
            <li>
              <p>
                Cân đo uy tín: chúng tôi luôn tuân thủ theo những quy định, chỉ
                đảo của khách hàng, tất cả được làm theo những chỉ đạo của khách
                hàng để họ yên tâm nhất.
              </p>
            </li>
            <li>
              <p>
                Quy trình thu mua chuyên nghiệp: công ty chúng tôi có đội kỹ
                thuật luôn giám sát theo sát quy trình thu mua của mình, nhằm hỗ
                trợ khách hàng nhanh nhất có thể.
              </p>
            </li>
          </ul>
          <p className="text-xl text-center my-3">
            <span className="text-blue-700 font-bold">
              GỌI NGAY TƯ VẤN VỚI HOTLINE
            </span>
            :
            <span className="text-red-500">
              <strong> 0989 015 053</strong>
            </span>
          </p>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/*  */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-colorPrimary font-bold text-2xl text-center mb-7 uppercase">
            Thu Gôm Và Xử Lí Rác Thải Công Nghiệp Giá Rẻ
          </h2>
          <p className="text-justify leading-relaxed">
            <strong className="text-blue-700">
              Công ty Thu Mua Phế Liệu Tài Lộc Vi Na
            </strong>{" "}
            tự hào là đối tác tin cậy trong việc xử lý rác thải công nghiệp. Với
            đội ngũ chuyên gia giàu kinh nghiệm và quy trình xử lý hiện đại,
            chúng tôi cam kết cung cấp các giải pháp tối ưu giúp doanh nghiệp
            giảm thiểu tác động tiêu cực đến môi trường. Chúng tôi hỗ trợ thu
            gom và tái chế các loại rác thải công nghiệp như kim loại, nhựa, vải
            vụn, các vật liệu độc hại, giúp doanh nghiệp không chỉ tiết kiệm chi
            phí mà còn góp phần bảo vệ môi trường. Với dịch vụ thu gom tận nơi,
            nhanh chóng và an toàn, chúng tôi cam kết mang lại sự hài lòng tối
            đa cho khách hàng. Đừng để rác thải công nghiệp là gánh nặng cho
            doanh nghiệp của bạn. Hãy để{" "}
            <strong className="font-normal">
              Công Ty Phế Liệu Tài Lộc Vi Na
            </strong>{" "}
            giúp bạn xử lý rác thải một cách hiệu quả và thân thiện với môi
            trường.
          </p>
          <br />
          <p className="text-justify leading-relaxed">
            <strong className="text-blue-700">Phế Liệu Tài Lộc Vi Na </strong>
            mua trong vòng 1h tại Bình Dương, TPHCM và các tỉnh lân cận. Chỉ cần
            khách liên lạc, dịch vụ thu mua phế liệu tận nơi của{" "}
            <strong className="font-normal">Phế Liệu Tài Lộc Vi Na</strong> cam
            kết sẽ nhanh chóng làm vừa lòng quý khách với giá cả đi kèm chất
            lượng – hoa hồng cạnh tranh.
          </p>
        </div>
        <div className="relative h-80 md:h-auto">
          <Image
            unoptimized
            src="/Thu-gom-xu-ly-chat-thai-nguy-hai-scaled.jpg"
            alt="công ty phế liệu tài lộc vi na thu gôm và xử lí rác thải già rẻ nhất thị trường"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/* CHUYEN THU MUA CAC LOAI PHE LIEU */}
      <div className="container mx-auto px-4">
        <h2 className="text-colorPrimary font-bold text-xl sm:text-2xl text-center mb-7 uppercase">
          Phế Liệu Tài Lộc Vi Na Chuyên Thu Mua Các Loại Phế Liệu
        </h2>
        <div className="grid sm:grid-cols-3 gap-7">
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-vai-vun.jpg"
                alt="Công ty tài lộc vi na Thu mua vãi vụn, vãi tồn giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua Vải Vụn, Vải Tồn
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Thu mua vải vụn, vải tồn kho, vải kaki, thun, mua vải cây, vải
                khúc, vải xéo, vải rẻo, coton loại 1, loại 2 và tất cả các loại
                vải khác dù ít hay nhiều. Với nhiều năm kinh nghiệm trên thị
                trường vải,{" "}
                <strong className="text-blue-700">
                  Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                thu mua tất cả các loại vải với giá cao, tận nơi, uy tín, nhanh
                chóng tại các công ty, nhà may, xí nghiệp may mặc, nhà xưởng, cơ
                sở, khu công nghiệp sản xuất về áo quần, chăn mền, cặp xách,…
                Chúng tôi cam kết không ép giá khách hàng.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-dong.jpg"
                alt="Thu mua phế liệu đồng giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Đồng
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Đồng được ứng dụng rất nhiều trong ngành xây dựng, sản xuất dây
                điện, dây cáp điện, được dùng làm chất dẫn điện trong vi mạch
                điện tử, sản xuất motor, máy móc các loại, là thành phần không
                thể thiếu của máy phát điện, máy xay, máy khoan, ngành công
                nghiệp, nhiệt luyện, thủy điện và đời sống hiện nay.
              </p>
              <p className="text-sm sm:text-base text-justify">
                <strong className="text-blue-700">
                  Công ty Thu Mua Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                chuyên thu mua đồng phế liệu các loại như: thu mua đồng vàng,
                đồng đỏ, đồng thanh, đồng thau, đồng cáp, đồng trục, dây đồng,
                dây cáp đồng, dây điện cũ, đồng dây điện công trình, đồng dây
                cáp, hợp kim đồng niken, đồng ve chai, giá đồng vụn, đồng phế
                liệu, … trên cả nước.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-nhom.jpg"
                alt="Thu mua phế liệu nhôm giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Nhôm
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Chúng tôi chuyên thu mua phế liệu nhôm giá cao cạnh tranh với
                mức giá cam kết cả nước, gồm: nhôm đà, nhôm nguyên chất, nhôm
                thô, nhôm tấm, nhôm xingfa, nhôm định hình, nhôm cũ, nhôm đặc,
                nhôm, thang nhôm, máy nhôm 2 đầu, nhôm thanh, nhôm kính, nhôm
                nhiệt, nhôm máy, nhôm dẻo, nhôm hệ , nhôm nhiệt, nhôm khối, nhôm
                làm cửa, nhôm nhôm, mua tủ nhôm kính, nhôm nhôm, nhôm tủ, xi mạ
                nhôm, hợp kim nhôm, ba dớ nhôm, mua bán nhôm tấm, bột nhôm, máy
                ép góc cửa nhôm, nhôm nguyên chất, hợp chất nhôm, nhôm nhập
                khẩu, …
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-inox.jpg"
                alt="Thu mua phế liệu inox giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Inox
              </h3>
              <p className="text-sm sm:text-base text-justify">
                <strong className="text-blue-700">
                  Công Ty Thu Mua Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                thu mua tất cả tư liệu dư thừa trong sản xuất kinh doanh từ inox
                phế liệu như: inox cắt thừa từ phế liệu gia công inox, yêu cầu
                sản xuất ghế bàn inox, đập rửa mặt, công ty, khu chế xuất, khu
                công nghiệp lớn đến nhận thanh lý bồn nước inox, bể thép inox,
                tháo dỡ inox, tủ lạnh, tủ inox, thu mua inox cũ, thùng rác inox,
                ống hút inox, máy hàn inox, máy đánh bóng inox của các hộ dân
                gia đình.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-sat.jpg"
                alt="Thu mua phế liệu sắt thép giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Sắt
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Phế liệu sắt thép đang chiếm tỷ trọng lớn nhất trong tất cả phế
                liệu. Nguyên nhân do các ngành gia công, ngành xây dựng công
                nghiệp chủ chốt như là: xây dựng công trình, ngành gia công nhà
                xưởng, ngành sản xuất, ngành gia công cơ khí, ngành chế tạo máy,
                chế tạo và gia công máy móc thiết bị phát triển cao nên sắt vụn
                được thải ra nhiều hơn. Vì vậy, giá thành phế liệu sắt cũng giảm
                theo.
              </p>
              <p className="text-sm sm:text-base text-justify">
                Tuy nhiên, quý khách hàng đừng lo lắng vì
                <strong className="text-blue-700">
                  {" "}
                  Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                cam kết thu mua phế liệu sắt thép giá cao và ổn định nhất thị
                trường cả nước. Chúng tôi nhận thu mua sắt thép công trình, công
                ty, xe cũ, nhà xưởng, mua tàu thuyền, xà lan, neo, mua bán sắt
                vụn, máy móc thiết bị thanh lý, sắt đặc, sắt cây, dây thép sắt,
                sắt tiện, bột sắt, sắt mài, sắt gọt, bazo sắt, phôi thép, quặng
                thép, thép nguyên liệu, …
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-chi.jpg"
                alt="Thu mua phế liệu chì giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Chì
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Thu mua phế liệu chì như chì thiếc cục, chì thiếc dẻo, thiếc
                cuộn, thiếc cây, chì bình, chì lưới, chì X-Quang, chì nguyên
                chất, chì phế phẩm có tạp chất, chì dẻo, chì cục, chì thỏi, chì
                thanh, khuôn đúc chì câu cá, thanh chì, chì dạng tấm, dạng lưới,
                chì khô, chì nước, chì bình, chì nguyên chất, chì tinh với mức
                giá cao nhất thị trường. Như được biết, chì phế liệu để lâu ngày
                khi tiếp xúc với con người sẽ gây ảnh hưởng nghiêm trọng tới sức
                khỏe, gây vô sinh hoặc gây rối loạn não bộ và cơ thể, cũng như
                gây tổn thương nghiêm trọng cho hệ thần kinh, gây ngộ độc kim
                loại nghiêm trọng. Vì vậy, khi sở hữu chúng, quý khách nên gọi
                cho các công ty mua phế liệu có đủ chức năng pháp lý xử lý và
                được cấp phép như{" "}
                <strong className="text-blue-700">
                  Công Ty Thu Mua Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                để thu mua loại kim loại này nhanh chóng, tránh nguy hiểm đến
                sức khỏe của bản thân và gia đình.
              </p>
            </div>
          </div>

          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-linh-kien-dien-tu.jpg"
                alt="Thu mua linh kiện điện tử giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua Linh Kiện Điện Tử
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Thu mua phế liệu điện tử, điện lạnh, chip, IC, bo mạch máy, linh
                kiện máy tính, mạch điện thoại đã qua sử dụng, thiết bị điện tử
                hỏng như tivi, laptop, bản mạch, vi mạch, memory chip, Ram, IC,
                main điện thoại, pin điện thoại, chip, main laptop, ổ đĩa, Màn
                hình máy tính, máy dữ liệu, chuột, …{" "}
                <strong className="text-blue-700">
                  Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                chúng tôi cam đoan có nhiều năm kinh nghiệm trong thu mua hàng
                khó phân biêt với giá cạnh tranh trên thị trường.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-hop-kim.jpg"
                alt="Thu mua phế liệu hợp kim giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Hợp Kim
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Chúng tôi chuyên thu mua tất cả các loại hợp kim như dao phay
                ngón hợp kim, thép gió, mũi khoan hợp kim, hợp kim nhôm, dao hợp
                kim, carbay, các loại hợp kim titanium, hợp kim đồng, hợp kim
                nhôm, hợp kim sắt, hợp kim thép, các hợp kim của sắt, đồng,
                nhôm, inox, …{" "}
                <strong className="text-blue-700">
                  Công Ty Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                tự tin cam kết có thể nhận diện, phân loại, định giá chính xác
                và mua bán hợp kim cũ giá cao dù cho đặc tính, tính chất, thành
                phần của hợp kim phức tạp và được am hiểu rất ít.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-[200px] relative ">
              <Image
                unoptimized
                src="/phe-lieu-niken.jpg"
                alt="Thu mua phế liệu niken giá cao"
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl text-colorPrimary text-center font-bold my-1">
                Thu mua phế liệu Niken
              </h3>
              <p className="text-sm sm:text-base text-justify">
                Thu mua niken phế liệu tận nơi trên cả nước: niken hạt, niken
                tấm, niken bi, đồng niken, nhôm niken … Đặc biệt là khu vực Miền
                Nam trong ngày. Tùy theo chủng loại, độ mới cũ và số lượng hàng
                bạn có, chúng tôi sẽ đưa ra mức giá thu mua phế liệu niken cao
                nhất, cạnh tranh với thị trường Ngoài ra, chúng tôi còn nhận mua
                tất cả kim loại có thành phần niken dưới các dạng khác nhau như
                niken dạng viên (dạng hột), hỗn hợp niken, niken dạng tấm, hợp
                kim niken, niken dạng sợi, xi mạ niken, niken vụn, niken hợp kim
                dưới các sản phẩm, inox không gỉ, tiền xu, chân vịt tàu thuyền,
                nồi nấu hóa chất, pin sạc, pin niken, Hợp kim Alnico của nam
                châm, Hợp kim NiFe – Permalloy
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/* QUY TRINH THU MUA */}
      <div className="container mx-auto px-4">
        <h2 className="text-colorPrimary font-bold text-xl sm:text-2xl text-center mb-7 uppercase">
          Quy Trình Thu Mua Phế Liệu Tại Phế Liệu Tài Lộc Vi Na
        </h2>
        <div className="bg-[#bbf7d0] p-4 rounded-md">
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 1 : </strong>Nhân viên thu
            mua sẽ tiếp nhận cuộc gọi của khách hàng có nhu cầu thanh lý phế
            liệu qua
            <strong className="text-blue-700"> Hotline: 0989 015 053 </strong>
            của
            <strong className="text-blue-700">
              {" "}
              Công Ty Thu Mua Phế Liệu Tài Lộc Vi Na
            </strong>
            .
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 2 : </strong>Quý khách gửi
            hình ảnh phế liệu qua
            <strong className="text-blue-700">
              {" "}
              Hotline: 0989 015 053
            </strong>{" "}
            hoặc
            <strong className="text-blue-700"> Phế Liệu Tài Lộc Vi Na </strong>
            cho nhân viên đến tận công ty để đánh giá tình trạng phế liệu. Bao
            gồm: xác định chủng loại phế liệu, tình trạng phế liệu cũ hay mới,
            khả năng tái chế bao nhiêu %, khối lượng phế liệu cần thanh lý,…
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 3 : </strong>Tiến hành lập
            bảng báo giá và gửi khách hàng tham khảo. Hai bên có thể thỏa thuận
            về mức giá thu mua và % hoa hồng cho người giới thiệu.
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 4 : </strong>Nhân viên của
            <strong className="text-blue-700"> Phế Liệu Tài Lộc Vi Na </strong>
            tiến hành cân phế liệu, thông báo khối lượng thu mua phế liệu cho
            khách hàng. Đồng thời tính toán tổng số tiền sẽ phải thanh toán cho
            khách hàng.
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 5 : </strong> Đội xe của
            <strong className="text-blue-700">
              {" "}
              Phế Liệu Tài Lộc Vi Na{" "}
            </strong>{" "}
            thực hiện công đoạn bốc xếp và vận chuyển phế liệu. Khách hàng sẽ
            không phải làm bất cứ công việc gì. Tất cả đã có nhân công của{" "}
            <strong className="text-blue-700"> Phế Liệu Tài Lộc Vi Na </strong>
            lo liệu, từ thu gom vận chuyển phế liệu cho đến dọn dẹp sạch sẽ sau
            khi dời đi.
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            <strong className="text-blue-700">Bước 6 : </strong> Công ty
            <strong className="text-blue-700">
              {" "}
              Thu Mua Phế Liệu Tài Lộc Vi Na{" "}
            </strong>{" "}
            thanh toán cho khách hàng ngay sau khi cân và bốc xếp phế liệu lên
            xe. Hình thức thanh toán linh hoạt theo yêu cầu của quý vị, có thể
            chuyển khoản hoặc trả tiền mặt trực tiếp.
          </p>
          <br />
          <p className="sm:text-lg text-justify">
            Quy trình thu mua phế liệu của
            <strong className="text-blue-700">
              {" "}
              Công Ty Phế Liệu Tài Lộc Vi Na{" "}
            </strong>
            được thể hiện rõ ràng trong hợp đồng kinh tế. Nếu khách hàng đồng ý
            với Báo giá của{" "}
            <strong className="font-normal"> Phế Liệu Tài Lộc Vi Na</strong>,
            hai bên sẽ tiến hành ký kết hợp đồng.{" "}
            <strong className="font-normal">Phế Liệu Tài Lộc Vi Na </strong>
            cam kết thực hiện đúng những điều khoản trong hợp đồng, tôn trọng
            bạn hàng ở mức cao nhất, sẵn sàng bồi thường thiệt hại nếu có vi
            phạm hợp đồng.
          </p>
        </div>
      </div>
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      <FeedBack />
      {/* hr */}
      <div className="container mx-auto my-7 px-4">
        <hr className="border-b-colorPrimary border-b-[1px] " />
      </div>
      {/* CAU HOI THUONG GAP */}
      <Question />
    </div>
  );
}
