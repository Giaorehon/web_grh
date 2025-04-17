import { Phone, Menu, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
          
          <div className="text-white font-bold text-xl">
            <a href="main.tsx" className="logo">
              <img src="/logo_GRH2.png" alt="Giao Rẻ Hơn"></img>
              </a>
          </div>

          <nav className="hidden md:flex flex-1 justify-center ml-20">
            <ul className="flex space-x-8">
              <li><a href="main.tsx" className="text-orange-500 font-bold hover:text-green-700">Trang chủ</a></li>
              <li><a href="ServiceGrid.tsx" className="text-orange-500 font-bold hover:text-green-700">Dịch vụ</a></li>
              <li><a href="#" className="text-orange-500 font-bold hover:text-green-700">Bảng giá</a></li>
              <li><a href="#" className="text-orange-500 font-bold hover:text-green-700">Liên hệ</a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:1900000000" className="flex items-center text-green-700">
              <Phone className="w-5 h-5 mr-2" />
              <span className="hidden md:inline">+84 902 673 285</span>
            </a>
            <a href="#" className="hidden md:flex items-center text-green-700">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Tra cứu đơn hàng</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}