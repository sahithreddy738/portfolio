import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import TechStack from "./components/TechStack";
import "./globals.css";

export default function Home() {
  return (
     <div className="w-[80%] mx-auto flex flex-col gap-32">
          <Introduction/>
          <TechStack/>
          <Experience/>
          <Footer/>
     </div>
  );
}
