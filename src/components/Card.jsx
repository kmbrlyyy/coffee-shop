export default function Card({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-amber-700">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
