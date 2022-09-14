import Apartments from "./Apartments";
import { images } from "./Apartments";

const imagesArray = images.map((image) => (
  <Apartments key={image.id} src={image.src} />
));

export default function Tour() {
  return (
    <section className="tour pb-20" id="tour">
      <div className="bg-re-brown text-white pt-20 pb-48">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-y-5 md:gap-y-0 px-4 md:px-0">
            <div className="md:w-1/2">
              <h2 className="font-semibold text-3xl mb-3 text-center md:text-left">
                Tour Our Apartments
              </h2>
              <p className="font-normal text-base text-center md:text-left">
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
      <div className="flex container overflow-x-scroll hide-scroll-bar -mt-36 mx-auto">
        <div className="flex flex-nowrap">{imagesArray}</div>
      </div>
    </section>
  );
}
