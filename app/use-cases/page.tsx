import Link from 'next/link';
import { Code, Cpu, Zap, Server, Database, Brain, FlaskConical, Rocket, Shield, ArrowRight } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  description: string;
  pythonPros: string[];
  rustPros: string[];
  icon: React.ReactNode;
  iconBgColor: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  pythonPros,
  rustPros,
  icon,
  iconBgColor,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Python Strengths
            </h4>
            <ul className="space-y-2">
              {pythonPros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
              <span className="w-2 h-2 bg-rust-orange rounded-full mr-2"></span>
              Rust Strengths
            </h4>
            <ul className="space-y-2">
              {rustPros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rust-orange mr-2">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const useCases: UseCaseCardProps[] = [
  {
    title: 'Web Development',
    description: 'Building web applications and APIs with frameworks like FastAPI (Python) or Actix-web (Rust).',
    pythonPros: [
      'Faster development with Django, Flask, or FastAPI',
      'Rich ecosystem of web frameworks and libraries',
      'Excellent for rapid prototyping',
      'Great for data-heavy applications'
    ],
    rustPros: [
      'Exceptional performance and low latency',
      'Memory safety without garbage collection',
      'Great for high-concurrency applications',
      'Smaller memory footprint'
    ],
    icon: <Code className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-blue-500',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Data analysis, machine learning, and scientific computing tasks.',
    pythonPros: [
      'Dominant ecosystem (NumPy, Pandas, PyTorch, TensorFlow)',
      'Jupyter notebooks for interactive analysis',
      'Extensive visualization libraries',
      'Large collection of pre-trained models'
    ],
    rustPros: [
      'High performance for custom algorithms',
      'Memory safety for production systems',
      'Growing ecosystem (ndarray, Polars, Linfa)',
      'Great for deploying ML models'
    ],
    icon: <Brain className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-purple-500',
  },
  {
    title: 'Systems Programming',
    description: 'Building operating systems, device drivers, and other low-level software.',
    pythonPros: [
      'Good for scripting and automation',
      'Useful for high-level system management',
      'Rapid prototyping of system tools',
      'Cross-platform compatibility'
    ],
    rustPros: [
      'Zero-cost abstractions',
      'Memory safety without garbage collection',
      'Fine-grained control over system resources',
      'Excellent for performance-critical code'
    ],
    icon: <Cpu className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-red-500',
  },
  {
    title: 'Networking & Distributed Systems',
    description: 'Building network services, microservices, and distributed systems.',
    pythonPros: [
      'Rapid development with asyncio',
      'Good for API gateways and middleware',
      'Rich ecosystem for web services',
      'Great for service orchestration'
    ],
    rustPros: [
      'Exceptional performance for network services',
      'Fearless concurrency',
      'Excellent for high-throughput systems',
      'Great for building reliable distributed systems'
    ],
    icon: <Server className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-green-500',
  },
  {
    title: 'CLI Applications',
    description: 'Command-line tools and utilities for developers and operations.',
    pythonPros: [
      'Rapid development with Click or Typer',
      'Great for data processing scripts',
      'Easy to learn and maintain',
      'Good for cross-platform tools'
    ],
    rustPros: [
      'Single binary deployment',
      'Faster execution',
      'Better memory efficiency',
      'Great for performance-critical tools'
    ],
    icon: <Zap className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-yellow-500',
  },
  {
    title: 'Blockchain & Cryptography',
    description: 'Building blockchain applications and cryptographic systems.',
    pythonPros: [
      'Good for prototyping',
      'Useful for research and education',
      'Libraries like PyCryptodome',
      'Good for smart contract development (e.g., Vyper)'
    ],
    rustPros: [
      'Memory safety critical for security',
      'High performance',
      'Used by major blockchains (Solana, Polkadot)',
      'Zero-cost abstractions'
    ],
    icon: <Shield className="w-6 h-6 text-white" />,
    iconBgColor: 'bg-indigo-500',
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Python vs Rust: Choosing the Right Tool
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Both Python and Rust are powerful languages, but they excel in different areas.
            Here's a comprehensive comparison to help you decide which one to use for your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#web-development"
              className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 dark:text-blue-200 rounded-full text-sm font-medium transition-colors"
            >
              Web Dev
            </a>
            <a
              href="#data-science"
              className="px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 dark:text-purple-200 rounded-full text-sm font-medium transition-colors"
            >
              Data Science
            </a>
            <a
              href="#systems-programming"
              className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/30 dark:hover:bg-red-800/50 dark:text-red-200 rounded-full text-sm font-medium transition-colors"
            >
              Systems
            </a>
            <a
              href="#networking"
              className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:hover:bg-green-800/50 dark:text-green-200 rounded-full text-sm font-medium transition-colors"
            >
              Networking
            </a>
            <a
              href="#cli"
              className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:hover:bg-yellow-800/50 dark:text-yellow-200 rounded-full text-sm font-medium transition-colors"
            >
              CLI Tools
            </a>
            <a
              href="#blockchain"
              className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-900/30 dark:hover:bg-indigo-800/50 dark:text-indigo-200 rounded-full text-sm font-medium transition-colors"
            >
              Blockchain
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} id={useCase.title.toLowerCase().replace(/\s+/g, '-')}>
              <UseCaseCard {...useCase} />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">General Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">Choose Python when:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>You need to develop quickly and iterate fast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Working on data analysis, ML, or scientific computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Building web applications or APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Scripting and automation tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>When developer productivity is more important than raw performance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">Choose Rust when:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-rust-orange mr-2 mt-1">•</span>
                  <span>Performance and efficiency are critical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust-orange mr-2 mt-1">•</span>
                  <span>Building systems where safety is paramount</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust-orange mr-2 mt-1">•</span>
                  <span>Working on concurrent or parallel systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust-orange mr-2 mt-1">•</span>
                  <span>When you need predictable performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust-orange mr-2 mt-1">•</span>
                  <span>For long-running applications where stability is key</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Consider Using Both</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Many successful projects use both Python and Rust together. You can use Python for high-level application logic 
              and Rust for performance-critical components. Tools like PyO3 make it easy to call Rust code from Python.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example Workflow:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Prototype in Python for rapid development</li>
                <li>Identify performance bottlenecks</li>
                <li>Rewrite critical paths in Rust</li>
                <li>Expose Rust functions to Python using PyO3</li>
                <li>Get the best of both worlds!</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/tutorials"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rust-orange hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
          >
            Explore Tutorials
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
