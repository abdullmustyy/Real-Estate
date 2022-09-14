export default function Footer({ darkMode }) {
  const darkModeStyles = {
    color: darkMode ? "#494949" : "",
  };

  return (
    <footer
      className="footer bg-re-gray py-20 px-4 md:px-0 mt-10"
      id="footer"
      style={darkModeStyles}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-x-3 gap-y-10 md:gap-y-0 lg:gap-x-20">
          <div className="flex flex-col gap-y-5">
            <div>
              <h2 className="font-bold text-2xl">Real Estate</h2>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="font-normal text-sm">
                Real Estate is the leading estate rental marketplace. Wth over 1
                million+ homes available, we can match you with a house you'll
                want to call home.
              </p>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <i class="ri-map-pin-fill"></i>
                  <span className="font-normal text-sm">
                    Lekki, Lagos, Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-x-3">
                  <i class="ri-phone-fill"></i>
                  <span className="font-normal text-sm">+123 4758 125</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <i class="ri-mail-fill"></i>
                  <span className="font-normal text-sm">
                    homes@realestate.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-y-7">
              <div>
                <h3 className="font-semibold text-base">Company</h3>
              </div>
              <div className="flex flex-col gap-y-3">
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  All Products
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <div>
                <h3 className="font-semibold text-base">Services</h3>
              </div>
              <div className="flex flex-col gap-y-3">
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Buy A Home
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Rent A Home
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Sell A Home
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <div>
                <h3 className="font-semibold text-base">Customer Care</h3>
              </div>
              <div className="flex flex-col gap-y-3">
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="font-normal text-sm hover:scale-105 w-fit"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
