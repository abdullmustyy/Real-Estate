export default function Hero() {
  return (
    <section className="hero relative pt-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:w-3/5 items-center lg:items-start space-y-4">
          <h1 className="font-bold text-7xl text-center lg:text-left">
            Turn A House To Your Home
          </h1>
          <p className="font-normal text-base text-center lg:text-left">
            With over 1 million+ homes availble, we can match you with <br /> a
            house you will want to call home.
          </p>
          <a
            href="#"
            className="bg-re-green text-white px-6 py-2 rounded-sm flex items-center justify-center space-x-1 w-fit font-semibold text-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-brown"
          >
            <span>Explore Now</span>
            <i class="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/house-1.png?raw=true"
          alt="House 1"
          loading="lazy"
          className="mt-10 lg:-mt-52 w-5/6"
        />
      </div>
    </section>
  );
}
