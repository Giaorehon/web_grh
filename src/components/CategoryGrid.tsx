import { Truck, Apple, Carrot, Fish, Beef } from 'lucide-react';

const categories = [
  { id: 1, name: 'Giao hàng nhanh', icon: Truck, color: 'text-blue-500' },
  { id: 2, name: 'Trái cây', icon: Apple, color: 'text-red-500' },
  { id: 3, name: 'Rau củ', icon: Carrot, color: 'text-green-500' },
  { id: 4, name: 'Hải sản', icon: Fish, color: 'text-cyan-500' },
  { id: 5, name: 'Thịt tươi', icon: Beef, color: 'text-rose-500' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-5 gap-2 p-4 bg-white">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-gray-50 rounded-lg"
        >
          <category.icon className={`w-8 h-8 ${category.color}`} />
          <span className="text-xs mt-2 text-center">{category.name}</span>
        </div>
      ))}
    </div>
  );
}