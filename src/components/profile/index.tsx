import { useSession } from "next-auth/react";
import Agro from "./version/agro";
import Invest from "./version/invest";

export default function Example() {
  const { data: session } = useSession();

  return (
    <>
      <Invest />
      {/* 
      {session?.data === 'agro' ? (
        <Agro />
      ) : session?.data === 'invest' ? (
        <Invest />
      ) : (
        <p>No se encontró una sesión válida</p>
      )}
     */}
      <Agro />
    </>
  );
}
