import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-7xl mx-auto px-4 mt-12 md:px-0">
        <h1 className="text-6xl font-bold mb-4">Я ДАНЯ ШИНКОРЕНКО</h1>
        <p className="text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          cupiditate sunt in?
        </p>

        <Projects />
      </div>
    </main>
  );
}
