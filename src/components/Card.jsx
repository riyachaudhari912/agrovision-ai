function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-700 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Card;