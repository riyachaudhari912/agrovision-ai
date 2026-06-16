function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          AgroVision AI
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Dashboard</a>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;