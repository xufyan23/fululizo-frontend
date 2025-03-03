
// import BannerImg from '../../../images/banner.png';
const Banner = () => {
  return (
    <section className="flex items-center justify-between bg-gradient-to-br from-[#Fc6076] to-[#ff894d] xss:px-4 px-11 xss:py-[4rem] sm:py-[4rem]md:py-0 lg-py-0">
      <div className="flex max-w-4xl flex-col">
        <h1 className="heading-font xss:text-[2rem] sm:text-3xl lg:text-5xl font-bold sm:leading-[3.3rem] lg:leading-[4rem] text-white">
          Fast and <span className="text-secondary">easy to use </span>online
          and mobile phone library of content accessible to end-users with and{" "}
          <span className="text-secondary">without internet</span>
        </h1>
        <button className="xss:m-[2.5rem_auto_0_auto] btn sm:mt-9 self-start rounded-full border-0 bg-dark px-12 py-3 text-white">
          Get Started
        </button>
      </div>
      <div className="xss:hidden xs:hidden sm:hidden md:block md:max-w-[450px] justify-self-end">
        <img
          src="../images/banner.png"
          alt="Banner"
          className=" size-full object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
