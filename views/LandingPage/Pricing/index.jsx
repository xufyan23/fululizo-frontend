
// import CheckCircle from "../../../images/check.svg";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-12 xss:pt-[0] bg-[#182527]">
      <h2 className="text-3xl font-semibold text-center text-white pb-[3rem] xss:pb-[4rem]">
        We have flexible plan
      </h2>

      <div className="grid xss:grid-cols-1 xs:grid-cols-[1fr_1fr] sm:grid-cols-2 mx-auto md:max-w-[41rem] xss:gap-7 sm:gap-4 lg:gap-0 lg:max-w-3xl">
        <div className="bg-white p-6 rounded-xl text-center sm:w-[280px] md:w-[310px] lg:w-[360px] min-h-[390px]">
          <h3 className="text-xl text-secondary font-bold mb-3">Basic</h3>
          <p className="text-2xl font-semibold mt-2">
            $9.99/<span className="text-xs font">month</span>
          </p>
          <div className="min-h-[220px]">
            <p className="mt-5 text-xs">
              This package buy a subscription to use the basic features of
              fululizo
            </p>
            <hr className="border-spacing-1 border-black mt-[2rem] mb-[2rem]" />
            <div className="text-xs">
              <p className="flex mb-5">
                <img
                  src="../images/check.svg"
                  alt="check"
                  className="w-4 h-4 mr-3"
                />
                Listen Fululizo podcast
              </p>
              <p className="flex mb-5">
                <img
                  src="../images/check.svg"
                  alt="check"
                  className="w-4 h-4 mr-3"
                />
                <span className="line-through">Listen podcast</span>
              </p>
              <p className="flex ">
                <img
                  src="../images/check.svg"
                  alt="check"
                  className="w-4 h-4 mr-3"
                />
                <span className="line-through">Publish podcast</span>
              </p>
            </div>
          </div>
          <button className="btn mt-6 text-md bg-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600">
            Get Started
          </button>
        </div>

        <div className="bg-[#1A2031] text-white p-6 rounded-xl border border-red-500 text-center  sm:w-[280px] md:w-[310px] lg:w-[360px] min-h-[390px]">
          <h3 className="text-xl text-secondary font-bold">Premium</h3>
          <p className="text-2xl font-semibold mt-2 text-white">
            $29.99/<span className="text-xs font">month</span>
          </p>
          <p className="mt-5 text-xs">
            This package buy a subscription to use the basic features, you can
            publish podcasts and access the paid podcasts
          </p>
          <hr className="border-spacing-1 border-white  mt-[2rem] mb-[2rem]" />
          <div className="text-xs">
            <p className="flex mb-5">
              <img
                src="../images/check.svg"
                alt="check"
                className="w-4 h-4 mr-3"
              />
              Listen Fululizo podcast
            </p>
            <p className="flex mb-5">
              <img
                src="../images/check.svg"
                alt="check"
                className="w-4 h-4 mr-3"
              />
              <span>Listen podcast</span>
            </p>
            <p className="flex mb-5">
              <img
                src="../images/check.svg"
                alt="check"
                className="w-4 h-4 mr-3"
              />
              <span>Publish podcast</span>
            </p>
          </div>

          <button className="btn mt-6 text-md bg-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
