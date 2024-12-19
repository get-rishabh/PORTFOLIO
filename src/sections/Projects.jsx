import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function Projects() {
  const data = [
    {
      title: "B.Tech Nexus (Current)",
      content: (
        <div>
          <p className="project-desc">
            This is my Bachelor's major project, it's a comprehensive web application
            designed to help B.Tech students. It features an AI-based Previous
            Year Question Paper Analyzer, a Real-Time Chat Platform for doubt
            resolution, an ATS-Friendly Resume Builder, and Curated Learning
            Roadmaps to facilitate efficient topic exploration and learning.
          </p>
          <div>
            <img
              src="\assets\nexus_1.png"
              alt="B-Tech-Nexus_1"
              className="rounded-lg h-36 w-80 md:h-full md:w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Summarize-Karo",
      content: (
        <div>
          <p className="project-link ">
            Deployed Link :{" "}
            <u>
              <a
                href="https://summarize-karo.streamlit.app/"
                target="_blank"
                className="text-neutral-400 hover:text-white"
              >
                summarize-karo.streamlit.app/
              </a>
            </u>
          </p>
          <p className="project-desc mb-6">
            This is a Multimodal LLM Based Summarizer, which is capable of summarizing YouTube Videos, Documents, Images.
          </p>
          <p className="project-desc mb-6">
            The UI is designed in streamlit, which makes the application faster, because it gives seamless integration in python.It extracts key information from diverse media formats and provides instant summaries for immediate insights.
          </p>
          <p className="project-desc mb-6">
            Tech-Stack : Gemini (LLM), PyPDF2, Pillow, LangChain, Streamlit, Python
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="\assets\summarizer_1.png"
              alt="summarizer_01"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="\assets\summarizer_2.png"
              alt="summarizer_02"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="\assets\summarizer_3.png"
              alt="summarizer_3"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="\assets\summarizer_4.png"
              alt="summarizer_4"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Newzzy",
      content: (
        <div>
            <p className="project-link ">
            Repository Link :{" "}
            <u>
              <a
                href="https://github.com/get-rishabh/Newzzy"
                target="_blank"
                className="text-neutral-400 hover:text-white"
              >
                github.com/get-rishabh/Newzzy
              </a>
            </u>
          </p>
          <p className="project-desc mb-4">
            A News App for keeping you up-to-date
          </p>
          <p className="project-desc mb-4">
          Introducing Newzzy, a dynamic news application built with React.js that delivers the latest updates seamlessly. With category-based filtering, users can explore current news across a wide range of topics tailored to their interests. Leveraging the power of the News API, Newzzy ensures real-time updates, while its responsive design guarantees a smooth and intuitive experience across all devices. Stay informed anytime, anywhere with Newzzy!
          </p>
          <p className="project-desc mb-6">
            Tech-Stack : React-Masonry, React.js, Node.js, Tailwind-CSS
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="\assets\Newzzy_1.png"
              alt="Newzzy_1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="\assets\Newzzy_2.png"
              alt="Newzzy_2"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "LLM Based Chatbot",
      content: (
        <div>
            <p className="project-link ">
            Deployed Link :{" "}
            <u>
              <a
                href="https://huggingface.co/spaces/COLONEL-HERE/LLM-Based-QA-AI-ChatBot"
                target="_blank"
                className="text-neutral-400 hover:text-white"
              >
                huggingface.co/spaces/COLONEL-HERE/LLM-Based-QA-AI-ChatBot
              </a>
            </u>
          </p>
          <p className="project-desc mb-4">
            A General Purpose Chatbot, for Chatting ]
          </p>
          <p className="project-desc mb-4">
          It uses the LangChain's LCEL to maintain a flow of chats, to give a experience of realtime chating, but with an AI. It acts as a capstone project of Langchain, hosted on Hugging-Face, for seamless user experience.
          </p>
          <p className="project-desc mb-4">
            Tech-Stack : Gemini (LLM), LangChain, Streamlit, Python
          </p>
          <div>
            <img
              src="\assets\LLM_Chatbot.png"
              alt="hero template"
              className="rounded-lg h-36 w-80 md:h-full md:w-full"
            />
            
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="projects">
      <Timeline data={data} />
    </div>
  );
}
