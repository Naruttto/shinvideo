import Container from "@/components/Container";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="py-24">
          <h1 className="text-6xl font-black mb-4">
            Вы не понимаете, я и есть <br /> Даня Шинкоренко
          </h1>

          {/* <div className="flex gap-8">
            <div className="relative w-60 h-auto">
              <Image
                src="/images/danya.jpg"
                alt="Jamal"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h1 className="text-6xl font-black mb-4">
              Вы не понимаете, я и есть <br /> Даня Шинкоренко
            </h1>
          </div> */}
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cupiditate sunt in?
          </p>

          <Projects />

          <div className="mt-12 text-4xl font-bold mb-4">Еще секции...</div>
        </div>
      </Container>
    </main>
  );
}
