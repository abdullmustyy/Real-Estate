import { nanoid } from "nanoid";

export const images = [
  { id: nanoid(), src: "src/assets/aprmt-1.png" },
  { id: nanoid(), src: "src/assets/aprmt-2.png" },
  { id: nanoid(), src: "src/assets/aprmt-3.png" },
];

export default function Apartments({src}) {
  return <section className="apartments">
    <img src={src} alt="Apartments" />
  </section>;
}
