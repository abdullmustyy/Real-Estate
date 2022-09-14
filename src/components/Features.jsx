import Feature from "./Feature";

export default function Features() {
  return (
    <section className="features bg-re-brown text-white py-20">
      <div className="container mx-auto grid grid-cols-3 gap-x-24">
        <Feature
          title={"Buy A Home"}
          desc={
            "We have saved a lot of customers millions. Let us help you find your dream home at an affordable rate with the best payment plan."
          }
          url={"#"}
        />
        <Feature
          title={"Rent A Home"}
          desc={
            "Are you looking to rent a space or apartment for a period of time? We got you covered."
          }
          url={"#"}
        />
        <Feature
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
