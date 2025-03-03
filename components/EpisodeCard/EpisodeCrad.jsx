import { Play, Clock, Calendar } from 'lucide-react';

const EpisodeCard = ({ id, title, duration, date, description }) => {
  return (
    <div className="mb-7 md:w-[400px] lg:w-[500px] rounded-xl border border-secondary p-4 pb-2 xss:pb-4 transition-shadow hover:shadow-lg">
      <div className="xss:flex-col flex items-start justify-between">
        <div className="mr-5 xss:flex xss:justify-between xss:w-full">
          <img
            src="/images/episode-image.png"
            alt="Episode cover"
            className="size-[100px] rounded-lg object-contain"
          />
          <button
            className="sm:hidden flex size-8 mt-3 items-center justify-center rounded-full border border-white transition-colors hover:bg-red-600"
            aria-label="Play episode"
          >
            <Play className="size-4 text-white" />
          </button>
        </div>
        <div className="flex-1">
          <span className="text-xs text-secondary">Episode {id}</span>
          <h3 className="my-2 text-[15px] font-semibold text-white">{title}</h3>
          <p className="mb-4 text-xs text-white">{description}</p>
          <div className="flex items-center space-x-4 text-sm text-white">
            <div className="flex items-center space-x-1 text-xs">
              <Clock className="size-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-white">
              <Calendar className="size-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <button
          className="xss:hidden flex size-8 mt-3 items-center justify-center rounded-full border border-white transition-colors hover:bg-red-600"
          aria-label="Play episode"
        >
          <Play className="size-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
