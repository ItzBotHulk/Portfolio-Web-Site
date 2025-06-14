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
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="img/html.svg" alt="html" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="img/css.svg" alt="css" width={70} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="img/javascript.svg" alt="js" width={70} /></Link>
            <Link href="https://react.dev/" target="_blank"><img src="img/react.svg" alt="react" width={70} /></Link>
            <Link href="https://nextjs.org/" target="_blank"><img className="invert-100" src="img/nextjs.svg" alt="next" width={70} /></Link>
            <Link href="https://nodejs.org/en" target="_blank"><img src="img/nodejs.svg" alt="node" width={70} /></Link>
            <Link href="https://expressjs.com/" target="_blank"><img src="img/express.svg" alt="express" width={70} /></Link>
            <Link href="https://tailwindcss.com/" target="_blank"><img src="img/tailwind.svg" alt="tailwind" width={70} /></Link>
            <Link href="https://www.python.org/" target="_blank"><img src="img/python.svg" alt="python" width={70} /></Link>
            <Link href="https://www.djangoproject.com/" target="_blank"><img src="img/django.svg" alt="django" width={70} /></Link>
            <Link href="https://www.postman.com/" target="_blank"><img src="img/postman.svg" alt="postman" width={70} /></Link>
            <Link href="https://www.mongodb.com/" target="_blank"><img src="img/mongodb.svg" alt="mongodb" width={70} /></Link>
            <Link href="https://mongoosejs.com/" target="_blank"><img src="img/mongoose.svg" alt="mongoose" width={70} /></Link>
            <Link href="https://git-scm.com/" target="_blank"><img src="img/git.svg" alt="git" width={70} /></Link>
            <Link href="https://github.com/" target="_blank"><img src="img/github.svg" alt="github" width={70} /></Link>
          </div>
        </div>
      </section>

      <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-9"></div>

      <main className="text-white">
        <div className="experience ml-[13vw] ">
          <h2 className="text-4xl font-extrabold">Experience</h2>
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

        <div className="slider glow mt-20 opacity-85 ">
          <div className=" slideTrack flex items-center justify-center">
            <div className="slide"><img src="/img/html.svg" alt="html" width={70} /></div>
            <div className="slide"><img src="/img/css.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/javaScript.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/react.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/nextjs.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/nodejs.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/express.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/tailwind.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/python.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/django.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/postman.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/mongodb.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/mongoose.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/git.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/github.svg" alt="img" width={70} /></div>
            {/* duplicate for loop */}
            <div className="slide"><img src="/img/html.svg" alt="html" width={70} /></div>
            <div className="slide"><img src="/img/css.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/javaScript.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/react.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/nextjs.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/nodejs.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/express.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/tailwind.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/python.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/django.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/postman.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/mongodb.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/mongoose.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/git.svg" alt="img" width={70} /></div>
            <div className="slide"><img src="/img/github.svg" alt="img" width={70} /></div>
          </div>
        </div>


        <div className="ml-[13vw] mt-20">
          <h2 className="text-4xl font-extrabold">Projects</h2>
        </div>
        {/* project cards */}
        <div className="max-w-[100vw] min-h-screen mt-20">
          {/* right img */}
          <div className="flex flex-row mt-10 ">
            {/* textbox */}
            <div className="w-1/2  relative left-10 justify-end items-center flex">
              <div className=" flex flex-col h-52 w-[37vw] bg-white/20 backdrop-blur-md rounded-lg z-10 p-10">
                <p className="text-left align-middle text-wrap ">
                  iTask Manager is a simple and efficient to-do website. All the tasks are securely stored in your browser's local storage, so there's no need for sign-ups or internet connection.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10">
                  <Link href='https://itzbothulk.github.io/e-Todo-site/' target="_blank"><img src="/bgs/click.png" width={20} alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/e-Todo-site/tree/main' target="_blank"><img className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 justify-start items-center flex ">

              <div className="h-[38.2vh] w-[35vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <img src="/project/itask.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>
          {/* opposite */}
          <div className="flex flex-row mt-10">
            {/* image  */}
            <div className="w-1/2 justify-end items-center flex">
              <div className=" h-[38.2vh] w-[35vw] bg-yellow-600 rounded-xl hover:rounded-none z-0 hover:z-20 sl">
                <img src="/project/getmeachai.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
            {/* textbox */}
            <div className="w-1/2  relative right-10 justify-start items-center flex ">
              <div className=" flex flex-col h-52 w-[37vw] bg-white/20 backdrop-blur-md rounded-lg z-10 p-10 pl-14">
                <p className="text-left align-middle text-wrap ">
                  Get Me a Chai is a heartfelt charity website for online communities, where supporters can donate to their favorite creators with a simple gesture - buying them a chai.
                </p>
                <div className="imgs flex flex-row justify-end gap-5 pt-10">
                  <Link href='/' target="_blank"><img src="/bgs/click.png" width={20} alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/GetMeChai' target="_blank"><img className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>

          {/* right img */}
          <div className="flex flex-row mt-10 ">
            {/* textbox */}
            <div className="w-1/2  relative left-10 justify-end items-center flex">
              <div className=" flex flex-col h-52 w-[37vw] bg-white/20 backdrop-blur-md rounded-lg z-10 p-10">
                <p className="text-left align-middle text-wrap ">
                  LinkTree is a simple, customizable link-in-bio tool that lets you share all your important links through one smart URL. Perfect for social media, it’s your central hub for everything online, inspired by Linktree.
                </p>
                <div className="imgs flex flex-row gap-5 pt-7">
                  <Link href='/' target="_blank"><img src="/bgs/click.png" width={20} alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/LinkTree-Clone' target="_blank"><img className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 justify-start items-center flex ">

              <div className="h-[38.2vh] w-[35vw] bg-green-900 rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <img src="/project/linktree.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>
          {/* opposite */}
          <div className="flex flex-row mt-10">
            {/* image  */}
            <div className="w-1/2 justify-end items-center flex">
              <div className=" h-[38.2vh] w-[35vw] bg-[#f3e8ff] rounded-xl hover:rounded-none z-0 hover:z-20 sl">
                <img src="/project/bitlinks.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
            {/* textbox */}
            <div className="w-1/2  relative right-10 justify-start items-center flex ">
              <div className=" flex flex-col h-52 w-[37vw] bg-white/20 backdrop-blur-md rounded-lg z-10 p-10 pl-14">
                <p className="text-left align-middle text-wrap ">
                  BitLinks is a simple URL shortener that lets you create short, shareable links and saves them for future use. Perfect for easy access and clean sharing.
                </p>
                <div className="imgs flex flex-row justify-end gap-5 pt-10">
                  <Link href='/' target="_blank"><img src="/bgs/click.png" width={20} alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/URL-Shortner' target="_blank"><img className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
          {/* right img */}
          <div className="flex flex-row mt-10 ">
            {/* textbox */}
            <div className="w-1/2  relative left-10 justify-end items-center flex">
              <div className=" flex flex-col h-52 w-[37vw] bg-white/20 backdrop-blur-md rounded-lg z-10 p-10">
                <p className="text-left align-middle text-wrap ">
                  PassSecure is a lightweight password saver that securely stores your passwords in your browser's local storage. It can always accessible directly from Chrome.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10">
                  <Link href='/' target="_blank"><img src="/bgs/click.png" width={20} alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/PassSecure' target="_blank"><img className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 justify-start items-center flex ">
              <div className="h-[38.2vh] w-[35vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <img src="/project/passecure.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-20"></div>

        {/* Skills  */}
        <div className="ml-[13vw] mt-20 flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-extrabold">My Skills</h2>
            <p>Technologies and tools I've worked with throughout my projects and experience</p>
          </div>
          <div>
            <h3 className="text-3xl my-7">Front End</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/html.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">HTML</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/css.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">CSS</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/javascript.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">JavaScript</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/react.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">React.js</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/nextjs.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Next.js</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/bootstrap.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Bootstrap</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/tailwind.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Back End</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/express.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Express.js</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/nodejs.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Node.js</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/python.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Python</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/django.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Django</span>
              </div>

            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Databases</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/mongodb.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">MongoDb</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/mongoose.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Mongoose</span>
              </div>

            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/git.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Git</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/github.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">GitHub</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/postman.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Postman</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/vscode.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Vs Code</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/figma.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Figma</span>
              </div>
              <div className="flex flex-col ">
                <div className="h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <img className="w-10" src="/img/vercel.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle bg-amber-700">Vercel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-20"></div>


        {/* About me  */}

        <div className="ml-[13vw] ">
        <h2 className=" text-4xl font-extrabold">Education</h2>
          <div className="card ml-30 flex flex-col justify-center ">
            <div className="certificat flex my-10  items-center rounded-xl bg-[#190634] w-[60vw] h-[20vh] textglow ">
              <div className="logo">
                <Link href='https://sangamuniversity.ac.in/' target="_blank">
                  <img src="/img/sangam.png" className=" rounded-md  ml-16" alt="logo" width={80} />
                </Link>
              </div>
              <div className="flex flex-col pl-40 gap-2">
                <Link href='https://hashtrust.in/' target="_blank">
                  <h2 className="text-2xl font-bold">Sangam University</h2>
                </Link>
                <p>Diploma in Computer Science & Engineering</p>
                <p>Aug 2022 - Aug 2025</p>
              </div>
            </div>
          </div>
        </div>






      </main>
    </>
  );
}
