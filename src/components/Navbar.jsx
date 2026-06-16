import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-lg md:text-2xl font-bold">
          AgroVision AI
        </h1>

        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;