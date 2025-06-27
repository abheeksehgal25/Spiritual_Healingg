import maam from './assets/maam.svg';
import image from './assets/image.svg';

export default function Events() {
  return (
    <section className="py-10 px-4 md:px-16 lg:px-24 text-black">
      <div className="text-center mb-10">
        <h2 className="font-philosopher text-4xl font-semibold mb-2">Offline Events</h2>
        <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
      </div>
      <div className="overflow-hidden w-full bg-white py-4">
        <div className="flex gap-8 marquee w-max">
          <img src={maam} alt="img1" className="h-80 w-80 object-contain" />
          <img src={maam} alt="img2" className="w-80 h-80 object-contain" />
          <img src={maam} alt="img3" className="w-80 h-80 object-contain" />
          <img src={maam} alt="img4" className="w-80 h-80 object-contain" />
        </div>
      </div>
    </section>
  );
} 