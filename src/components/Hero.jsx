export default function Hero() {
  return (
    <section className="hero relative pt-20">
      <div className="container mx-auto">
        <div className="flex-col w-3/5 space-y-4">
          <h1 className="font-bold text-7xl">Turn A House To Your Home</h1>
          <p className="font-normal text-base">
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
      <img
        src="src/assets/house-1.png"
        alt="House 1"
        className="ml-auto -mt-52 w-5/6"
      />
    </section>
  );
}
