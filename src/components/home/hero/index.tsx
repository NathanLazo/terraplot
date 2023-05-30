import Background from "./background";
import Content from "./content";
import Image from "next/image";
import HeroImage from "@images/hero/trace.svg";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-900">
      <Background />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <Content />
        <>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src={HeroImage as string}
                alt="Hero Image"
                width={800}
                height={800}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
