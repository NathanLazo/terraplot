import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  {
    id: 1,
    name: "Terreno 1",
    href: "/marketplace/plot/34563",
    imageSrc:
      "https://www.propertyreporter.co.uk/images/660x350/plot_650-14007.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Chihuahua",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="relative isolate">
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
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-14">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-50">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-200">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-300">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
