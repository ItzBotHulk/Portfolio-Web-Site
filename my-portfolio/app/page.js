import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 mt-28 ">
        <div className="avatar flex justify-center items-center">
          <img src="/img/avatar.png" width={600} alt="avatar" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-6xl text-white">Hello I am,
            <div className="typewriter text-[#7127BA]"> Priyanshu!</div></h1>
          <h1 className="text-4xl justify-center text-white">A Full Stack Developer.</h1>
          <p className="text-xl text-white">Currently open to new opportunities in web development.</p>
          <div className="technologys flex flex-row flex-wrap w-[30vw] gap-4 justify-center items-center m-8">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="img/html.png" alt="html" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="img/css.jpg" alt="css" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="img/javascript.png" alt="js" width={70} /></Link>
            <Link href="https://react.dev/"><img src="img/react.png" alt="react" width={70} /></Link>
            <Link href="https://nextjs.org/"><img src="img/nextjs.png" alt="next" width={70} /></Link>
            <Link href="https://nodejs.org/en"><img src="img/node.png" alt="node" width={70} /></Link>
            <Link href="https://expressjs.com/"><img src="img/express.png" alt="express" width={70} /></Link>
            <Link href="https://tailwindcss.com/"><img src="img/tailwind.jpg" alt="tailwind" width={70} /></Link>
            <Link href="https://www.python.org/"><img src="img/python.png" alt="python" width={70} /></Link>
            <Link href="https://www.djangoproject.com/"><img src="img/django.png" alt="django" width={70} /></Link>
            <Link href="https://www.postman.com/"><img src="img/postman.png" alt="postman" width={70} /></Link>
            <Link href="https://www.mongodb.com/"><img src="img/mongodb.png" alt="mongodb" width={70} /></Link>
            <Link href="https://mongoosejs.com/"><img src="img/mongoose.png" alt="mongoose" width={70} /></Link>
            <Link href="https://git-scm.com/"><img src="img/git.png" alt="git" width={70} /></Link>
            <Link href="https://github.com/"><img src="img/github.png" alt="github" width={70} /></Link>
          </div>
        </div>
      </section>
        <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-9"></div>
      <main className="">
        <div className="experience ">
          <h2 className="text-4xl">Work Experience</h2>
          <div className="card">
            abasdf  
          </div>
        </div>
      </main>
    </>
  );
}
