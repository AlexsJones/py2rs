import Link from 'next/link'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'

interface Tutorial {
  slug: string
  title: string
  description: string
  readTime: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tags: string[]
}

const tutorials: Tutorial[] = [
  {
    slug: 'variables-and-mutability',
    title: 'Variables and Mutability',
    description: 'Learn how Rust handles variables and mutability compared to Python\'s dynamic approach.',
    readTime: '8 min',
    difficulty: 'Beginner',
    tags: ['basics', 'variables', 'mutability']
  },
  {
    slug: 'ownership-for-pythonistas',
    title: 'Ownership for Pythonistas',
    description: 'Understand Rust\'s ownership system through the lens of Python\'s memory management.',
    readTime: '12 min',
    difficulty: 'Intermediate',
    tags: ['ownership', 'memory', 'borrowing']
  },
  {
    slug: 'rust-modules-vs-python-packages',
    title: 'Rust Modules vs Python Packages',
    description: 'Compare and contrast how code organization works in Rust modules versus Python packages.',
    readTime: '10 min',
    difficulty: 'Beginner',
    tags: ['modules', 'packages', 'organization']
  },
  {
    slug: 'first-rust-cli',
    title: 'Writing Your First Rust CLI',
    description: 'Build a command-line application in Rust, comparing it to similar Python CLI tools.',
    readTime: '15 min',
    difficulty: 'Intermediate',
    tags: ['cli', 'project', 'practical']
  },
  {
    slug: 'async-with-tokio',
    title: 'Async Programming with Tokio',
    description: 'Learn how to write asynchronous Rust code with Tokio, comparing it to Python\'s asyncio.',
    readTime: '15 min',
    difficulty: 'Advanced',
    tags: ['async', 'concurrency', 'networking']
  },
  {
    slug: 'error-handling-python-exceptions-vs-rust-result',
    title: 'Error Handling: Python Exceptions vs Rust Result',
    description: 'Understand how Rust’s error handling with Result differs from Python’s try/except model, and why it matters.',
    readTime: '10 min',
    difficulty: 'Beginner',
    tags: ['error-handling', 'result', 'exceptions']
  }
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'Advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Python to Rust Tutorials
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Step-by-step guides designed specifically for Python developers learning Rust. 
          Each tutorial includes side-by-side code comparisons and practical examples.
        </p>
      </div>

      {/* Tutorial Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-rust-orange" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-rust-orange transition-colors">
                  {tutorial.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-rust-orange group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Tutorials Coming Soon
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Testing: pytest vs Rust Testing Framework'
            ].map((title, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600"
              >
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coming soon...
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/newsletter"
              className="inline-flex items-center px-6 py-3 bg-rust-orange text-white font-semibold rounded-lg hover:bg-rust-orange/90 transition-colors"
            >
              Get Notified of New Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
