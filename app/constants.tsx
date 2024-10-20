import NetflixImg from "./public/NetflixAppImg1.png";
import VideoImg from "./public/VideoAppImg1.png";
import DevImg from "./public/DevAppImg1.png";
import ResumeImg from "./public/resumeImg.png";
import ReactImg from "./public/certificateImg2.png";
import NodeImg from "./public/certificateImg1.png";
export const SELF_INTRO =
  "a passionate Full Stack Developer with a strong focus on building dynamic and scalable web applications. I specialize in creating user-friendly, responsive interfaces while ensuring seamless functionality on the backend. With a deep understanding of modern web development practices, I take pride in delivering efficient and maintainable solutions. I’m always eager to take on new challenges, learn emerging technologies, and collaborate on innovative projects. Let's work together to bring your ideas to life!";
export const SKILLS = [
  "Html",
  "CSS",
  "Javascript",
  "ReactJs",
  "NodeJs",
  "ExpressJs",
  "MongoDb",
  "Java",
  "Springboot",
  "Redis",
  "Docker",
  "Tailwind",
  "NextJs",
  "Redux",
  "SQL",
];
export const PROJECT_DETAILS = [
  {
    toLink: "https://netflix-gpt-five-lac.vercel.app/",
    projectImage: NetflixImg,
    projectName: "Netflix-GPT",
    projectDescription: "Frontend Application that recommends movies using gpt",
    projectTech: ["React", "Tailwind", "Redux", "Firebase"],
  },
  {
    toLink: "https://github.com/sahithreddy738?tab=repositories",
    projectImage: DevImg,
    projectName: "DevConnector",
    projectDescription: "FullStack Application that connects developers",
    projectTech: [
      "React",
      "NodeJS",
      "Express",
      "Redux",
      "MongoDb",
      "Tailwind",
      "Jwt",
    ],
  },
  {
    toLink: "https://github.com/sahithreddy738/VidStream",
    projectImage: VideoImg,
    projectName: "VideoStreaming",
    projectDescription:
      "Frontend Application a Youtube like clone that streams videos",
    projectTech: ["React", "Tailwind", "Redux"],
  },
];
export const RESUME_DETAILS = [
  {
    toLink:
      "https://drive.google.com/file/d/1BR7OYOhDhkAZAlKUhsl_Ga7yr2v893FM/view?usp=sharing",
    name: "Resume",
    image: ResumeImg,
  },
  {
    toLink:
      "https://drive.google.com/file/d/1OqbxyGIIlgxZI5UE3bJRhA0Y9W8Mn7nF/view?usp=sharing",
    name: "Namaste React",
    image: ReactImg,
  },
  {
    toLink:
      "https://drive.google.com/file/d/1kdB5y9kHHyIRf30M9iKnqD9aCkAIZzkD/view?usp=sharing",
    name: "Namaste Node",
    image: NodeImg,
  },
];
