export default function Navbar() {
  return (
    <nav className="bg-amber-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">☕ Coffee Shop</h1>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
