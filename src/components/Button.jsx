export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-700 transition duration-300"
    >
      {text}
    </button>
  );
}
