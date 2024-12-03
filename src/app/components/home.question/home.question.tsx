"use client";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
const Question = () => {
  const [tab, setTab] = useState<number>(0);
  const handleSelectTab = (num: number): void => {
    console.log(num);
    if (num === tab) {
      setTab(0);
      return;
    } else {
      setTab(num);
      return;
    }
  };
  return (
    <div className="container mx-auto my-7 px-4 ">
      <h2 className="text-colorPrimary font-bold text-xl sm:text-2xl text-center mb-7 uppercase">
        Một số câu hỏi thường gặp khi mua bán phế liệu
      </h2>
      <div className="bg-[#bbf7d0] p-3 sm:p-14 rounded-md">
        <ul className="bg-white p-6 rounded-md">
          <li>
            <div
              className="flex items-start gap-3 border-colorPrimary/20 p-3 border rounded-md my-2 cursor-pointer"
              onClick={() => {
                handleSelectTab(1);
              }}
            >
              <span >
                {tab === 1 ? (
                  <IoChevronUp className="text-2xl sm:text-3xl text-colorPrimary/70" />
                ) : (
                  <IoChevronDown className="text-2xl sm:text-3xl text-colorPrimary/70" />
                )}
              </span>
              <span
                className={`sm:text-lg ${tab === 1 ? "text-colorPrimary" : ""}`}
              >
                Công ty{" "}
                <strong
                  className={`text-black font-normal sm:text-lg ${
                    tab === 1 ? "text-colorPrimary" : ""
                  }`}
                >
                  thu mua phế liệu Tài Lộc Vi Na
                </strong>{" "}
                có thu mua tận nơi không?
              </span>
            </div>
            {tab === 1 && (
              <p className="p-3 text-justify">
                <strong className="text-black font-normal">
                  Tài Lộc Vi Na{" "}
                </strong>
                đã hoạt động trong lĩnh vực mua hơn 10 năm. Chúng tôi tự tin
                mình là một trong những công ty mua giá cao nhất trên thị trường
                hiện nay. Chúng tôi có đầy đủ hồ sơ năng lực chứng mình khả năng
                của mình.
              </p>
            )}
          </li>
          <li>
            <div
              className="flex items-start gap-3 border-colorPrimary/20 p-3 border rounded-md my-2 cursor-pointer"
              onClick={() => {
                handleSelectTab(2);
              }}
            >
              <span>
                {tab === 2 ? (
                  <IoChevronUp className="text-2xl sm:text-3xl text-colorPrimary/70" />
                ) : (
                  <IoChevronDown className="text-2xl sm:text-3xl text-colorPrimary/70" />
                )}
              </span>
              <span
                className={`sm:text-lg ${tab === 2 ? "text-colorPrimary" : ""}`}
              >
                Giá phế liệu tại{" "}
                <strong
                  className={`text-black font-normal sm:text-lg ${
                    tab === 2 ? "text-colorPrimary" : ""
                  }`}
                >
                  {" "}
                  Phế Liệu Tài Lộc Vi Na{" "}
                </strong>{" "}
                có ổn định không?
              </span>
            </div>
            {tab === 2 && (
              <p className="p-3 text-justify">
                Giá thu mua phụ thuộc rất nhiều vào biến động thị trường trong
                nước và quốc tế.{" "}
                <strong className="text-black font-normal">
                  Tài Lộc Vi Na
                </strong>{" "}
                luôn cố gắng mang đến cho quý khách một mức giá thu mua tốt
                nhất, ổn định nhất ở mọi thời điểm.
              </p>
            )}
          </li>
          <li>
            <div
              className="flex items-start gap-3 border-colorPrimary/20 p-3 border rounded-md my-2 cursor-pointer"
              onClick={() => {
                handleSelectTab(3);
              }}
            >
              <span>
                {tab === 3 ? (
                  <IoChevronUp className="text-2xl sm:text-3xl text-colorPrimary/70" />
                ) : (
                  <IoChevronDown className="text-2xl sm:text-3xl text-colorPrimary/70" />
                )}
              </span>
              <span
                className={`sm:text-lg ${tab === 3 ? "text-colorPrimary" : ""}`}
              >
                <strong
                  className={`text-black font-normal sm:text-lg ${
                    tab === 3 ? "text-colorPrimary" : ""
                  }`}
                >
                  Phế Liệu Tài Lộc Vi Na
                </strong>{" "}
                có nhận tư vấn miễn phí không?
              </span>
            </div>
            {tab === 3 && (
              <p className="p-3 text-justify">
                <strong className="text-black font-normal">
                  Công Ty Phế Liệu Tài Lộc Vi Na{" "}
                </strong>
                tư vấn báo giá phế liệu nhanh chóng và hoàn toàn miễn phí, chỉ
                cần một cuộc gọi đến số điện thọai <strong className="text-blue-700">0989 015 053</strong>
                . Hoặc khách hàng có thể tự tra cứu vì mọi thông tin chi tiết về
                bảng giá phế liệu sẽ được cập nhật định kỳ trên website của công
                ty chúng tôi.
              </p>
            )}
          </li>
          <li>
            <div
              className="flex items-start gap-3 border-colorPrimary/20 p-3 border rounded-md my-2 cursor-pointer"
              onClick={() => {
                handleSelectTab(4);
              }}
            >
              <span>
                {tab === 4 ? (
                  <IoChevronUp className="text-2xl sm:text-3xl text-colorPrimary/70" />
                ) : (
                  <IoChevronDown className="text-2xl sm:text-3xl text-colorPrimary/70" />
                )}
              </span>
              <p
                className={`sm:text-lg ${tab === 4 ? "text-colorPrimary" : ""}`}
              >
                Làm sao để{" "}
                <strong
                  className={`text-black font-normal sm:text-lg ${
                    tab === 4 ? "text-colorPrimary" : ""
                  }`}
                >
                  {" "}
                  Phế Liệu Tài Lộc Vi Na{" "}
                </strong>{" "}
                báo giá phế liệu nhanh chóng nhất?
              </p>
            </div>
            {tab === 4 && (
              <p className="p-3 text-justify">
                Bạn hãy thêm bạn với{" "}
                <strong className="text-black font-normal">
                  {" "}
                  Tài Lộc Vi Na{" "}
                </strong>{" "}
                qua Zalo
                <strong className="text-blue-700"> 0989 015 053</strong>. Sau đó gửi hình ảnh phế liệu của
                doanh nghiệp bạn cho chúng tôi. Chúng tôi sẽ thẩm định và báo
                giá ngay lập tức cho bạn. Đồng thời chúng ta sẽ trao đổi với
                nhau về mức chiết khấu mà người môi giới sẽ nhận được.
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Question;
