import {
  IconChevronDown,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconX,
} from "@tabler/icons-react";

function Header() {
  return (
    <div>
      <div className="bg-black text-white text-xs flex items-center justify-between px-2 py-1 md:px-24 md:py-2">
        <div></div>
        <div className="flex gap-2">
          <p>Sign up and get 20% off to your first order.</p>
          <a href="/" className="underline">
            Sign up now
          </a>
        </div>
        <button>
          <IconX />
        </button>
      </div>

      <div className="flex justify-between  px-2 py-1 md:px-24 md:py-2 items-center">
        <div className="flex gap-10 items-center">
          <a className="font-black text-3xl" href="/">
            SHOP.CO
          </a>
          <a href="/" className="hidden md:flex items-center">
            Shop <IconChevronDown />
          </a>
          <a href="/" className="hidden md:block">
            On Sale
          </a>
          <a href="/" className="hidden md:block">
            New Arrivals
          </a>
          <a href="/" className="hidden md:block">
            Brands
          </a>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              className="bg-gray-100 hidden md:block w-xs pl-8 p-1 rounded-2xl"
              type="text"
              placeholder="Search for products..."
            />
            <IconSearch className="md:absolute top-1 left-1 md:text-gray-500" />
          </div>
          <button>
            <IconShoppingCart />
          </button>
          <button>
            <IconUser />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;