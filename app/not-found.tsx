import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-[400px] md:h-[700px] flex justify-center items-center">
      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl font-black text-primary mb-2">
          404
        </div>

        <div className="text-xl sm:text-3xl mb-6">
          Страница не найдена {":["}
        </div>

        <Link href="/" className="px-6 py-4 bg-primary inline-block rounded-md">
          На главную
        </Link>
      </div>
    </div>
  );
}
