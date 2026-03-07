import React from 'react'
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Database, BarChart3, FileSpreadsheet, Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Predicted quarterly revenue with 94% accuracy using Time Series Analysis.",
      technologies: ["Python", "SQL", "Power BI", "Pandas", "Seaborn"]
    },
    {
      title: "Customer Churn Analysis", 
      description: "Visualized customer retention metrics for a SaaS startup using Power BI.",
      technologies: ["Power BI", "SQL", "Python", "Tableau"]
    },
    {
      title: "Retail Data Optimization",
      description: "Cleaned 5M rows of shipping data to identify $200k in annual savings.",
      technologies: ["Python", "Pandas", "SQL", "Excel"]
    },
    {
      title: "Portfolio Template",
      description: "Custom responsive portfolio built with Tailwind CSS and React.",
      technologies: ["React", "Tailwind CSS", "JavaScript"]
    }
  ]

  const education = [
    {
      period: "2022 — present",
      degree: "Bachelor of Science in Data Science",
      school: "University of Nairobi",
      description: "Specialized in data structures and statistical analysis. Completed capstone project on predictive modeling using Python and SQL."
    },
    {
      period: "2023",
      degree: "Advanced Data Analytics Specialization", 
      school: "Google / Coursera",
      description: "Professional certification in data analytics, visualization, and statistical analysis."
    }
  ]

  const coursework = [
    { category: "Statistics", items: ["Probability & Inference", "Statistical Analysis", "A/B Testing"] },
    { category: "Programming", items: ["Python", "Data Structures", "Algorithm Design"] },
    { category: "Databases", items: ["Relational SQL Design", "NoSQL", "Data Modeling"] },
    { category: "Visualization", items: ["Power BI Dashboarding", "Tableau", "D3.js"] }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Michael Mwombe</div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
              <a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#home" className="block hover:text-blue-600 transition-colors">Home</a>
              <a href="#education" className="block hover:text-blue-600 transition-colors">Education</a>
              <a href="#portfolio" className="block hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="block hover:text-blue-600 transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hello, I'm <span className="text-blue-600">Michael</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Data Analyst with a strong foundation in data cleaning, analysis, and visualization. 
                Experienced in SQL, Python, Power BI, and Excel, with a focus on turning complex data into actionable insights.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="mailto:mikechiti05@gmail.com" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Say Hello!
                </a>
                <a 
                  href="#contact" 
                  className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg col-span-2">
                <div className="text-sm font-semibold text-gray-700 mb-2">Resume</div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  My CV
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
          
          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-8">
                <div className="text-blue-600 font-medium mb-2">{edu.period}</div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <div className="text-gray-600 mb-2">{edu.school}</div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-8">Key Coursework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursework.map((category, index) => (
              <div key={index}>
                <h4 className="font-bold text-blue-600 mb-3">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Proficiencies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Proficiencies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Languages & Querying</h3>
              <div className="flex flex-wrap gap-2">
                {["SQL", "Python", "JavaScript"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Data Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Excel", "Power BI", "Tableau"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Vercel", "React", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Works</h2>
          
          <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's work together on your next data project.
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:mikechiti05@gmail.com" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/michael-mwombe-785702221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/MIKECHITI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2026 Michael Mwombe. Built with Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
