import { Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left Column: Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-500 bg-clip-text text-transparent leading-tight">
            Md Sabbir Hossain
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0 text-justify">
            Passionate Software Engineer with 1 year 10 months of professional
            experience and a solid foundation in Computer Science and
            Engineering. Skilled in both frontend and backend development with
            hands-on experience in system architecture, database design and
            end-to-end software development lifecycle (SDLC). Adept at solving
            complex problems and turning innovative ideas into practical,
            scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <a
              href="https://drive.google.com/file/d/11ebzMYFwS4tEbYo4R45uiQ3jxej_waxL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold border-2 border-purple-600 text-purple-600 bg-white/30 backdrop-blur-sm shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Download className="w-5 h-5" />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded font-semibold bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
              See Projects
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-md hover:shadow-purple-400/40 transform transition-transform duration-500">
            <img
              src="https://res.cloudinary.com/dhawyzgll/image/upload/v1767595099/hero-image_nhsa3h.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300 via-indigo-300 to-pink-300 opacity-20 animate-pulse-slow pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
