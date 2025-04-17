
import { Clock, Shield, Headphones } from 'lucide-react';
import Header from './components/Header';
import Banner from './components/Banner';
import ServiceGrid from './components/ServiceGrid';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <Banner />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cung cấp giải pháp vận chuyển toàn diện, đáp ứng mọi nhu cầu logistics của doanh nghiệp bạn
            </p>
          </div>
          
          <ServiceGrid />
        </div>

        <Stats />

        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Tại sao chọn chúng tôi?</h2>
              <p className="text-gray-600">Đối tác vận chuyển tin cậy cho doanh nghiệp của bạn</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Giao hàng đúng hẹn</h3>
                <p className="text-gray-600">Cam kết thời gian giao hàng chính xác</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">An toàn & Bảo mật</h3>
                <p className="text-gray-600">Đảm bảo hàng hóa nguyên vẹn</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hỗ trợ 24/7</h3>
                <p className="text-gray-600">Luôn sẵn sàng hỗ trợ khách hàng</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <a href="main.tsx" className="logo">
              <img src="/logo_trang.png" alt="Giao Rẻ Hơn"></img>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
              <p className="text-blue-200">
                Địa chỉ: 36/52/5 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh,Thành phố Hồ Chí Minh<br />
                Email: cskh@giaorehon.vn<br />
                Hotline: +84 902 673 285
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">Facebook</a>
                <a href="#" className="text-blue-200 hover:text-white">LinkedIn</a>
                <a href="#" className="text-blue-200 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;