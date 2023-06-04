import { useEffect, type FC } from "react";

// Components
import Background from "./background";

const Carousel: FC = ({}) => {
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (nextButton && prevButton && slidesContainer) {
      nextButton.addEventListener("click", () => {
        slidesContainer.scrollLeft += slideWidth * 2;
      });

      prevButton.addEventListener("click", () => {
        slidesContainer.scrollLeft -= slideWidth * 2;
      });
    }
  });

  return (
    <>
      <div className="relative isolate z-[100] ">
        <div className="z-[100]  mx-auto max-w-full px-4 py-12 transition-all duration-500 ease-linear md:px-8">
          <div className="relative">
            <div className="slides-container flex h-72 snap-x snap-mandatory space-x-2 overflow-hidden overflow-x-auto scroll-smooth rounded before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
              <div className="slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded">
                <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 transition-opacity hover:opacity-80 sm:pt-48 ">
                  <img
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600"
                    alt="mountain_image"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time className="mr-8">1 day ago</time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">Nathan Lazo</div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a>
                      <span className="absolute inset-0" />
                      Terrain1
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 top-0  hidden h-full items-center md:flex">
              <button
                role="button"
                className="prev group rounded-full  bg-neutral-100 px-2 py-2 text-neutral-900"
                aria-label="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute -right-4 top-0  hidden h-full items-center md:flex">
              <button
                role="button"
                className="next group rounded-full  bg-neutral-100 px-2 py-2 text-neutral-900"
                aria-label="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-all duration-200 ease-linear group-active:translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Background />
      </div>
    </>
  );
};
export default Carousel;
