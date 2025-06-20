import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:mt-[23vh] mt-20 w-full max-w-[100vw] overflow-x-hidden grid-cols-1">
        <div className="avatar flex justify-center items-center">
          <Image width={256} height={256} className="md:w-[600px] w-64" src="/img/avatar.png" alt="avatar" />
        </div>
        <div className="flex flex-col justify-center md:items-start gap-2 items-center ">
          <h1 className="md:text-6xl text-5xl text-white text-center">Hello I am, <div className="typewriter text-[#7127BA]"> Priyanshu!</div></h1>
          <h1 className="md:text-4xl text-3xl justify-center text-white text-center">A Full Stack Developer.</h1>
          <p className="md:text-xl text-lg text-white text-center">Currently open to new opportunities in web development.</p>
          <div className="technologys flex flex-row flex-wrap md:w-[30vw] gap-2 justify-center items-center m-6">
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><Image src="img/html.svg" alt="html" height={50} width={50} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><Image src="img/css.svg" alt="css" height={50} width={50} /></Link>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><Image src="img/javascript.svg" alt="js" height={50} width={50} /></Link>
            <Link href="https://react.dev/" target="_blank"><Image src="img/react.svg" alt="react" height={50} width={50} /></Link>
            <Link href="https://nextjs.org/" target="_blank"><Image className="invert-100" src="img/nextjs.svg" alt="next" height={50} width={50} /></Link>
            <Link href="https://nodejs.org/en" target="_blank"><Image src="img/nodejs.svg" alt="node" height={50} width={50} /></Link>
            <Link href="https://expressjs.com/" target="_blank"><Image className="invert-75" src="img/express.svg" alt="express" height={50} width={50} /></Link>
            <Link href="https://tailwindcss.com/" target="_blank"><Image src="img/tailwind.svg" alt="tailwind" height={50} width={50} /></Link>
            <Link href="https://www.python.org/" target="_blank"><Image src="img/python.svg" alt="python" height={50} width={50} /></Link>
            <Link href="https://www.djangoproject.com/" target="_blank"><Image src="img/django.svg" alt="django" height={50} width={50} /></Link>
            <Link href="https://www.postman.com/" target="_blank"><Image src="img/postman.svg" alt="postman" height={50} width={50} /></Link>
            <Link href="https://www.mongodb.com/" target="_blank"><Image src="img/mongoDB.svg" alt="mongodb" height={50} width={50} /></Link>
            <Link href="https://mongoosejs.com/" target="_blank"><Image src="img/mongoose.svg" alt="mongoose" height={50} width={50} /></Link>
            <Link href="https://git-scm.com/" target="_blank"><Image src="img/git.svg" alt="git" height={50} width={50} /></Link>
            <Link href="https://github.com/" target="_blank"><Image className="invert-75" src="img/github.svg" alt="github" height={50} width={50} /></Link>
          </div>
        </div>
      </section>

      <div className="flex justify-center max-w-[100vw]">
        <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-9"></div>
      </div>

      <main className="text-white ">
        <div className="md:ml-[13vw] ml-5 md:mt-20 mt-5 max-w-[100vw] flex flex-col gap-6 ">
          <div>
            <h2 className="text-4xl font-extrabold">Experience</h2>
          </div>
        </div>
        <div className=" lg:ml-[13vw] w-full max-w-[100vw] overflow-x-hidden">
          <div className="card justify-center flex lg:flex-col flex-row ">
            <div className="certificat lg:flex my-10  lg:justify-center lg:items-center rounded-xl bg-[#190634] lg:w-[70vw] max-w-[80vw] w-80  h-[55vh] lg:max-h-[30vh] textglow ">
              <div className="logo flex justify-center items-center">
                <Link href='https://hashtrust.in/' target="_blank">
                  <Image src="/img/logo.png" className=" hover:invert-50 rounded-xl my-10 " alt="logo" height={250} width={250} />
                </Link>
              </div>
              <div className="flex flex-col lg:ml-20 gap-2 2xl:gap-3 items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold ">Software Intern</h2>
                <Link href='https://hashtrust.in/' target="_blank">
                  <p className="text-xl hover:underline underline-offset-auto text-center">HashTrust Technologies Pvt. Ltd</p>
                </Link>
                <p className="text-sm lg:text-base opacity-70">Jun 2024 - Aug 2024</p>
              </div>
              <div className="invert-100 justify-evenly flex my-10 lg:pl-32">
                <Link href='/documnet/Internship Certificate - Priyanshu Prajapati (1).pdf' target="_blank">
                  <svg className=" textglow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8 8H15M8 13H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19.6092 18.1054C20.4521 17.4918 21 16.4974 21 15.375C21 13.511 19.489 12 17.625 12H17.375C15.511 12 14 13.511 14 15.375C14 16.4974 14.5479 17.4918 15.3908 18.1054M19.6092 18.1054C19.0523 18.5108 18.3666 18.75 17.625 18.75H17.375C16.6334 18.75 15.9477 18.5108 15.3908 18.1054M19.6092 18.1054L20.192 19.9404C20.4143 20.6403 20.5255 20.9903 20.4951 21.2082C20.4318 21.6617 20.0619 21.9984 19.6252 22C19.4154 22.0008 19.101 21.8358 18.4723 21.5059C18.2027 21.3644 18.0679 21.2936 17.93 21.252C17.649 21.1673 17.351 21.1673 17.07 21.252C16.9321 21.2936 16.7973 21.3644 16.5277 21.5059C15.899 21.8358 15.5846 22.0008 15.3748 22C14.9381 21.9984 14.5682 21.6617 14.5049 21.2082C14.4745 20.9903 14.5857 20.6403 14.808 19.9404L15.3908 18.1054" stroke="#000000" stroke-width="1.5"></path>
                  </svg>
                </Link>
                <Link href='https://hashtrust.in/' target="_blank">
                <Image className="invert-100 lg:ml-5 lg:mr-10" src="/bgs/click.png" height={20} width={20} alt="click" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="slider glow mt-20 opacity-85 w-full max-w-[100vw] overflow-x-hidden">
          <div className=" slideTrack flex items-center justify-center">
            <div className="slide"><Image src="/img/html.svg" alt="html" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/css.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/javaScript.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/react.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/nextjs.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/nodejs.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/express.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/tailwind.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/python.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/django.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/postman.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/mongodb.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/mongoose.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/git.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/github.svg" alt="img" height={50} width={50} /></div>
            {/* duplicate for loop */}
            <div className="slide"><Image src="/img/html.svg" alt="html" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/css.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/javaScript.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/react.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/nextjs.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/nodejs.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/express.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/tailwind.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/python.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/django.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/postman.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/mongodb.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/mongoose.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image src="/img/git.svg" alt="img" height={50} width={50} /></div>
            <div className="slide"><Image className="invert-100" src="/img/github.svg" alt="img" height={50} width={50} /></div>
          </div>
        </div>


        <div id="projects" className="ml-[13vw] mt-20 w-full max-w-[100vw] overflow-x-hidden">
          <h2 className="text-4xl font-extrabold">Projects</h2>
        </div>
        {/* project cards */}
        <div className="max-w-[100vw] min-h-screen mt-10">
          {/* right img */}
          <div className="flex items-center lg:flex-row flex-col-reverse mt-10 ">
            {/* textbox */}
            <div className="w-1/2 w-[80vw]  relative bottom-5 lg:top-0 lg:left-10 lg:justify-end justify-center items-center flex">
              <div className=" flex flex-col lg:h-44 lg:w-[37vw] md:w-[45vw] w-[80vw] bg-white/20 backdrop-blur xl rounded-lg z-10 md:p-5 lg:p-5 p-2">
                <p className="text-left align-middle text-wrap lg:mr-4 mt-5">
                  iTask Manager is a simple and efficient to-do website. All the tasks are securely stored in your browser&apos;s local storage. so there&apos;s no need for sign-ups or internet connection.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10 lg:pt-4">
                  <Link href='https://itzbothulk.github.io/e-Todo-site/' target="_blank"><Image height={20} width={20} src="/bgs/click.png"  alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/e-Todo-site/tree/main' target="_blank"><Image height={24} width={24} className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 w-[90vw] lg:justify-start justify-center items-center flex ">

              <div className="md:h-auto lg:w-[35vw] md:w-[60vw] w-[90vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <Image height={700} width={700} src="/project/itask.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>
          {/* opposite */}
          <div className="flex items-center lg:flex-row flex-col mt-10">
            {/* image  */}
            <div className="w-1/2 w-[90vw] lg:justify-end justify-center items-center flex ">

              <div className="md:h-auto lg:w-[35vw] md:w-[60vw] w-[90vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <Image height={700} width={700} src="/project/getmeachai.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
            {/* textbox */}
            <div className="w-1/2 w-[80vw]  relative bottom-5 lg:top-0 lg:right-10 lg:justify-start justify-center items-center flex">
              <div className=" flex flex-col lg:h-44 lg:w-[37vw] md:w-[45vw] w-[80vw] bg-white/20 backdrop-blur xl rounded-lg z-10 md:p-5 lg:p-5 p-2">
                <p className="text-left align-middle text-wrap lg:ml-10 mt-5">
                  Get Me a Chai is a heartfelt charity website for online communities, where supporters can donate to their favorite creators with a simple gesture - buying them a chai.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10 lg:pt-4 lg:justify-end lg:pr-5">
                  <Link href='/' target="_blank"><Image height={20} width={20} src="/bgs/click.png" alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/GetMeChai' target="_blank"><Image height={24} width={24} className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>

          </div>

          {/* right img */}

          <div className="flex items-center lg:flex-row flex-col-reverse mt-10 ">
            {/* textbox */}
            <div className="w-1/2 w-[80vw]  relative bottom-5 lg:top-0 lg:left-10 lg:justify-end justify-center items-center flex">
              <div className=" flex flex-col lg:h-44 lg:w-[37vw] md:w-[45vw] w-[80vw] bg-white/20 backdrop-blur xl rounded-lg z-10 md:p-5 lg:p-5 p-2">
                <p className="text-left align-middle text-wrap lg:mr-4 mt-5 ">
                  LinkTree is a simple, customizable link-in-bio tool that lets you share all your important links through one xlart URL. Perfect for social media, it’s your central hub for everything online, inspired by Linktree.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10 lg:pt-4">
                  <Link href='/' target="_blank"><Image height={20} width={20} src="/bgs/click.png" alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/LinkTree-Clone' target="_blank"><Image height={24} width={24} className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 w-[90vw] lg:justify-start justify-center items-center flex ">

              <div className="md:h-auto lg:w-[35vw] md:w-[60vw] w-[90vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <Image height={700} width={700} src="/project/linktree.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>

          {/* opposite */}

          <div className="flex items-center lg:flex-row flex-col mt-10">

            {/* image  */}
            <div className="w-1/2 w-[90vw] lg:justify-end justify-center items-center flex ">

              <div className="md:h-auto lg:w-[35vw] md:w-[60vw] w-[90vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <Image height={700} width={700} src="/project/bitlinks.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
            {/* textbox */}
            <div className="w-1/2 w-[80vw]  relative bottom-5 lg:top-0 lg:right-10 lg:justify-start justify-center items-center flex">
              <div className=" flex flex-col lg:h-44 lg:w-[37vw] md:w-[45vw] w-[80vw] bg-white/20 backdrop-blur xl rounded-lg z-10 md:p-5 lg:p-5 p-2">
                <p className="text-left align-middle text-wrap lg:ml-10 mt-5">
                  BitLinks is a simple URL shortener that lets you create short, shareable links and saves them for future use. Perfect for easy access and clean sharing.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10 lg:pt-4 lg:justify-end lg:pr-5">

                  <Link href='/' target="_blank"><Image height={20} width={20} src="/bgs/click.png" alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/URL-Shortner' target="_blank"><Image height={24} width={24} className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>

          </div>


          {/* right img */}
          <div className="flex items-center lg:flex-row flex-col-reverse mt-10 ">
            {/* textbox */}
            <div className="w-1/2 w-[80vw]  relative bottom-5 lg:top-0 lg:left-10 lg:justify-end justify-center items-center flex">
              <div className=" flex flex-col lg:h-44 lg:w-[37vw] md:w-[45vw] w-[80vw] bg-white/20 backdrop-blur xl rounded-lg z-10 md:p-5 lg:p-5 p-2">
                <p className="text-left align-middle text-wrap lg:mr-4 mt-5">
                  PassSecure is a lightweight password saver that securely stores your passwords in your browser&apos;s local storage. It can always accessible directly from Chrome.
                </p>
                <div className="imgs flex flex-row gap-5 pt-10 lg:pt-4">
                  <Link href='/' target="_blank"><Image height={20} width={20} src="/bgs/click.png" alt="click" /></Link>
                  <Link href='https://github.com/ItzBotHulk/PassSecure' target="_blank"><Image height={24} width={24} className="invert-100" src="/bgs/github.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="w-1/2 w-[90vw] lg:justify-start justify-center items-center flex ">

              <div className="md:h-auto lg:w-[35vw] md:w-[60vw] w-[90vw] bg-[#763CAC] rounded-xl hover:rounded-none z-0 hover:z-20 sr ">
                <Image height={700} width={700} src="/project/passecure.png" alt="demo" className="object-cover rounded-xl hover:rounded-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center max-w-[100vw]">
          <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-20"></div>
        </div>

        {/* Skills  */}
        <div id="skills" className="md:ml-[13vw] ml-5 md:mt-20 mt-5 max-w-[100vw] flex flex-col gap-6 w-full overflow-x-hidden">
          <div>
            <h2 className="text-4xl font-extrabold">My Skills</h2>
            <p className="text-wrap mr-4">Technologies and tools I&apos;ve worked with throughout my projects and experience</p>
          </div>
        </div>

        <div className="w-full max-w-[100vw] md:ml-[13vw] mx-5 overflow-hidden">

          <div>
            <h3 className="text-3xl my-7">Front End</h3>
            <div className="flex flex-wrap gap-4 mr-10 ml-2">
              <div className="  flex flex-col h-20  items-center justify-center">
                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/html.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">HTML</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/css.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">CSS</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/javascript.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">JavaScript</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/react.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">React.js</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/nextjs.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Next.js</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/bootstrap.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Bootstrap</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/tailwind.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Back End</h3>
            <div className="flex flex-wrap gap-4">
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/express.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Express.js</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10 hover:invert-100 " src="/img/nodejs.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Node.js</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/python.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Python</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10 hover:invert-100" src="/img/django.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Django</span>
              </div>

            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Databases</h3>
            <div className="flex flex-wrap gap-4">
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/mongoDB.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">MongoDb</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/mongoose.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Mongoose</span>
              </div>

            </div>
          </div>
          <div>
            <h3 className="text-3xl my-7">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-4">
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/git.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Git</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/github.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">GitHub</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/postman.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Postman</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/vscode.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Vs Code</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/figma.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Figma</span>
              </div>
              <div className="  flex flex-col h-20  items-center justify-center">

                <div className="tech h-14 w-14 flex justify-center items-center bg-[#27272a] rounded-full">
                  <Image width={40} height={40} className="w-10" src="/img/Vercel.svg" alt="html" />
                </div>
                <span className=" w-fit text-center align-middle ">Vercel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center max-w-[100vw]">
          <div className="line bg-[#7127BA] opacity-90 h-1 w-[90vw] mx-20 my-20"></div>
        </div>


        {/* Education  */}

        <div id="education" className="md:ml-[13vw] ml-5 md:mt-20 mt-5 max-w-[100vw] flex flex-col gap-6 w-full max-w-[100vw] overflow-x-hidden">
          <div>
            <h2 className="text-4xl font-extrabold">Education</h2>
          </div>
        </div>
        <div className="w-screen lg:ml-[13vw] ">
          <div className="card justify-center flex lg:flex-col flex-row ">
            <div className=" lg:flex my-10  lg:justify-evenly lg:items-center rounded-xl bg-[#190634] lg:w-[70vw] max-w-[80vw] w-80  h-[55vh] lg:max-h-[30vh] textglow ">
              <div className="logo flex justify-center items-center">
                <Link href='https://sangamuniversity.ac.in/' target="_blank">
                  <Image height={80} src="/img/sangam.png" className=" hover:invert-50 rounded-xl my-10 " alt="logo" width={80} />
                </Link>
              </div>
              <div className="flex flex-col lg:ml-20 gap-2 2xl:gap-3 items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold ">Sangam University</h2>
                <Link href='https://hashtrust.in/' target="_blank">
                  <p className="text-xl hover:underline underline-offset-auto text-center">Diploma in Computer Science & Engineering</p>
                </Link>
                <p className="text-sm lg:text-base opacity-70 text-center">Aug 2022 - Aug 2025</p>
              </div>
            </div>
          </div>
        </div>




      </main>
    </>
  );
}
