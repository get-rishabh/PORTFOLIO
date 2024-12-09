import React from "react";
import Globe from "react-globe.gl" 

const About = () => {
  return (
    <section className="c-space my-20 ">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext"> Hii, I'm Rishabh </p>
              <p className="grid-subtext">
                With More than 2+ Years of Experience, I have honed my skills in
                Generative AI and Web Development{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext"> Tech-Stack </p>
              <p className="grid-subtext">
                I'm specialized in Langchain, Python, React and Tailwind-CSS
                with a focus on building AI based solutions.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
          <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)" backgroundImageOpacity = {0.5} showAtmosphere showGraticules globeImageUrl="" />   

        </div>



        </div>



        </div>
      </div>
    </section>
  );
};

export default About;
