import Banner from "../views/LandingPage/Banner";
import Radio from "../views/LandingPage/Radio";
import Features from "../views/LandingPage/Features";
import Episodes from "../views/LandingPage/Episodes";
import Pricing from "../views/LandingPage/Pricing";
import Services from "../views/LandingPage/Services";
import LearnAndGrow from "../views/LandingPage/LearnGrow";
import Testimonial from "../views/LandingPage/testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Radio />
      <Features />
      <Episodes />
      <Pricing />
      <Services />
      <Testimonial />
      <LearnAndGrow />
    </>
  );
};

export default Home;
