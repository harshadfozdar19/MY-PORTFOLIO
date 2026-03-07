import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Database, Award, ExternalLink, ChevronDown, Menu, X, FileText, Send, Sparkles, Brain, Layers3, Rocket, Gauge, Wrench, BookOpen } from 'lucide-react';
import emailjs from "@emailjs/browser";
import linkedinImage from '../assets/linkedin.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);
//   setSubmitMessage('');

//   try {
//     const response = await fetch("https://my-portfolio-u1tf.onrender.com/send-message", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setSubmitMessage("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });

//       setTimeout(() => {
//         setSubmitMessage("");
//       }, 3000);
//     } else {
//       setSubmitMessage("❌ Failed to send. Please try again.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     setSubmitMessage("⚠️ Server error. Please try again later.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);
//   setSubmitMessage("");

//   try {
//     await emailjs.send(
//       "service_nhx8wrb",      // replace
//       "template_g6jzhkt",     // replace
//       {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//       },
//       "RjtT_itcgzDTaHgjS"           // replace
//     );

//     setSubmitMessage("✅ Message sent successfully!");
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });

//   } catch (error) {
//     console.error(error);
//     setSubmitMessage("❌ Failed to send message.");
//   }

//   setIsSubmitting(false);
// };


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {

    // email to YOU
    await emailjs.send(
      "service_nhx8wrb",
      "template_ya3wktv",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "RjtT_itcgzDTaHgjS"
    );

    // auto reply to sender
    await emailjs.send(
      "service_nhx8wrb",
      "template_g6jzhkt",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "RjtT_itcgzDTaHgjS"
    );

    setSubmitMessage("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error(error);
    setSubmitMessage("❌ Failed to send message.");
  }

  setIsSubmitting(false);
};





  const renderFloatingShapes = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-pulse opacity-10 ${
            i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
          }`}
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            borderRadius: i % 2 === 0 ? '50%' : '20px',
            left: `${10 + i * 15}%`,
            top: `${10 + i * 12}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translateY(${scrollY * 0.1 * (i + 1)}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      ))}
    </div>
  );

  const renderNavigation = () => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HF
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/11xfdIvFhfVLM7hKYUdVbRbgpzTvMb-HD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg p-4 shadow-lg">
            {[
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left transition-colors duration-300 font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/11xfdIvFhfVLM7hKYUdVbRbgpzTvMb-HD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );

  const approachItems = [
    {
      icon: Sparkles,
      iconClass: 'text-blue-600',
      title: 'AI-Augmented Development',
      description: 'Leverage AI and LLM tools to accelerate development, automate repetitive tasks, and build solutions faster.',
    },
    {
      icon: Code,
      iconClass: 'text-purple-600',
      title: 'Clean & Maintainable Code',
      description: 'Write structured, readable, and modular code that is easy to scale and maintain.',
    },
    {
      icon: Brain,
      iconClass: 'text-pink-600',
      title: 'Problem-First Thinking',
      description: 'Understand the problem deeply before designing and implementing the solution.',
    },
    {
      icon: Layers3,
      iconClass: 'text-cyan-600',
      title: 'Full-Stack Perspective',
      description: 'Consider both frontend experience and backend architecture when building systems.',
    },
    {
      icon: Rocket,
      iconClass: 'text-indigo-600',
      title: 'Rapid Prototyping',
      description: 'Quickly build prototypes to test ideas, validate concepts, and iterate efficiently.',
    },
    {
      icon: Gauge,
      iconClass: 'text-emerald-600',
      title: 'Scalable Systems',
      description: 'Design applications with scalability, performance, and reliability in mind.',
    },
    {
      icon: Wrench,
      iconClass: 'text-amber-600',
      title: 'Practical Solutions',
      description: 'Focus on simple, effective solutions rather than unnecessary complexity.',
    },
    {
      icon: BookOpen,
      iconClass: 'text-rose-600',
      title: 'Continuous Learning',
      description: 'Stay updated with modern technologies, frameworks, and AI advancements.',
    },
  ];

  const renderHeroSection = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="text-center z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-bold text-white">HF</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Harshad Fozdar
          </span>
        </h1>
        
        <div className="mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-2xl font-light text-gray-600 md:text-3xl">
          <span className="inline-block animate-pulse">AI Engineer</span>
          <span className="hidden text-blue-500 sm:inline">•</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>Full Stack Developer</span>
          <span className="hidden text-purple-500 sm:inline">•</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>Problem Solver</span>
        </div>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
         A Computer Science undergraduate passionate about building intelligent and scalable software solutions. I leverage modern web technologies along with AI and large language models to accelerate development, automate complex tasks, and create efficient, user-focused applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="min-w-[180px] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="min-w-[180px] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
          >
            <ChevronDown size={32} className="text-white-600" />
          </button>
        </div>
      </div>
    </section>
  );

  const renderAboutSection = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center">
              <img
                src={linkedinImage}
                alt="Harshad Fozdar"
                className="w-full max-w-[280px] h-auto max-h-[320px] object-contain rounded-xl"
                loading="lazy"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
             My interests lie in building intelligent systems that combine modern web development with AI technologies. I enjoy designing scalable backend systems, integrating large language models, and developing applications that transform complex data into useful insights for users.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Education</h3>
              <div className="space-y-3">
                <div className="group-hover:bg-blue-50 p-3 rounded-lg transition-all duration-200">
                  <div className="font-medium text-gray-800">B.Tech Computer Science Engineering</div>
                  <div className="text-gray-600">Chandigarh University • CGPA: 7.67 • 2022-2026</div>
                </div>
                <div className="group-hover:bg-blue-50 p-3 rounded-lg transition-all duration-200">
                  <div className="font-medium text-gray-800">12th PCM with Computer Science</div>
                  <div className="text-gray-600">Lions English School • 81.2% • 2021-2022</div>
                </div>
                <div className="group-hover:bg-blue-50 p-3 rounded-lg transition-all duration-200">
                  <div className="font-medium text-gray-800">10th CBSE</div>
                  <div className="text-gray-600">Lions English School • 85.6% • 2019-2020</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-yellow-700 transition-colors duration-300">Achievements</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 group-hover:bg-yellow-50 p-3 rounded-lg transition-all duration-200">
                  <Award size={20} className="text-yellow-500 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700">3rd place in Goblets of Fire quiz competition</span>
                </div>
                <div className="flex items-center gap-3 group-hover:bg-yellow-50 p-3 rounded-lg transition-all duration-200">
                  <Award size={20} className="text-yellow-500 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700">Runner up at PandoraX club Hackathon</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 group-hover:text-blue-800 transition-colors duration-300">Engineering Philosophy</h3>
            <div className="space-y-4">
              {approachItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4 group-hover:bg-white/30 p-4 rounded-xl transition-all duration-200">
                    <Icon className={`${item.iconClass} mt-1 group-hover:scale-110 transition-transform duration-200`} size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const skillCategories = [
    {
      title: 'Programming Languages',
      accent: 'from-blue-500 to-blue-600',
      badge: 'bg-blue-100 text-blue-800',
      items: ['C++', 'Python'],
    },
    {
      title: 'Frontend Development',
      accent: 'from-cyan-500 to-sky-600',
      badge: 'bg-cyan-100 text-cyan-800',
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Component-Based Architecture', 'Responsive UI'],
    },
    {
      title: 'Backend Development',
      accent: 'from-emerald-500 to-green-600',
      badge: 'bg-emerald-100 text-emerald-800',
      items: ['FastAPI', 'Node.js', 'Express.js', 'RESTful API Design', 'Middleware', 'Authentication (JWT/Token-based)'],
    },
    {
      title: 'Databases & Storage',
      accent: 'from-violet-500 to-purple-600',
      badge: 'bg-violet-100 text-violet-800',
      items: ['MongoDB', 'MySQL', 'Schema Design', 'Query Optimization'],
    },
    {
      title: 'AI & LLM Systems',
      accent: 'from-fuchsia-500 to-pink-600',
      badge: 'bg-fuchsia-100 text-fuchsia-800',
      items: ['Google Gemini API', 'Generative AI', 'Prompt Engineering', 'Retrieval-Augmented Generation (RAG)', 'Embeddings', 'Semantic Search', 'Context Injection'],
    },
    {
      title: 'Data & Systems',
      accent: 'from-amber-500 to-orange-600',
      badge: 'bg-amber-100 text-amber-800',
      items: ['DBMS', 'Operating Systems', 'Distributed Systems (Fundamentals)'],
    },
    {
      title: 'Software Engineering',
      accent: 'from-slate-500 to-slate-700',
      badge: 'bg-slate-100 text-slate-800',
      items: ['Data Structures & Algorithms', 'OOP', 'SDLC', 'API Integration', 'Debugging', 'Performance Optimization'],
    },
    {
      title: 'Tools & Platforms',
      accent: 'from-rose-500 to-red-600',
      badge: 'bg-rose-100 text-rose-800',
      items: ['Git', 'Postman', 'VS Code'],
    },
  ];

  const renderSkillsSection = () => (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] group">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.accent} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {index % 2 === 0 ? <Code className="text-white" size={28} /> : <Database className="text-white" size={28} />}
              </div>
              <h3 className="text-xl font-semibold mb-5 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span key={skill} className={`px-3 py-2 rounded-full text-sm font-medium ${category.badge}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProjectsSection = () => (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                <div className="text-6xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300">AP</div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">Ace-Prep</h3>
                  <a 
                    href="https://ace-prep.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  An AI-powered platform designed to enhance communication and interpersonal skills using 
                  advanced Generative AI technology for personalized learning experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['MongoDB', 'Express JS', 'React JS', 'Node JS', 'Google Gemini', 'Text-to-Speech'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://ace-prep.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span className="mr-2">View Live Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

<div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group">
  <div className="md:flex">
    <div className="md:w-1/3 bg-gradient-to-br from-indigo-500 to-blue-700 p-8 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-blue-800 transition-all duration-300">
      <div className="text-6xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300">
        RAG
      </div>
    </div>

    <div className="md:w-2/3 p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">
          AI RAG Chatbot
        </h3>

        <a
          href="https://rag-chatbot-over-a-document.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ExternalLink size={24} />
        </a>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Built an AI-powered Retrieval Augmented Generation (RAG) chatbot
        that answers questions from custom documents using vector embeddings.
        Implemented document chunking, semantic search, and LLM-based
        response generation.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          "Python",
          "RAG",
          "Vector Embeddings",
          "Google Gemini",
          "Semantic Search",
          "LLM"
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href="https://rag-chatbot-over-a-document.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <span className="mr-2">View Project</span>
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
</div>



          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center group-hover:from-green-600 group-hover:to-teal-700 transition-all duration-300">
                <div className="text-6xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300">WAS</div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">Work Assignment System</h3>
                  <a 
                    href="https://work-assignment-system.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A comprehensive admin dashboard built in React for efficient task assignment and tracking, 
                  featuring responsive design and local storage integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'JavaScript', 'HTML', 'CSS', 'Local Storage'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://work-assignment-system.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors cursor-pointer"
                >
                  <span className="mr-2">View Live Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 group">
  <div className="md:flex">
    <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-red-600 p-8 flex items-center justify-center group-hover:from-orange-600 group-hover:to-red-700 transition-all duration-300">
      <div className="text-6xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300">G</div>
    </div>
    <div className="md:w-2/3 p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">Garud</h3>
        <a 
          href="https://garud-project-link.netlify.app/"   // 👈 add your link here
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-600 hover:text-orange-800 transition-colors cursor-pointer"
        >
          <ExternalLink size={24} />
        </a>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        An advanced object recognition system built with YOLOv5 and PyTorch, demonstrating 
        expertise in deep learning and real-time pattern recognition.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {['Deep Learning', 'YOLOv5', 'PyTorch', 'Python', 'PIL'].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-200">
            {tech}
          </span>
        ))}
      </div>
      <a 
        href="https://garud-project-link.netlify.app/"   // 👈 same link here
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-orange-600 hover:text-orange-800 transition-colors cursor-pointer"
      >
        <span className="mr-2">View Project</span>
        <ExternalLink size={16} />
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );

  const renderContactSection = () => (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl mb-12 text-blue-100 leading-relaxed">
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and create something amazing together!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:harshad622004fozdar@gmail.com"
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="mx-auto mb-4 text-blue-300" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-blue-100 text-sm">harshad622004fozdar@gmail.com</p>
            <p className="text-blue-200 text-xs mt-2">Click to open email client</p>
          </a>
          
          <a
            href="tel:+919824495918"
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="mx-auto mb-4 text-green-300" size={32} />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-blue-100 text-sm">+91 98244 95918</p>
            <p className="text-blue-200 text-xs mt-2">Click to call</p>
          </a>
          
          <a
            href="https://www.linkedin.com/in/harshad-fozdar-85966a24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-blue-100 text-sm">Connect with me</p>
            <p className="text-blue-200 text-xs mt-2">View my profile</p>
          </a>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6">Quick Message</h3>
          {submitMessage && (
            <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('Opening') ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>
              {submitMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors resize-none"
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {renderFloatingShapes()}
      {renderNavigation()}
      {renderHeroSection()}
      {renderAboutSection()}
      {renderSkillsSection()}
      {renderProjectsSection()}
      {renderContactSection()}
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Harshad Fozdar. Designed with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;