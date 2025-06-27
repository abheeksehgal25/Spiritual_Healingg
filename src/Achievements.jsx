import logs4 from './assets/logs1.svg';
import logs2 from './assets/logs2.svg';
import logs3 from './assets/logs.svg';
import logs1 from './assets/logs4.svg';
import background from './assets/background.jpg';
import image from './assets/image.svg';

export default function Achievements() {
  const achievementsData = [
    { img: logs1, label: 'Years Of Practice' },
    { img: logs2, label: 'Readings' },
    { img: logs3, label: 'Instagram Followers' },
    { img: logs4, label: 'Clients & Students' },
  ];

  return (
    <section className="w-full">
      <div
        className="w-full bg-cover bg-center min-h-[400px] flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 text-white"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-philosopher text-4xl font-semibold mb-2">Achievements</h2>
          <img src={image} alt="decorative underline" className="mx-auto w-36 sm:w-48" />
        </div>
        {/* Achievements */}
        <div className="flex flex-wrap justify-center gap-[90px] mt-4">
          {achievementsData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.img} alt="" className='hover:shadow-lg transition-shadow duration-300 scale-[20px] cursor-pointer'/>
              <p className="mt-2 text-sm font-inter text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 