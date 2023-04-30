import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const navigate = useNavigate();
  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          {" "}
          <Link className="cursor-pointer" onClick={() => navigate("/")} to="/">
            Home
          </Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          {" "}
          <Link
            className="cursor-pointer"
            onClick={() => navigate("/search")}
            to="/search"
          >
            Search
          </Link>
        </div>
        <div className="px-3 text-center text-white hover:underline">
          <Link
            className="cursor-pointer"
            onClick={() => navigate("/browse")}
            to="/browse"
          >
            Browse by Genre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
