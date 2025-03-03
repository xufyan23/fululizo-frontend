import { FeaturesData } from '../../../data/constants';

const Features = () => {
  return (
    <div className="bg-[#F75E4D] py-10">
      <div className="md:container md:mx-auto px-4 py-[3rem]">
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {FeaturesData.map((item, index) => (
            <div key={index} className="bg-transparent p-4 xss:p-0 xss:pb-4">
              <h3 className="md:text-sm lg:text-lg font-bold flex items-center">
                <span className="text-xl font-bold text-secondary mr-2">
                  {item.id}
                </span>{" "}
                {item.title}
              </h3>
              <p className="mt-2 text-sm opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
