import myPhoto from "../img/myPhoto.jpeg";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center h-screen w-screen justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#E23744]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E23744]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Profile Picture */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#E23744]/20 rounded-full blur-xl animate-pulse"></div>
          <img
            src={myPhoto}
            alt="Mikel Fernandes"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl breathe transform-gpu mx-auto"
          />
          {/* Status indicator */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
            <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-gray-800 mb-2">Hey there! 👋</span>
            <span className="block">
              I'm{" "}
              <span className="text-[#E23744] inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                Mikel Fernandes
              </span>
            </span>
          </h1>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Full-Stack Developer 🚀 | DSA Enthusiast 🔥
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I craft digital experiences with modern technologies, solve
              complex problems, and turn innovative ideas into reality. Let's
              build something amazing together!
            </p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["React", "Node.js", "JavaScript", "Python", "MongoDB"].map(
              (tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-[#E23744] hover:text-[#E23744] transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#E23744] text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#E23744] to-[#c12d3a] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              🚀 View My Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl border-2 border-gray-200 hover:border-[#E23744] hover:text-[#E23744] transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            <span className="flex items-center gap-2">
              💬 Let's Connect
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
