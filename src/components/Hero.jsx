import myPhoto from "../img/myPhoto.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Profile Picture */}
      <img
        src={myPhoto}
        className="w-40 h-40 rounded-full border-4 border-black shadow-lg breathe transform-gpu"
      />

      {/* Intro Text */}
      <h1 className="mt-6 text-4xl font-extrabold">
        Hii , I'm{" "}
        <span className="text-[#E23744] inline-block ">Mikel Fernandes</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600 max-w-xl">
        Full-Stack Developer 🚀 | DSA Enthusiast 🔥
      </p>

      {/* Button */}

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-[#E23744] hover:scale-105 transition"
      >
        My Projects
      </a>
    </section>
  );
}
