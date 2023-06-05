import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";


const features = [
  {
    name: "Inversion Privada",
    description:
      "A través de un marketplace, se describe y atrae a inversores para la inversión en el campo seleccionado por el inversor. ",
    href: "#",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Crecimiento del sector agrario",
    description:
      "La incorporación de blockchain y la inversión privada impulsa el crecimiento del sector agrario al mejorar la trazabilidad, eficiencia y transparencia de las operaciones.",
    href: "#",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Amplios beneficios mutuos",
    description:
      "Blockchain e inversión privada beneficios economicos para todos.",
    href: "#",
    icon: RocketLaunchIcon,
  },
];

export default function Example() {
  return (
    <div className=" relative isolate py-24 sm:py-32 ">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#5A8171] to-[#5A8171]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo lo que el campo necesita.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Beneficios para el agricultor, inversion privada y segura, 
            con obtencion de beneficios mutuos, agricultor e inversor.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      <span aria-hidden="true"></span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
