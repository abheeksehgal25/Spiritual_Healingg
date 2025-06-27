import line from './assets/line.svg';
import image from './assets/image.svg';

export default function Portfolio() {
  return (
    <section className="py-10 px-4 md:px-16 lg:px-24 text-black">
      <div className="text-center mb-10">
        <h2 className="font-philosopher text-3xl font-semibold mb-2">Portfolio</h2>
        <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="aspect-video bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={line} alt={`portfolio item ${idx + 1}`} className="w-full h-full object-cover hover:shadow-lg transition-shadow duration-300 scale-[40px] cursor-pointer" />
          </div>
        ))}
      </div>
    </section>
  );
} 