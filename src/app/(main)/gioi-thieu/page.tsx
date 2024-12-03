import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu Công Ty Thu Mua Phế Liệu giá cao Giá Cao | Tài Lộc Vi Na",
  description:
    "Phế Liệu Tài Lộc Vi Na tự hào là đơn vị thu mua phế liệu giá cao nhất cả nước. Căn cứ vào tình trạng phế liệu cũng như khả năng tái chế của nó, Phế Liệu Phát Tài Lộc sẽ thông báo cho khách hàng mức giá thu mua xứng đáng nhất.",
  alternates: {
    canonical: "https://www.phelieutailocvina.com/gioi-thieu",
  },
  openGraph: {
    title: "Giới Thiệu | Tài Lộc Vi Na",
    description:
      "Phế Liệu Tài Lộc Vi Na tự hào là đơn vị thu mua phế liệu giá cao nhất cả nước. Căn cứ vào tình trạng phế liệu cũng như khả năng tái chế của nó, Phế Liệu Phát Tài Lộc sẽ thông báo cho khách hàng mức giá thu mua xứng đáng nhất.",
    url: "https://www.phelieutailocvina.com/gioi-thieu",
    siteName: "Phế Liệu Tài Lộc Vi Na",
    type: "website",
    images: [
      {
        url: "https://www.phelieutailocvina.com/phe-lieu-vai-vun.jpg", // Must be an absolute URL
        width: 800,
        height: 400,
        type: "image/jpg",
      },
    ],
    locale: "vi_VN",
  },
};

const GioiThieu = () => {
  return (
    <div className="mx-auto container px-4">
      <div className="pt-7">
        <h1 className="text-2xl lg:text-3xl font-bold mb-7 uppercase text-center">
          Giới thiệu Công Ty Thu Mua Phế Liệu giá cao | Tài Lộc Vi Na
        </h1>
        <p className="text-justify leading-relaxed">
          Công ty thu mua phế liệu giá cao Tài Lộc Vi Na chuyên thu mua vải vụn
          số lượng lớn, phế liệu, hàng tồn, xử lí rác công nghiệp tại các tỉnh
          thành, chủ yếu là các tỉnh phía Nam như Đồng Nai, Bình Dương, Tp HCM,
          Long An, Vũng Tàu, Miền Tây,…
        </p>
        <br />

        <p className="text-justify leading-relaxed">
          Thu mua phế liệu Tài Lộc Vi Na là cơ sở thu mua phế liệu hoạt động lâu
          đời trên toàn quốc, với uy tín cao, chúng tôi luôn đáp ứng mọi nhu cầu
          của khách hàng, thu mua phế liệu giá cao, thực hiện nhanh gọn, không
          ngại xa, luôn có đội ngũ nhân viên thu mua tận nơi, đáp ứng 24/24h.
        </p>
        <br />
        <p className="text-justify leading-relaxed">
          Chúng tôi chuyên thu mua tất cả các loại phế liệu với số lượng lớn,
          như thu mua vải vụn, thu mua phế liệu kim loại, giấy, bao bì, nhựa,
          thu mua phế liệu đồng, thu mua phế liệu nhôm, thu mua phế liệu inox,
          thu mua phế liệu kẽm , tất cả các loại phế liệu có thể tái chế , thu
          gôm và xử lý rác thải công nghiệp.
        </p>
        <br />
        <p className="text-justify leading-relaxed">
          Quý khách có nhu cầu bán phế liệu, xin vui lòng liên hệ: 0989 015 053
          để được tư vấn dịch vụ thu mua chu đáo nhất.
        </p>
      </div>
      <div>
        <h2 className="text-lg  font-bold mt-7 mb-3">
          CÔNG TY THU MUA PHẾ LIỆU TÀI LỘC VI NA NHẬN THU MUA CÁC LOẠI PHẾ LIỆU
        </h2>
        <ul className="list-disc leading-loose ml-6">
          <li>Thu mua bo mạch, IC, chip, linh kiện, thiết bị điện tử,…</li>
          <li>
            Thu mua máy móc cũ, dây chuyền sản xuất, tàu thuyền, mỏ neo, ô tô,
            xe buýt, xe máy,… hết hạn sử dụng, hư hỏng, thanh lý
          </li>
          <li>
            Thu mua phế liệu giấy các loại: carton, giấy lộn, giấy in, bao bì
            giấy,…
          </li>
          <li>
            Thu mua phế liệu vải các loại, sản phẩm từ vải lỗi thời, tồn kho,
            sản xuất lỗi, hàng quá đát,..
          </li>
          <li>
            Nhận mua mọi mặt hàng thanh lý từ nhà xưởng, nhà máy, công ty,…
          </li>
          <li>
            Thu mua Phế liệu inox: đồ dùng, thiết bị inox, inox thanh các loại
            410, 420, 430, 630,…
          </li>
          <li>
            Thu mua Phế liệu nhôm: nhôm đặc, nguyên chất, nhôm trắng, nhôm định
            hình, nhôm thanh đồ dùng nhôm, nhôm xingfa, nhôm dẻo, nhôm số, nhôm
            vụn, hợp kim nhôm…
          </li>
          <li>
            Thu mua Phế liệu chì: bình ắc quy, chì x quang, chì dẻo, chì lưới,
            chì cục, chì thanh,…
          </li>
          <li>
            Thu mua Phế liệu nhựa (ABS, PVC, PC,…): nhựa dẻo, nhựa cứng, ống
            nhựa, thùng nhựa, pallet nhựa, nilon dẻo, nilon sữa,…
          </li>
          <li>
            Thu mua Phế liệu sắt: sắt gia dụng, máy sắt, thùng sắt, sắt thanh,
            sắt vụn, sắt xây dựng, hợp kim sắt,…
          </li>
          <li>
            Thu mua Phế liệu đồng: đồng cáp, đồng thau, dây đồng, đồng mô tơ,
            máy biến thế, hợp kim đồng,…
          </li>
          <li>
            Thu mua Phế liệu công trình: thép công trình, xây dựng, vật liệu
            thép thanh lý,…
          </li>
          <li>
            Vật dụng, phụ tùng xi mạ, niken, gang… hoen gỉ, hàng tồn thanh lý sử
            dụng hoặc thanh lý phế.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg  font-bold mt-7 mb-3 uppercase">
          Chúng Tôi Thu Mua Vải Vụn Số Lượng Lớn
        </h2>
        <p className="text-justify leading-relaxed">
          Ngoài thu mua phế liệu, Tài Lộc Vi Na còn cung cấp dịch vụ thu mua vải
          vụn số lượng lớn từ các nhà máy may mặc, các cơ sở sản xuất vải và các
          cửa hàng thời trang. Chúng tôi chuyên xử lý và tái chế vải vụn thành
          các sản phẩm có giá trị, giúp giảm thiểu ô nhiễm môi trường và tối ưu
          hóa quá trình sản xuất.
        </p>
      </div>
      <div>
        <h2 className="text-lg  font-bold mt-7 mb-3 uppercase">
          Chúng Tôi Thu gom và xử lý rác thải công nghiệp
        </h2>
        <p className="text-justify leading-relaxed">
          Rác thải công nghiệp là một trong những vấn đề môi trường cần được
          giải quyết một cách hiệu quả. Tại Tài Lộc Vi Na, chúng tôi cung cấp
          dịch vụ thu gom và xử lý rác thải công nghiệp đúng quy trình và an
          toàn. Các loại rác thải như hóa chất, nhựa, kim loại và các vật liệu
          nguy hiểm khác sẽ được xử lý một cách chuyên nghiệp và bảo vệ sức khỏe
          cộng đồng.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold mt-7 mb-3 uppercase">
           uy tín – nhanh gọn – giá cao
        </h2>
        <p className="mb-2">
          Với phương châm “Luôn đáp ứng nhu cầu của khách hàng “, chúng tôi đảm
          bảo rằng:
        </p>
        <ul className="list-disc ml-6 text-justify leading-loose">
          <li>
            Giá cả cạnh tranh: chúng tôi đảm bảo thu mua với giá cao nhất thị
            trường.
          </li>
          <li>Mua bán nhanh chóng, thanh toán thuận tiện.</li>
          <li>
            Không ngại số lượng: chúng tôi luôn phục vụ bạn dù số lượng ít
          </li>
          <li>Luôn lấy uy tín làm trên hết.</li>
          <li>
            Đừng bỏ đi những gì dù chỉ là ve chai. Xin đưa nó cho chúng tôi
          </li>
          <li>Hãy bán tất cả những gì bạn cho là không xài được</li>
          <li>
            Thời gian thu mua 24 / 24 và tất cả ngày trong tuần (kể cả chủ nhật)
          </li>
          <li>
            Thu mua phế liệu sắt thép đã không còn sử dụng hãy điện thoại ngay
            cho chúng tôi bạn sẽ được mua với giá cao tại Bình Dương, Đồng Nai,
            TP Hồ Chí Minh và các tỉnh lân cận.
          </li>
        </ul>
        <p className="text-justify leading-relaxed">
          Quý khách có nhu cầu thanh lý hàng phế liệu, hãy liên hệ với chúng tôi
          để nhận được giá tốt nhất!
        </p>
      </div>
      <div>
        <h2 className="text-lg  font-bold mt-7 mb-3 uppercase">
          Thông tin liên hệ Thu Mua Phế Liệu Tài Lộc Vi Na
        </h2>
        <p className="text-justify leading-relaxed">
          <span className="font-bold">Địa chỉ:</span> Thửa đất số 1046, tờ bản
          đồ số 171, khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An,
          Tỉnh Bình Dương, Việt Nam
        </p>
        <p className="text-justify leading-relaxed">
          <span className="font-bold">Holine:</span> 0989 015 053
        </p>
        <p className="text-justify leading-relaxed">
          <span className="font-bold">Email:</span> phelieutailocvina@gmail.com
        </p>
      </div>
      <div className="pb-7">
        <h2 className="text-xl  font-bold mt-7 mb-3  uppercase">
          Thông tin Giấy phép kinh doanh của công ty thu mua phế liệu giá cao
          Tài Lộc Vi Na
        </h2>
        <p className="text-justify leading-relaxed">
          Công ty thu mua phế liệu giá cao Tài Lộc Vi Na tự hào là một trong
          những đơn vị uy tín tại Việt Nam, chuyên cung cấp các dịch vụ thu mua
          phế liệu, vải vụn số lượng lớn và xử lý rác thải công nghiệp. Để đảm
          bảo chất lượng dịch vụ và tuân thủ pháp luật, công ty chúng tôi đã
          hoàn tất các thủ tục pháp lý và sở hữu Giấy phép kinh doanh hợp pháp.
        </p>
        <br />
        <p className="text-justify leading-relaxed">
          Giấy phép kinh doanh của công ty thu mua phế liệu giá cao Tài Lộc Vi
          Na được cấp bởi cơ quan chức năng có thẩm quyền, với các thông tin chi
          tiết về ngành nghề hoạt động, địa chỉ, số đăng ký kinh doanh và các
          giấy tờ pháp lý liên quan. Đây là cơ sở để chúng tôi thực hiện các
          hoạt động thu mua phế liệu và xử lý rác thải công nghiệp một cách
          chính thống và tuân thủ các quy định của pháp luật.
        </p>
        <div className="flex flex-col items-center gap-y-2 md:gap-x-5 md:flex-row  md:justify-center mt-7">
          <Image
            src="/giay-phep-kinh-doanh-tai-loc-vi-na-1-edit.png"
            alt="giay-phep-kinh-doanh-cong-ty-tai-loc-vi-na"
            width={480} // Chiều rộng gốc của ảnh
            height={0} // Chiều cao gốc của ảnh
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto"
            priority
          />

          <Image
            src="/giay-phep-kinh-doanh-tai-loc-vi-na-2-edit.png"
            alt="giay-phep-kinh-doanh-cong-ty-tai-loc-vi-na"
            width={480} // Chiều rộng gốc của ảnh
            height={640} // Chiều cao gốc của ảnh
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto"
            priority
          />
        </div>
        <br />
        <p className="text-justify leading-relaxed">
          Công ty thu mua phế liệu giá cao Tài Lộc Vi Na luôn đặt mục tiêu bảo
          vệ môi trường lên hàng đầu. Chúng tôi cam kết thực hiện các dịch vụ
          thu mua và xử lý phế liệu, vải vụn, và rác thải công nghiệp không chỉ
          tuân thủ pháp luật mà còn góp phần giảm thiểu ô nhiễm môi trường. Giấy
          phép kinh doanh của công ty chứng minh rằng chúng tôi hoạt động trong
          khuôn khổ pháp lý, đồng thời hỗ trợ cộng đồng trong việc bảo vệ sức
          khỏe và phát triển bền vững.
        </p>
        <br />
        <p className="text-justify leading-relaxed">
          Giấy phép kinh doanh của công ty cũng thể hiện trách nhiệm xã hội của
          chúng tôi trong việc cung cấp các giải pháp thu gom và xử lý phế liệu,
          rác thải công nghiệp một cách hiệu quả và an toàn. Việc sở hữu giấy
          phép này giúp công ty thực hiện nghĩa vụ thuế đầy đủ, đảm bảo quyền
          lợi cho khách hàng và cộng đồng, đồng thời nâng cao sự tin tưởng từ
          đối tác và khách hàng.
        </p>
      </div>
    </div>
  );
};
export default GioiThieu;
