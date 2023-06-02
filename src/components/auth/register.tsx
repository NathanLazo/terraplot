// Types
import type { FC } from "react";

// Components
import ConnectWallet from "../web3/connectWallet";

// Utils
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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
    name: z.string().min(1, { message: "First name is required" }),
    wallet: z.string(),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "Debe contener una mayúscula")
      .regex(new RegExp(".*[a-z].*"), "Debe contener una minúscula")
      .regex(new RegExp(".*\\d.*"), "Debe contener un numero")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "Debe contener un carácter especial"
      )
      .min(8, "Debe ser de al menos 8 caracteres"),
    password_confirmation: z.string(),
    TyC: z.boolean(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords don't match",
  });

// Types inferred from schema
type ValidationSchema = z.infer<typeof validationSchema>;

const Auth: FC = () => {
  // Utils
  const router = useRouter();
  const [publicKey, setPublicKey] = useState("");

  // API
  const createUser = api.useCustomAuth.signUp.useMutation();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    values: {
      wallet: publicKey,
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    if (!publicKey || publicKey === "") {
      toast.error("Please connect your wallet");
      return;
    }
    toast
      .promise(
        createUser.mutateAsync({
          name: data.name,
          wallet: data.wallet,
          password: data.password,
          TyC: data.TyC,
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        toast.error(error.shape.message as string);
      });
  };

  errors.name?.message && toast.error(errors.name?.message);
  errors.wallet?.message && toast.error(errors.wallet?.message);
  errors.password?.message && toast.error(errors.password?.message);
  errors.password_confirmation?.message &&
    toast.error(errors.password_confirmation?.message);

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
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("name")}
                        id="name"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="wallet"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Wallet
                    </label>
                    <div className="mt-2">
                      <ConnectWallet
                        publicKey={publicKey}
                        setPublicKey={setPublicKey}
                      />
                    </div>
                  </div>
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
                        required
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
                        id="password_confirmation"
                        {...register("password_confirmation")}
                        type="password"
                        required
                        autoComplete="password_confirmation"
                        className="block w-full rounded-md border-0 bg-zinc-800 bg-opacity-30 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=" flex w-full justify-between sm:col-span-6">
                    <div className="justify-left flex w-full items-center space-x-2">
                      <input
                        id="TyC"
                        {...register("TyC")}
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-0"
                      />
                      <label htmlFor="TyC" className=" text-xs text-gray-200">
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
