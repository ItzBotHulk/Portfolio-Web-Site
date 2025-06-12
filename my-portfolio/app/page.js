import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="  grid grid-cols-2 mt-[23vh] w-screen overflow-hidden">
        <div className="avatar flex justify-center items-center">
          <img src="/img/avatar.png" width={600} alt="avatar" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-6xl text-white">Hello I am,
            <div className="typewriter text-[#7127BA]"> Priyanshu!</div></h1>
          <h1 className="text-4xl justify-center text-white">A Full Stack Developer.</h1>
          <p className="text-xl text-white">Currently open to new opportunities in web development.</p>
          <div className="technologys flex flex-row flex-wrap w-[30vw] gap-2 justify-center items-center m-6">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="img/html.png" alt="html" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="img/css.jpg" alt="css" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="img/javascript.png" alt="js" width={70} /></Link>
            <Link href="https://react.dev/" target="_blank"><img src="img/react.png" alt="react" width={70} /></Link>
            <Link href="https://nextjs.org/" target="_blank"><img src="img/nextjs.png" alt="next" width={70} /></Link>
            <Link href="https://nodejs.org/en" target="_blank"><img src="img/node.png" alt="node" width={70} /></Link>
            <Link href="https://expressjs.com/" target="_blank"><img src="img/express.png" alt="express" width={70} /></Link>
            <Link href="https://tailwindcss.com/" target="_blank"><img src="img/tailwind.jpg" alt="tailwind" width={70} /></Link>
            <Link href="https://www.python.org/" target="_blank"><img src="img/python.png" alt="python" width={70} /></Link>
            <Link href="https://www.djangoproject.com/" target="_blank"><img src="img/django.png" alt="django" width={70} /></Link>
            <Link href="https://www.postman.com/" target="_blank"><img src="img/postman.png" alt="postman" width={70} /></Link>
            <Link href="https://www.mongodb.com/" target="_blank"><img src="img/mongodb.png" alt="mongodb" width={70} /></Link>
            <Link href="https://mongoosejs.com/" target="_blank"><img src="img/mongoose.png" alt="mongoose" width={70} /></Link>
            <Link href="https://git-scm.com/" target="_blank"><img src="img/git.png" alt="git" width={70} /></Link>
            <Link href="https://github.com/" target="_blank"><img src="img/github.png" alt="github" width={70} /></Link>
          </div>
        </div>
      </section>
      <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-9"></div>
      <main className="text-white">
        <div className="experience ml-[13vw] ">
          <h2 className="text-4xl font-extrabold">Work Experience</h2>
          <div className="card ml-30 flex flex-col justify-center ">
            <div className="certificat flex my-10  items-center rounded-xl bg-[#190634] w-[60vw] h-[20vh] textglow ">
              <div className="logo ">
                <Link href='https://hashtrust.in/' target="_blank">
                  <img src="/img/logo.png" className=" hover:invert-50 rounded-md  ml-8" alt="logo" width={250} />
                </Link>
              </div>
              <div className="flex flex-col pl-40 gap-2">
                <h2 className="text-2xl font-bold">Software Intern</h2>
                <Link href='https://hashtrust.in/' target="_blank">
                  <p className="text-xl hover:underline underline-offset-auto">HashTrust Technologies Pvt. Ltd</p>
                </Link>
                <p>Jun 2024 - Aug 2024</p>
              </div>
              <div className="invert-100 pl-40">
                <Link href='/certificate/Internship Certificate - Priyanshu.pdf' target="_blank">
                  <svg className=" textglow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8 8H15M8 13H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19.6092 18.1054C20.4521 17.4918 21 16.4974 21 15.375C21 13.511 19.489 12 17.625 12H17.375C15.511 12 14 13.511 14 15.375C14 16.4974 14.5479 17.4918 15.3908 18.1054M19.6092 18.1054C19.0523 18.5108 18.3666 18.75 17.625 18.75H17.375C16.6334 18.75 15.9477 18.5108 15.3908 18.1054M19.6092 18.1054L20.192 19.9404C20.4143 20.6403 20.5255 20.9903 20.4951 21.2082C20.4318 21.6617 20.0619 21.9984 19.6252 22C19.4154 22.0008 19.101 21.8358 18.4723 21.5059C18.2027 21.3644 18.0679 21.2936 17.93 21.252C17.649 21.1673 17.351 21.1673 17.07 21.252C16.9321 21.2936 16.7973 21.3644 16.5277 21.5059C15.899 21.8358 15.5846 22.0008 15.3748 22C14.9381 21.9984 14.5682 21.6617 14.5049 21.2082C14.4745 20.9903 14.5857 20.6403 14.808 19.9404L15.3908 18.1054" stroke="#000000" stroke-width="1.5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slider glow mt-20 opacity-85">
          <div className=" slideTrack flex items-center justify-center">
            <div className="slide"><img src="/img/html.png"  alt="html" width={70}/></div>
            <div className="slide"><img src="/img/css.jpg"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/javaScript.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/react.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/nextjs.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/node.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/express.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/tailwind.jpg"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/python.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/django.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/postman.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/mongodb.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/mongoose.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/git.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/github.png"  alt="img" width={70}/></div>
            {/* duplicate for loop */}
           <div className="slide"><img src="/img/html.png"  alt="html" width={70}/></div>
            <div className="slide"><img src="/img/css.jpg"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/javaScript.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/react.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/nextjs.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/node.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/express.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/tailwind.jpg"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/python.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/django.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/postman.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/mongodb.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/mongoose.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/git.png"  alt="img" width={70}/></div>
            <div className="slide"><img src="/img/github.png"  alt="img" width={70}/></div>
          </div>
        </div>
        <div className="projects">
          Projects
        </div>
      </main>
    </>
  );
}
