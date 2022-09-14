import Feature from "./Feature";

export default function Features() {
  return (
    <section className="features bg-re-brown text-white py-20" id="services">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-x-24 gap-y-14 md:gap-y-0">
        <Feature
          icon={<i className="ri-service-line ri-2x"></i>}
          title={"Buy A Home"}
          desc={
            "We have saved a lot of customers millions. Let us help you find your dream home at an affordable rate with the best payment plan."
          }
          url={"#"}
        />
        <Feature
          icon={<i className="ri-home-heart-line ri-2x"></i>}
          title={"Rent A Home"}
          desc={
            "Are you looking to rent a space or apartment for a period of time? We got you covered."
          }
          url={"#"}
        />
        <Feature
          icon={<i className="ri-currency-fill ri-2x"></i>}
          title={"Sell A Home"}
          desc={
            "What's your home worth? With our outlet, you can sell your home at the appropriate face value it was purchased or built."
          }
          url={"#"}
        />
      </div>
    </section>
  );
}
