import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#6DD19C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
          <a href="main.tsx" className="logo">
          <img src="/logo_trang.png" alt="Giao Rẻ Hơn"></img>
            </a>
            <p>Giấy chứng nhận đăng ký doanh nghiệp số 0318758109, cấp ngày 22/11/2024 bởi Sở Tài Chính Thành Phố Hồ Chí Minh</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <p className="text-white-200">
              Địa chỉ: 36/52/5 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh,Thành phố Hồ Chí Minh<br />
              Email: cskh@giaorehon.vn<br />
              Hotline: 035.695.4034
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/profile.php?id=61568192883725" className="text-blue-200 hover:text-white">Facebook</a>
              <a href="#" className="text-blue-200 hover:text-white">LinkedIn</a>
              <a href="#" className="text-blue-200 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white-800 mt-6 pt-6">
          <div className="flex flex-wrap gap-4 justify-center text-sm text-blue-200">
            <a href="/privacy-policy" className="hover:text-white">Chính sách bảo mật</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white">Điều khoản sử dụng</a>
            <span>•</span>
            <a href="/payment-policy" className="hover:text-white">Hóa đơn điện tử</a>
          </div>
        </div>
      </div>
    </footer>
  );
}