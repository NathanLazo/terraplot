import {
  LockClosedIcon,
  ServerIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon

} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative isolate py-24 sm:py-32 ">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#5A8171] to-[#5A8171] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Hacer crecer tus tierras
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            De forma segura.
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">
          Facilitar la oferta de parcelas agrícolas, por parte de los productores y 
          permitir a los inversores llegar acuerdos y realizar inversiones utilizando blockchain.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[20rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-300/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] sm:-top-[25rem] lg:-top-[15rem]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-300">
                <p>
                  “El usar TerraPlot me ayudó en el cierre de un trato dicho 
                  sea confiable y sin trucos con blockchain y Solana  .”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="mt-1 h-10 w-9 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-300">
                    Brenna Goyette
                  </div>
                  <div className="text-gray-600">@brenna</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-200 lg:col-span-7">
            <p>
            Los productores pueden listar sus parcelas disponibles 
            y especificar los términos y condiciones asociados.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-7 text-gray-100">
              <li className="flex gap-x-3">
                <ArrowTrendingUpIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-400">
                  Visualización de parcelas
                  </strong>{" "}
                  Los inversores pueden explorar y buscar parcelas disponibles en la
                   plataforma, accediendo a detalles como la ubicación, el tamaño y 
                   los productos agrícolas asociados.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-400">
                  Seguimiento y monitoreo de cultivos:.
                  </strong>{" "}
                  Implementar herramientas de monitoreo y seguimiento para permitir a los
                   inversores supervisar el progreso de los cultivos en tiempo real. y Proporcionar 
                   informes detallados sobre el rendimiento de las parcelas y compartir datos relevantes
                    con los inversores.
                </span>
              </li>
              <li className="flex gap-x-3">
                <GlobeAltIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-400">
                  Expansión internacional:
                  </strong>{" "}
                  Permitiendo la interacción de productores e inversores de diferentes 
                  países de una sencilla manera. Enfocado en los países con mayor potencial 
                  de crecimiento en el sector agrícola y una alta adopción de criptomonedas 
                  en el ámbito empresarial.
                </span>
              </li>
            </ul>
            <p className="mt-8">
            Gracias a la tecnología blockchain, se garantiza garantiza la transparencia en todas
             las transacciones realizadas. Cada movimiento se registra de forma 
             inmutable, lo que brinda seguridad y confianza a todo momento.
            </p>
            
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5A8171] to-[#5A8171] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
