export default function Contact() {
  return (
    <section className="contact py-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 lg:gap-y-0 px-4 lg:px-0 md:px-20">
          <img
            src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/house-2.png?raw=true"
            alt="House 2"
            loading="lazy"
            className="lg:w-1/2"
          />
          <div className="flex flex-col justify-evenly gap-y-5 lg:gap-y-0">
            <h2 className="font-semibold text-3xl">
              The Leading Real Estate Rental Marketplace
            </h2>
            <p className="font-normal text-base">
              From vast lands to conducive environment, we provide well
              structured and equipped apartment for your utmost comfort and
              security.
            </p>
            <p className="font-normal text-base">
              A Real Estate, it's not about selling homes. It's about serving
              families. We have built a home that guarantees comfort, luxury and
              style at an affordable rate for your family.
            </p>
            <a
              href="#"
              className="bg-re-green text-white px-6 py-2 rounded-sm flex items-center justify-center space-x-1 w-fit font-semibold text-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
            >
              <span>Contact Us</span>
              <i class="ri-arrow-right-s-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
