import { StarIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";

const product = {
  name: "Plot 1",
  price: "$3500",
  rating: 4.0,
  reviewCount: 512,
  href: "#",
  images: [
    {
      id: 1,
      imageSrc:
        "https://www.researchgate.net/profile/Ignacio-Lorite/publication/39746088/figure/fig2/AS:394227977605124@1471002682630/Figura-2-Mapa-de-cultivo-mas-frecuente-en-cada-parcela-de-la-zona-estudiada-dentro-de-la.png",
      imageAlt: "Just a plot",
      primary: true,
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const { data: session } = useSession();

  const { id } = router.query;

  return (
    <div className="pb-16 pt-6 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div className="flex items-center">
              <a className="mr-4 text-sm font-medium text-gray-50">Plot</a>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <a className="mr-4 text-sm font-medium text-gray-50">{id}</a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-50">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-gray-50">
                {product.price}
              </p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-300">
                  {product.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    See all {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-2 lg:row-span-2"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-50">Description</h2>

              <div className="prose prose-sm mt-4 text-gray-400" />
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, illo facilis? Cumque eum facere magnam cum unde, esse
                commodi repudiandae sint dolores, expedita explicabo nobis
                deserunt facilis eius? Maxime, nesciunt?
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-50">Owner Data</h2>

              <div className="prose prose-sm mt-4 text-gray-400">
                <ul role="list">
                  <li>{session?.user.name as string}</li>
                  <li>{session?.user.wallet as string}</li>
                </ul>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
