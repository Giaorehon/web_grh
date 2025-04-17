import { Users, Building2, Timer, Globe2 } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    value: '10,000+',
    label: 'Khách hàng tin tưởng'
  },
  {
    id: 2,
    icon: Building2,
    value: '50+',
    label: 'Chi nhánh toàn quốc'
  },
  {
    id: 3,
    icon: Timer,
    value: '24/7',
    label: 'Hỗ trợ khách hàng'
  },
  {
    id: 4,
    icon: Globe2,
    value: '100+',
    label: 'Quốc gia & vùng lãnh thổ'
  }
];

export default function Stats() {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}