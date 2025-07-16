import React from 'react';
import Banner from './Banner';
export default function PaymentPolicy() {
  return (
     <><Banner /><div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">QUY ĐỊNH XUẤT HÓA ĐƠN</h1>

      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-black 200">
            1. Mỗi đơn hàng chỉ được xuất hóa đơn một lần duy nhất, GRH chỉ hỗ trợ xuất hóa đơn cước phí vận chuyển khi khách hàng đăng ký lấy hóa đơn trước khi đơn hàng hoàn thành</p>
          <p className="text-black 200">2. Quý khách vui lòng cung cấp chính xác các Thông tin Xuất hóa đơn trước khi đơn hàng hoàn thành</p>
          <p className="text-black 200">3. Thông tin xuất hóa đơn chỉ được áp dung khi khách hàng điền đầy đủ thông tin. Trường hợp không điền đủ thông tin được hiểu là khách hàng không có nhu cầu xuất hóa đơn</p>
          <p className="text-black 200">4. Với các đơn hàng đã thanh toán (ví điện tử), hóa đơn sẽ được xuất chậm nhất 24 giờ từ khi đơn hàng hoàn thành</p>
          <p className="text-black 200">5. Xem hướng dẫn đăng ký nhận hóa đơn <a className="text-blue-600 hover:text-blue-800 underline font-semibold" href="https://docs.google.com/forms/d/e/1FAIpQLSczVUi6rRpZ4fluuTKOwksaN-r-N35nb9TE8bnl2boRMJDW6g/viewform?usp=header" target='_blank' rel='noopener noreferrer'>Tại đây</a></p>
        </section>
      </div>
    </div></>
  );
}