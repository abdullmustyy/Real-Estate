import Apartments from "./Apartments";
import { images } from "./Apartments";

const imagesArray = images.map((image) => (
  <Apartments key={image.id} src={image.src} />
));

export default function Tour() {
  return (
    <section className="tour pb-20">
      <div className="bg-re-brown text-white pt-20 pb-48">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="w-1/2">
              <h2 className="font-semibold text-3xl mb-3">
                Tour Our Apartments
              </h2>
              <p className="font-normal text-base">
                All our apartments are equipped with accessories that makes a
                house a home that meets all your luxury standards
              </p>
            </div>
            <div>
              <a
                href="#"
                className="bg-re-green text-white px-6 py-2 rounded-sm flex items-center justify-center space-x-1 w-fit font-semibold text-sm hover:bg-re-d-green active:bg-re-dd-green focus:outline-none focus:ring focus:ring-re-white"
              >
                <span>View More</span>
                <i class="ri-arrow-right-s-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto -mt-36 gap-x-5">{imagesArray}</div>
    </section>
  );
}
