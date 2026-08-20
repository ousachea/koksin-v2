// Real KOKSIN app screenshots in iPhone frames. The screenshots already carry
// the status bar and Dynamic Island, so the frame is bezel only — drawing a
// second island over them would double it up.
const shots = [
  {
    src: "/app/partner.webp",
    frame: "dphone dphone-a",
    alt: "The KOKSIN app showing a partner profile with bookable services and prices",
  },
  {
    src: "/app/home.webp",
    frame: "dphone dphone-b",
    alt: "The KOKSIN app home screen with service categories and featured partners",
  },
  {
    src: "/app/packages.webp",
    frame: "dphone dphone-c",
    alt: "The KOKSIN app showing saved packages and remaining class credits",
  },
];

export default function PhoneShots() {
  return (
    <div className="dphones">
      {shots.map((shot) => (
        <div className={shot.frame} key={shot.src}>
          <img
            className="dphone-screen"
            src={shot.src}
            alt={shot.alt}
            width={672}
            height={1460}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
