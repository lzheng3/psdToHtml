export default function App() {
  return (
    <>
      <section className="h-[937] lg:h-screen">
        <header className="w-full absolute">
          <div className="container mx-auto max-w-6xl md:w-[80%] py-2">
            <nav className="flex justify-between items-center">
              <img src="/Logo.png" alt="logo" width={60} height={60} />
              <div className="text-white font-bold underline italic flex gap-3">
                <a href="#history">01. History</a>
                <a href="#team">02. Team</a>
              </div>
            </nav>
          </div>
        </header>
        <img
          src="/background.png"
          alt="section1_img"
          className="w-[1920] h-auto"
        />
      </section>

      <section className="py-10 w-[80%] lg:w-full mx-auto" id="history">
        <nav className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <img src="/Logo.png" alt="logo" width={60} height={60} />
            <img
              src="/Logo2.png"
              alt="logo"
              width={150}
              height={31}
              className="object-cover"
            />
          </div>

          <div className="text-black font-bold underline italic flex gap-3">
            <a href="#history">01. History</a>
            <a href="#team">02. Team</a>
          </div>
        </nav>
      </section>

      <section className="h-[937] lg:h-screen relative">
        <div className="flex flex-col flex-wrap justify-between w-full h-screen pt-[30px] absolute z-10">
          <div className="px-40">
            <div className="relative">
              <h1 className="text-9xl font-extrabold text-[#596886]">01.</h1>
              <h2 className="font-bold text-[#313D58] text-5xl absolute left-36 bottom-10">
                HISTORY
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              quisquam mollitia esse commodi debitis obcaecati. Pariatur ut
              saepe asperiores eveniet. Harum voluptatibus cupiditate tempora
              reprehenderit sint tenetur eaque, soluta maiores.Nam soluta optio
              repudiandae quis omnis iure officiis totam iste
            </p>
          </div>

          <div className="text-white text-4xl bg-[#414f6b] opacity-60">
            <div className="container mx-auto max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 grid-flow-col w-full">
                <img src="/slide1.png" alt="slide1" className="w-auto h-auto" />
                <img src="/slide2.png" alt="slide2" className="w-auto h-auto" />
                <img src="/slide3.png" alt="slide3" className="w-auto h-auto" />
                <img src="/slide4.png" alt="slide4" className="w-auto h-auto" />
              </div>
              <div className="flex justify-center items-center pb-2">
                <span className="cursor-pointer h-[9px] w-[9px] rounded-full bg-[#A8A8A8] hover:bg-white mx-[3px] transition duration-300"></span>
                <span className="cursor-pointer h-[9px] w-[9px] rounded-full bg-[#A8A8A8] hover:bg-white mx-[3px] transition duration-300"></span>
                <span className="cursor-pointer h-[9px] w-[9px] rounded-full bg-[#A8A8A8] hover:bg-white mx-[3px] transition duration-300"></span>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/background2.png"
          alt="background2"
          className="w-full h-screen absolute object-cover"
        />
      </section>

      <section className="h-[20vh] w-[60%] mx-auto flex justify-between gap-10">
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-[#A0A5B0]">02.</h1>
          <h2 className="font-bold text-[#313D58] text-5xl absolute left-40 bottom-24">
            CLIMB
          </h2>
        </div>

        <p className="pt-[50px] text-center w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          earum architecto nulla veniam, omnis possimus sed consectetur vitae.
          Quo expedita veniam ipsum nihil accusantium in perspiciatis, atque
          adipisci quae reprehenderit?
        </p>
      </section>

      <section className="h-[937] lg:h-screen relative" id="team">
        <div className="flex flex-col flex-wrap justify-between w-full h-screen absolute z-10">
          <div className="bg-[#313D59] py-2 px-20">
            <a
              className="font-bold text-[#313D59] px-4 py-2 text-2xl bg-[#A0A5B0] underline"
              href="/"
            >
              MOUNTAIN 1
            </a>
            <a
              className="font-bold text-[#A0A5B0] px-4 py-2 text-2xl "
              href="/"
            >
              MOUNTAIN 2
            </a>
          </div>

          <div className="absolute w-[352px] h-[229px] py-4 px-8 bg-white top-60 left-40 opacity-60">
            <h1 className="text-3xl font-bold text-[#313D59] mb-2">SCHEDULE</h1>
            <div className="w-full h-full flex justify-between">
              <div>
                25 Nov 2016
                <br />
                28 Nov 2016 <br />
                <br />
                18 DEC 2016
                <br />
                <br />7 Jan 2017
              </div>
              <div>
                Vestibulum viverra
                <br />
                Vestibulum viverra
                <br />
                <br />
                Vestibulum viverra
                <br />
                <br />
                Vestibulum viverra
              </div>
            </div>
          </div>

          <footer className="w-full bg-[#313D59] flex justify-between px-32 items-center py-2">
            <div className="hidden md:flex md:gap-1 lg:flex lg:gap-1 items-center">
              <img src="/Logo.png" alt="logo" width={60} height={60} />
              <img
                src="/Logo3.png"
                alt="logo"
                width={150}
                height={31}
                className="object-cover"
              />
            </div>
            <p className="text-[#4D5E8B] font-bold italic text-[12px] md:text-base">
              COPYRIGHT 2016. ALL RIGHTS RESERVED
            </p>
          </footer>
        </div>
        <img
          src="/background3.png"
          alt="background3"
          className="w-full h-screen absolute object-cover"
        />
      </section>
    </>
  );
}
