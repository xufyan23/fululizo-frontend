// src/components/Episodes.jsx
import { episodes } from "../../../data/constants";
import EpisodeCard from "../../../components/EpisodeCard/EpisodeCrad";
import PodcastImage from "../../../public/images/episode-image.png";

const Episodes = () => {
  return (
    <section className="sm:p-10 xss:py-[4rem] xss:p-5 py-20 xss:pb-[6rem] bg-[#182527]">
      <div className="grid md:grid-cols-[1fr_0.9fr] lg:grid-cols-[1fr_0.8fr] xl:grid-cols-2  mx-auto max-w-5xl">
        <div className="mt-6 space-y-4">
          <h2 className="text-3xl font-semibold text-white pb-5 xss:text-center xss:pb-[3rem]">
            Recent Episodes
          </h2>
          {episodes.list.map((episode, index) => (
            <div key={index} className="">
              <EpisodeCard
                key={index}
                id={episode.id}
                title={episode.title}
                duration={episode.duration}
                date={episode.date}
                description={episode.description}
              />
            </div>
          ))}
          <div className="text-center pt-[1rem]">
            <button className="btn bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Show More
            </button>
          </div>
        </div>
        <div className="pt-[5rem] pl-[2rem] xss:pl-0 xss:text-center">
          <h2 className="text-3xl font-semibold text-white pb-[1.5rem] mt-3 xss:mb-5">
            Podcast List
          </h2>
          <a href="#" className="xss:flex xss:justify-center">
            <img
              src="/images/episode-image.png"
              alt="Podcast"
              className="w-[170px] h-[170px] object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
