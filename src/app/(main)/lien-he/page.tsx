const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="uppercase font-bold text-2xl text-center mt-7">
        THÔNG TIN LIÊN HỆ
      </h1>
      <div className="mt-7 text-justify leading-loose">
        <h2 className="capitalize font-bold  text-lg mb-3">
          Liên hệ với chúng tôi
        </h2>
        <div>
          <p>
            Hãy liên hệ ngay với <strong> Công ty TNHH Tài Lộc Vi Na</strong>,
            đơn vị uy tín chuyên thu mua phế liệu, vải vụn số lượng lớn và xử lý
            rác thải công nghiệp tại Bình Dương.
          </p>
          <p>
            <span className="font-bold">Hotline</span>: 0989 015 053
          </p>
          <p>
            <span className="font-bold">Email:</span> tailocvina.work@gmail.com
          </p>
          <p>
            <span className="font-bold">Địa chỉ:</span> Thửa đất số 1046, tờ bản
            đồ số 171, khu phố Hòa Lân 2, Phường Thuận Giao, Thành phố Thuận An,
            Tỉnh Bình Dương, Việt Nam
          </p>
        </div>
      </div>
      <div className="mt-7 text-justify leading-loose">
        <h2 className="capitalize font-bold  text-lg mb-3">Bản đồ chỉ đường</h2>
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
  );
};
export default Contact;
