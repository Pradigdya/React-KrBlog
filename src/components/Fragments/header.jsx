import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="bg-white shadow">
      <div class="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">KrBlog</h1>
        <nav class="space-x-4 text-sm text-gray-600">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
