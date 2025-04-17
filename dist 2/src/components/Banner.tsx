import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    image: "/banner1.png",
    alt: "Logistics Center"
  },
  {
    id: 2,
    image: "/banner2.png",
    alt: "Express Delivery"
  },  // {
  //   id: 3,
  //   image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
  //   alt: "Global Shipping"
  // }
];

export default function Banner() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative">
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-[300px] md:h-[810px] object-cover brightness-75"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Vận chuyển nhanh chóng</h2>
                  <p className="text-lg md:text-xl">Đối tác tin cậy cho doanh nghiệp của bạn</p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}