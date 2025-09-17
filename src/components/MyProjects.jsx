import { useState } from 'react';

// Data for projects and categories
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring particle animations and smooth transitions.",
    image: "/api/placeholder/400/250",
    tech: ["React", "Tailwind CSS", "Vite", "Particle.js"],
    github: "https://github.com/MikelBuilds/Portfolio-Website",
    live: "#",
    featured: true,
    category: "frontend",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    image: "/api/placeholder/400/250",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/MikelBuilds",
    live: "#",
    featured: true,
    category: "fullstack",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/400/250",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com/MikelBuilds",
    live: "#",
    featured: false,
    category: "frontend",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts, charts, and weather alerts using external APIs.",
    image: "/api/placeholder/400/250",
    tech: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
    github: "https://github.com/MikelBuilds",
    live: "#",
    featured: false,
    category: "frontend",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
    image: "/api/placeholder/400/250",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/MikelBuilds",
    live: "#",
    featured: false,
    category: "fullstack",
  },
  {
    id: 6,
    title: "AI Chat Bot",
    description: "Intelligent chatbot with natural language processing capabilities and machine learning integration.",
    image: "/api/placeholder/400/250",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/MikelBuilds",
    live: "#",
    featured: false,
    category: "ai",
  },
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
];

// Reusable Project Card Component
const ProjectCard = ({ project, index }) => (
  <div 
    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {project.featured && (
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-gradient-to-r from-[#E23744] to-[#ff4757] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
          ⭐ Featured
        </span>
      </div>
    )}

    {/* Project Image */}
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
      
      {/* Overlay buttons that appear on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub Repository`}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.67 1.7.25 2.96.13 3.27.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"/>
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Live Demo`}
            className="p-3 bg-[#E23744]/90 backdrop-blur-sm rounded-full text-white hover:bg-[#E23744] transition-all duration-300 transform hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E23744] transition-colors duration-300">
          {project.title}
        </h3>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium capitalize">
          {project.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:from-[#E23744] hover:to-[#c12d3a] hover:text-white transition-all duration-300 transform hover:scale-105 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Main Component
export default function MyProjects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#E23744]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#E23744]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Featured <span className="text-[#E23744]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some projects I've worked on, showcasing my skills and creativity. Use the filters to navigate through different categories.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-[#E23744] to-[#c12d3a] mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#E23744] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#E23744] border border-gray-200'
              }`}
            >
              {category.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeFilter === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
           <a
            href="https://github.com/MikelBuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#E23744] text-[#E23744] rounded-xl hover:bg-[#E23744] hover:text-white transition-all duration-300 font-semibold text-lg transform hover:scale-105"
          >
            View All on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}