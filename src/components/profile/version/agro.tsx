import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Avatar from "boring-avatars";
import { useSession } from "next-auth/react";
import Cards from "../items/agroCards";

export default function Example() {
  const { data: session } = useSession();

  return (
    <div>
      <div>
        <div className="h-32 w-full bg-white object-cover lg:h-48"></div>
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Avatar
              size={125}
              name={session?.user.name as string}
              variant="beam"
              colors={["#2C3639", "#A2A378", "#E5F9DB", "#83764F", "#A0D8B3"]}
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-50">
                {session?.user.name as string}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Head */}
      <div className="flex-center mt-10 flex min-w-0 flex-1 justify-center">
        <h2 className="text-2xl font-bold leading-7 text-gray-50 sm:truncate sm:text-3xl sm:tracking-tight">
          Plot Status
        </h2>
      </div>
      {/* End of head */}
      <div className="pt-20">
        <Cards />
      </div>
    </div>
  );
}
