import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection.jsx";
import TaskBoard from "./Components/task/TaskBoard.jsx";

export default function App() {
  return (
    <div className="bg-[#1D212B] text-white font-[Inter] max-md:px-4 lg:text-lg">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}
