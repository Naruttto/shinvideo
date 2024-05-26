"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="text-xl font-bold mb-10 inline-block border-b-2 border-b-white hover:border-b-black outline-none"
    >
      {"<"} Назад
    </button>
  );
};

export default BackButton;
