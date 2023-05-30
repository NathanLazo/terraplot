// Types
import type { FC } from "react";

// Components

// Utils
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";

// API
import { api } from "~/utils/api";

// Images
import Image from "next/image";
import RegisterImage from "@public/images/auth/auth-register.svg";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

// Form
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Validation Schema (From Zod) for React Hook Form
const validationSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

// Types inferred from schema
type ValidationSchema = z.infer<typeof validationSchema>;

const Auth: FC = () => {
  // Utils
  const router = useRouter();
  // API
  const createUser = api.useCustomAuth.signUp.useMutation();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    toast
      .promise(
        createUser.mutateAsync({
          email: data.email,
          password: data.password,
          name: `${data.firstName} ${data.lastName}`,
          TyC: data.terms,
        }),
        {
          loading: "Creating account...",
          success: "Account created successfully",
          error: "Error creating account",
        }
      )
      .then(async () => {
        await router.push("/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(errors);

  return (
    <>
      <div className="relative isolate mx-auto flex h-[90vh] w-full max-w-7xl justify-center">
        <div className="flex flex-1 flex-col items-center justify-center  px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto my-8 w-full rounded-md bg-zinc-900 bg-opacity-40 px-8 shadow-2xl lg:w-96">
            <div className="mt-4">
              <ShieldCheckIcon className="-mb-2 -ml-1 h-8 w-auto text-gray-100" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-100">
                Sign in or create an account
              </h2>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="relative mt-6">
                  <div className="relative flex justify-center text-base">
                    <span className="inline-block  px-2 font-light text-gray-200">
                      If you already have an account you can{" "}
                      <Link
                        href="/auth/login"
                        className="font-extrabold text-white transition-all hover:underline"
                      >
                        sign in here
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Primer nombre
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("firstName")}
                        id="firstName"
                        autoComplete="given-firstName"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Apellidos
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("lastName")}
                        id="lastName"
                        autoComplete="family-firstName"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Correo
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 bg-zinc-800  bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Edad
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("age")}
                        id="age"
                        autoComplete="age"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      País
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        {...register("country")}
                        autoComplete="country-firstName"
                        className="block w-full rounded-md border-0  bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {["Mexico", "United States", "Canada"].map(
                          (country, index) => (
                            <option key={index} className="bg-zinc-900 ">
                              {country}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div> */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Contraseña
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        {...register("password")}
                        type="password"
                        autoComplete="password"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Confirmar contraseña
                    </label>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        {...register("confirmPassword")}
                        type="password"
                        autoComplete="confirmPassword"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" flex w-full justify-between sm:col-span-6">
                    <div className="justify-left flex w-full items-center space-x-2">
                      <input
                        id="terms"
                        {...register("terms")}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-0"
                      />
                      <label htmlFor="terms" className=" text-xs text-gray-200">
                        Términos y condiciones
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center rounded-md border px-2 py-1 text-sm text-white transition-colors  hover:text-indigo-600 "
                    >
                      <span>submit</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="relative hidden  items-center justify-center lg:flex">
          <Image
            className=" object-cover"
            src={RegisterImage as string}
            loading="lazy"
            draggable={false}
            alt="Your password manager"
            width={300}
            height={300}
          />
        </div>
        {/* Background */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5A8171] to-[#5A8171] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#111111] to-[#5A8171] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
