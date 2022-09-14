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
  {
    id: nanoid(),
    src: "https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/aprmt-2.png?raw=true",
  },
  {
    id: nanoid(),
    src: "https://github.com/abdullmustyy/Real-Estate/blob/main/src/assets/aprmt-1.png?raw=true",
  },
];

export default function Apartments({ src }) {
  return (
    <div className="apartments inline-block px-3 w-80 md:w-96">
      <img
        src={src}
        alt="Apartments"
        loading="lazy"
        className="w-full overflow-hidden rounded-lg"
      />
    </div>
  );
}
