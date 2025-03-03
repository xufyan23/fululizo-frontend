
// import RadioImg from '../../../images/agent.jpg';

const Radio = () => {
  return (
    <div className="xss:p-[1rem] p-[3rem]">
      <div className="container xss:flex-col-reverse xss:gap-9 sm:gap-9 mx-auto flex justify-between items-center">
        <div className="bg-[#1A2031] min-h-[250px] text-white p-5 rounded-xl border border-red-500 max-w-sm">
          <h2 className="text-xl font-bold text-center mb-3">
            Radio on demand
          </h2>
          <p className="text-md">
            <span className="text-red-400 font-semibold">
              storing content in audio
            </span>{" "}
            format available for access in any part of Kenya, at any time
          </p>
        </div>
        <img
          src="../images/agent.jpg"
          alt="Radio on demand"
          className="xss:w-full xss:h-full sm:w-[355px] sm:h-[395px] lg:h-[500px] xs:h-full xs:w-full  object-cover img-custom-border overflow-hidden xs:rounded-lg xss:rounded-lg"
        />
      </div>
    </div>
  );
};

export default Radio;
