import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2">
        <div className="avatar flex justify-center items-center">
          <img src="/img/avatar.png" width={600} alt="avatar" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-6xl">Hello I am,<span className="typewriter text-[#7127BA]"> Priyanshu!</span></h1>
          <h1 className="text-4xl justify-center">A Full Stack Developer.</h1>
          <p className="text-xl">Currently open to new opportunities in web development.</p>
        <div className="technologys">
        </div>
        </div>
      </section>
    </>
  );
}
