export default function Partners() {
  return (
    <section className="partners py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-3xl bg-re-green text-white px-32 py-2 mb-10">
            Our Partners
          </h2>
        </div>
        <div className="grid grid-cols-4 py-5">
          <div className="flex justify-center items-center">
            <img src="src/assets/access.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src="src/assets/seed-b.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src="src/assets/jul-brg.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src="src/assets/interswitch.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 py-5">
          <div className="flex justify-end items-center">
            <img src="src/assets/flutterwave.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <img src="src/assets/eHealth.png" alt="" />
          </div>
          <div className="flex justify-start items-center">
            <img src="src/assets/andela.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
