export default function Partners() {
  return (
    <section className="partners py-20 px-5 sm:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-3xl bg-re-green text-white px-20 md:px-32 py-2 mb-10">
            Our Partners
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-5">
          <div className="flex justify-center items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/access.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/seed-b.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/jul-brg.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/interswitch.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-5">
          <div className="flex justify-center md:justify-end items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/flutterwave.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/eHealth.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex justify-center md:justify-start items-center col-span-2 md:col-span-1">
            <img
              src="https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/andela.png?raw=true"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
