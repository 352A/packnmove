import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo-t.png"
      alt="logo"
      width={65}
      height={65}
      className="rounded-md px-2 transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-95"
    />
  );
}
