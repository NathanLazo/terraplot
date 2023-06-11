import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import TraceabilityImage from "@images/traceability/trace.svg";
import Image from "next/image";

const features = [
  {
    name: "Propiedad fraccionada:",
    description:
      "varias personas pueden poseer una parte de una parcela, lo que reduce la barrera de entrada para invertir en bienes raíces y permite una mayor liquidez en el mercado.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Transparencia y trazabilidad:",
    description:
      "Esto garantiza que todas las transferencias de propiedad y transacciones financieras reduciendo la posibilidad de fraude",
    icon: LockClosedIcon,
  },
  {
    name: "Acceso global gracias a Solana:",
    description:
      "lo que garantiza una mayor escalabilidad y permite un acceso global a la tokenización de parcelas.",
    icon: ArrowPathIcon,
  },
  {
    name: "Eficiencia en la transferencia de propiedad:", 
    description:
      "Las transacciones se realizan de forma más rápida y sin intermediarios costosos, ahorra tiempo y reduce los costos asociados con la compraventa de bienes raíces.",
    icon: FingerPrintIcon,
  },
  {
    name: "Acceso a inversores minoristas:",
    description:
    "La tokenización permite a inversores minoristas puedan acceder a oportunidades de inversión que anteriormente estaban reservadas para grandes inversores institucionales.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Valor agregado",
    description:
      " Tus parcelas tendrán más valor al ser tokenizadas.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="relative isolate py-24 sm:py-32">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <p className="mb-6 mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo lo que necesitas 
          </p>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
             A tu alcance
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"></p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bienvenido a la nueva forma de hacer crecer tu patrimonio. Con Terraplot, tienes las facilidades para hacer crecer tus bienes de forma segura y confiable. &nbsp;
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
          <Image
            src={TraceabilityImage as string}
            alt="Traceability Image"
            width={800}
            height={800}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-zinc-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
