const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

export default function AnalyticsComponent() {
  return (
    <div className="relative isolate h-screen py-24 sm:py-32 ">
      <svg
        viewBox="0 0 801 1036"
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 w-[50.0625rem] transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <path
          fill="url(#bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0)"
          fillOpacity=".3"
          d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.653 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
        />
        <defs>
          <linearGradient
            id="bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0"
            x1="508.179"
            x2="-28.677"
            y1="-116.221"
            y2="1091.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6D9886" />
            <stop offset={1} stopColor="#6D9886" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <svg
          viewBox="0 0 1266 975"
          aria-hidden="true"
          className="absolute -bottom-8 -left-96 -z-10 w-[79.125rem] transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
        >
          <path
            fill="url(#05f95398-6ec0-404d-8f7d-a69a4504684d)"
            fillOpacity=".2"
            d="M347.52 746.149 223.324 974.786 0 630.219l347.52 115.93 223.675-411.77c1.431 190.266 49.389 498.404 229.766 208.829C1026.43 181.239 966.307-135.484 1129.51 59.422c130.55 155.925 143.15 424.618 133.13 539.473L936.67 429.884l23.195 520.539L347.52 746.149Z"
          />
          <defs>
            <linearGradient
              id="05f95398-6ec0-404d-8f7d-a69a4504684d"
              x1="1265.86"
              x2="-162.888"
              y1=".254"
              y2="418.947"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5A8171" />
              <stop offset={1} stopColor="#5A8171" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-indigo-600">
            Our track record
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Want to optimize your business? &nbsp;We can help.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <dt className="text-sm leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
