interface ProductProps {
  name: string;
  price: number;
  image: string;
  discount?: number;
}

export default function ProductCard({ name, price, image, discount }: ProductProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">{name}</h3>
        <div className="mt-2">
          <span className="text-red-600 font-bold">
            {discountedPrice.toLocaleString('vi-VN')}đ
          </span>
          {discount && (
            <span className="ml-2 text-xs text-gray-500 line-through">
              {price.toLocaleString('vi-VN')}đ
            </span>
          )}
        </div>
        {discount && (
          <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mt-2">
            -{discount}%
          </span>
        )}
      </div>
    </div>
  );
}