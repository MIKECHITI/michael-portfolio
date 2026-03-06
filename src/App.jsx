import React from 'react'
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Database, BarChart3, FileSpreadsheet } from 'lucide-react'

function App() {
  const skills = [
    {
      category: "Languages & Querying",
      items: ["SQL (PostgreSQL, MySQL, SQLite)", "Python"],
      icon: Code
    },
    {
      category: "Data Manipulation & Analysis", 
      items: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Statistical Analysis"],
      icon: Database
    },
    {
      category: "Visualization & BI",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Excel Dashboards"],
      icon: BarChart3
    },
    {
      category: "Other",
      items: ["Git/GitHub", "Excel Advanced", "A/B Testing Basics"],
      icon: FileSpreadsheet
    }
  ]

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard analyzing 4+ years of retail sales data (Superstore dataset).",
      highlights: [
        "Cleaned and prepared 10,000+ row dataset using Python & SQL",
        "Built dynamic visuals: regional sales trends, category profitability, seasonal patterns", 
        "Key insights: Technology drove 51% of profits; identified discount-related losses",
        "Technologies: Python (Pandas/Seaborn), SQL, Power BI"
      ],
      technologies: ["Python", "SQL", "Power BI", "Pandas", "Seaborn"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi there! 👋 I'm <span className="text-blue-600">Michael</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Data Analyst based in Nairobi, Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Passionate about transforming raw data into actionable business insights using 
              SQL, Python, Power BI, and advanced analytics techniques.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/michael-mwombe-785702221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:mikechiti05@gmail.com" 
                className="btn-primary flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="btn-primary flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm open to opportunities, collaborations, or just chatting about data! Reach out:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <a 
                href="https://www.linkedin.com/in/michael-mwombe-785702221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Mail className="w-5 h-5 text-blue-600" />
              <a 
                href="mailto:mikechiti05@gmail.com" 
                className="hover:text-blue-600 transition-colors"
              >
                mikechiti05@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>

          <p className="text-gray-500">
            Thanks for stopping by! 😊
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Michael Mwombe. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: March 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
