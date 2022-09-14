import { nanoid } from "nanoid";

export const images = [
  {
    id: nanoid(),
    src: "https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/aprmt-1.png?raw=true",
  },
  {
    id: nanoid(),
    src: "https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/aprmt-2.png?raw=true",
  },
  {
    id: nanoid(),
    src: "https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/aprmt-3.png?raw=true",
  },
];

export default function Apartments({ src }) {
  return (
    <section className="apartments">
      <img src={src} alt="Apartments" loading="lazy" />
    </section>
  );
}
