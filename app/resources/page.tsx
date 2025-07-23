import Link from 'next/link'
import { ExternalLink, Book, Code, Users, Zap, Terminal, Globe, FileText } from 'lucide-react'

export const metadata = {
  title: 'Resources - py2rs.info',
  description: 'Curated resources for Python developers learning Rust: books, tools, libraries, and community links.',
}

interface Resource {
  title: string
  description: string
  url: string
  category: string
  type: 'official' | 'book' | 'tool' | 'community' | 'tutorial' | 'library' | 'video'
  thumbnail?: string
}

const resources: Resource[] = [
  // Official Resources
  {
    title: 'The Rust Programming Language (The Book)',
    description: 'The official Rust book - comprehensive and beginner-friendly',
    url: 'https://doc.rust-lang.org/book/',
    category: 'Learning',
    type: 'official'
  },
  {
    title: 'Rust by Example',
    description: 'Learn Rust with examples (runnable and editable)',
    url: 'https://doc.rust-lang.org/rust-by-example/',
    category: 'Learning',
    type: 'official'
  },
  {
    title: 'Rustlings',
    description: 'Small exercises to get you used to reading and writing Rust code',
    url: 'https://github.com/rust-lang/rustlings',
    category: 'Practice',
    type: 'official'
  },

  // Books
  {
    title: 'Programming Rust (2nd Edition)',
    description: 'Fast, Safe Systems Development by Jim Blandy and Jason Orendorff',
    url: 'https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/',
    category: 'Books',
    type: 'book'
  },
  {
    title: 'Rust in Action',
    description: 'Systems programming concepts and techniques by Tim McNamara',
    url: 'https://www.manning.com/books/rust-in-action',
    category: 'Books',
    type: 'book'
  },
  {
    title: 'Zero To Production In Rust',
    description: 'Backend development, from beginner to production by Luca Palmieri',
    url: 'https://www.zero2prod.com/',
    category: 'Books',
    type: 'book'
  },

  // Tools
  {
    title: 'Cargo',
    description: 'Rust\'s build system and package manager',
    url: 'https://doc.rust-lang.org/cargo/',
    category: 'Tools',
    type: 'tool'
  },
  {
    title: 'Clippy',
    description: 'A collection of lints to catch common mistakes and improve Rust code',
    url: 'https://github.com/rust-lang/rust-clippy',
    category: 'Tools',
    type: 'tool'
  },
  {
    title: 'Rustfmt',
    description: 'A tool for formatting Rust code according to style guidelines',
    url: 'https://github.com/rust-lang/rustfmt',
    category: 'Tools',
    type: 'tool'
  },

  // Libraries for Python Developers
  {
    title: 'Serde',
    description: 'Serialization framework (like Python\'s json/pickle)',
    url: 'https://serde.rs/',
    category: 'Libraries',
    type: 'library'
  },
  {
    title: 'Tokio',
    description: 'Asynchronous runtime (like Python\'s asyncio)',
    url: 'https://tokio.rs/',
    category: 'Libraries',
    type: 'library'
  },
  {
    title: 'Clap',
    description: 'Command line argument parser (like Python\'s argparse)',
    url: 'https://clap.rs/',
    category: 'Libraries',
    type: 'library'
  },
  {
    title: 'Reqwest',
    description: 'HTTP client (like Python\'s requests)',
    url: 'https://docs.rs/reqwest/',
    category: 'Libraries',
    type: 'library'
  },

  // Community
  {
    title: 'Rust Users Forum',
    description: 'Official community forum for Rust users',
    url: 'https://users.rust-lang.org/',
    category: 'Community',
    type: 'community'
  },
  {
    title: 'r/rust',
    description: 'Rust community on Reddit',
    url: 'https://www.reddit.com/r/rust/',
    category: 'Community',
    type: 'community'
  },
  {
    title: 'Rust Discord',
    description: 'Real-time chat with the Rust community',
    url: 'https://discord.gg/rust-lang',
    category: 'Community',
    type: 'community'
  },

  // Video Tutorials
  {
    title: 'Rust for Python Developers - Full Course',
    description: 'A comprehensive video course on learning Rust with Python comparisons',
    url: 'https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8',
    category: 'Video Tutorials',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/OX9HJsJUDxA/maxresdefault.jpg'
  },
  {
    title: 'Ownership in Rust - Python to Rust',
    description: 'Understanding ownership, borrowing, and lifetimes in Rust',
    url: 'https://www.youtube.com/watch?v=OX9HJsJUDxA&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8&index=1',
    category: 'Video Tutorials',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/OX9HJsJUDxA/maxresdefault.jpg'
  },
  {
    title: 'Error Handling in Rust vs Python',
    description: 'Comparing error handling approaches between Python and Rust',
    url: 'https://www.youtube.com/watch?v=2BB7ZkF7z8k&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8&index=2',
    category: 'Video Tutorials',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/2BB7ZkF7z8k/maxresdefault.jpg'
  },
  {
    title: 'Rust Modules and Python Packages',
    description: 'Understanding Rust modules and how they compare to Python packages',
    url: 'https://www.youtube.com/watch?v=2BB7ZkF7z8k&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8&index=3',
    category: 'Video Tutorials',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/2BB7ZkF7z8k/maxresdefault.jpg'
  },
];

function getIconForType(type: string) {
  switch (type) {
    case 'official':
      return <Globe className="h-5 w-5" />
    case 'book':
      return <Book className="h-5 w-5" />
    case 'tool':
      return <Terminal className="h-5 w-5" />
    case 'community':
      return <Users className="h-5 w-5" />
    case 'tutorial':
      return <FileText className="h-5 w-5" />
    case 'video':
      return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    case 'library':
      return <Code className="h-5 w-5" />
    default:
      return <Zap className="h-5 w-5" />
  }
}

function getColorForType(type: string) {
  switch (type) {
    case 'official':
      return 'text-rust-orange bg-rust-orange/10 border-rust-orange/20'
    case 'book':
      return 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800'
    case 'tool':
      return 'text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800'
    case 'library':
      return 'text-purple-600 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-900/20 dark:border-purple-800'
    case 'community':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-800'
    case 'tutorial':
      return 'text-pink-600 bg-pink-50 border-pink-200 dark:text-pink-400 dark:bg-pink-900/20 dark:border-pink-800'
    case 'video':
      return 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800'
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200 dark:text-gray-400 dark:bg-gray-900/20 dark:border-gray-800'
  }
}

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map(r => r.category)))
  const videoResources = resources.filter(resource => resource.type === 'video')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Rust Resources for Python Developers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Curated collection of books, tools, libraries, and community resources to accelerate 
          your Python-to-Rust journey. All resources are chosen with Python developers in mind.
        </p>
      </section>

      {/* Quick Navigation */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(' ', '-')}`}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Video Tutorials Section */}
      {videoResources.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className={`p-2 rounded-lg ${getColorForType('video')} mr-3`}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Video Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoResources.map((resource, index) => (
              <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform duration-200 hover:scale-105">
                <div className="relative pt-[56.25%] overflow-hidden">
                  <img 
                    src={resource.thumbnail} 
                    alt={resource.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3 opacity-90 hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {resource.category}
                    </p>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                        {resource.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">YouTube</span>
                      <img className="h-8 w-8" src="/youtube-icon.png" alt="YouTube" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        <a href="https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Python to Rust Playlist
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>Watch on YouTube</span>
                        <span aria-hidden="true">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Resources by Category */}
      {categories.map((category) => (
        <section key={category} id={category.toLowerCase().replace(' ', '-')} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter(resource => resource.category === category && resource.type !== 'video')
              .map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-rust-orange/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg border ${getColorForType(resource.type)}`}>
                      {getIconForType(resource.type)}
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-rust-orange transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-rust-orange transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {resource.description}
                  </p>
                </a>
              ))}
          </div>
        </section>
      ))}

      {/* Python to Rust Equivalents */}
      <section className="py-16 bg-gradient-to-br from-python-blue/5 to-rust-orange/5 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Python to Rust Library Equivalents
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-python-blue mb-4">Python Libraries</h3>
              <div className="space-y-3">
                {[
                  { py: 'requests', desc: 'HTTP client' },
                  { py: 'json', desc: 'JSON serialization' },
                  { py: 'argparse', desc: 'CLI argument parsing' },
                  { py: 'asyncio', desc: 'Async programming' },
                  { py: 'unittest', desc: 'Testing framework' },
                  { py: 'logging', desc: 'Logging' },
                  { py: 'datetime', desc: 'Date/time handling' },
                  { py: 'pathlib', desc: 'Path manipulation' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="text-python-blue font-mono">{item.py}</code>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-rust-orange mb-4">Rust Equivalents</h3>
              <div className="space-y-3">
                {[
                  { rust: 'reqwest', desc: 'HTTP client' },
                  { rust: 'serde_json', desc: 'JSON serialization' },
                  { rust: 'clap', desc: 'CLI argument parsing' },
                  { rust: 'tokio', desc: 'Async runtime' },
                  { rust: 'built-in', desc: 'Testing framework' },
                  { rust: 'log + env_logger', desc: 'Logging' },
                  { rust: 'chrono', desc: 'Date/time handling' },
                  { rust: 'std::path', desc: 'Path manipulation' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="text-rust-orange font-mono">{item.rust}</code>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Know a Great Resource?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Help us build the best collection of Python-to-Rust resources. 
            Submit your suggestions and help other developers on their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-rust-orange text-white font-semibold rounded-lg hover:bg-rust-orange/90 transition-colors"
            >
              Suggest a Resource
            </a>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More About py2rs.info
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
