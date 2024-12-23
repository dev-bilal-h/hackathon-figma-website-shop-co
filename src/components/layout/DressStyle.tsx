import ImgCasual from "@/assets/images/card-casual.png";
import ImgFormal from "@/assets/images/card-formal.png";
import ImgParty from "@/assets/images/card-party.png";
import ImgGym from "@/assets/images/card-gym.png";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className=" bg-gray-100 py-10 px-4 rounded-[40px] shadow-md mx-auto max-w-screen-xl">
      <h2 className="text-center text-2xl font-extrabold mb-8">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {/* Card Casual Image*/}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] md:ml-36 ">
          <Image
            src={ImgCasual}
            alt="Casual"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black font-serif">
            Casual
          </p>
        </div>
        {/* Card Formal Image */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] sm:col-span-2 md:col-span-2 md:ml-36">
          <Image
            src={ImgFormal}
            alt="Formal"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black font-serif">
            Formal
          </p>
        </div>
        {/* Card Party Image */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] sm:col-span-2 md:col-span-2 md:ml-36">
          <Image
            src={ImgParty}
            alt="Party"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black font-serif">
            Party
          </p>
        </div>
        {/* Card Gym Image */}
        <div className="relative bg-white rounded-[20px] overflow-hidden shadow-md w-full h-[289px] md:ml-36">
          <Image
            src={ImgGym}
            alt="Gym"
            layout="fill"
            className="object-cover w-full h-full"
          />
          <p className="absolute top-2 left-2 text-lg font-bold text-black font-serif">
            Gym
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;