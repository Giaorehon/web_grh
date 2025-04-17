import { Truck, Plane, Ship, Package, Clock, Globe } from 'lucide-react';

const services = [
  { id: 1, name: 'Vận tải đường bộ', icon: Truck, color: 'text-blue-500', description: 'Dịch vụ vận chuyển đường bộ toàn quốc' },
  { id: 2, name: 'Vận tải hàng không', icon: Plane, color: 'text-red-500', description: 'Vận chuyển hàng không quốc tế' },
  { id: 3, name: 'Vận tải đường biển', icon: Ship, color: 'text-green-500', description: 'Dịch vụ vận tải container đường biển' },
  { id: 4, name: 'Dịch vụ kho bãi', icon: Package, color: 'text-yellow-500', description: 'Hệ thống kho bãi hiện đại' },
  { id: 5, name: 'Giao hàng nhanh', icon: Clock, color: 'text-purple-500', description: 'Giao hàng trong ngày' },
  { id: 6, name: 'Logistics toàn cầu', icon: Globe, color: 'text-cyan-500', description: 'Mạng lưới toàn cầu' }
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
          <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
}