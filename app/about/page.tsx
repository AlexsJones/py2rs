import { Code, Heart, Users, Target } from 'lucide-react'

export const metadata = {
  title: 'About - py2rs.info',
  description: 'Learn about py2rs.info and our mission to help Python developers transition to Rust.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About py2rs.info
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're on a mission to make the transition from Python to Rust as smooth as possible 
          for developers who want to explore systems programming without losing their Pythonic intuition.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Python developers bring incredible problem-solving skills and programming intuition to the table. 
                Our goal is to help you leverage that experience while learning Rust's unique approach to 
                systems programming, memory safety, and performance.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that learning Rust shouldn't mean starting from scratch. Instead, we build bridges 
                between the concepts you already know and the new paradigms Rust introduces.
              </p>
            </div>
            <div className="bg-gradient-to-br from-python-blue to-rust-orange rounded-2xl p-8 text-white">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bridge the Gap</h3>
              <p className="opacity-90">
                From Python's simplicity to Rust's performance, we make the journey clear and practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-python-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-python-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Python-First Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every concept starts with familiar Python patterns before introducing Rust equivalents. 
                We respect your existing knowledge and build upon it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Practical Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on real-world examples and practical applications. Every tutorial includes 
                working code that you can run and modify.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-rust-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rust-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built by developers, for developers. We listen to the community and continuously 
                improve our content based on your feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why py2rs.info Exists
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              The idea for py2rs.info came from a simple observation: many Python developers are 
              curious about Rust but find the learning curve steep. Traditional Rust tutorials 
              often start from first principles, which can be frustrating when you already have 
              years of programming experience.
            </p>
            <p>
              We noticed that Python developers bring unique strengths to learning Rust:
            </p>
            <ul>
              <li>Strong understanding of high-level programming concepts</li>
              <li>Experience with package management and project structure</li>
              <li>Familiarity with testing, documentation, and best practices</li>
              <li>A pragmatic approach to problem-solving</li>
            </ul>
            <p>
              py2rs.info leverages these strengths while addressing the specific challenges Python 
              developers face when learning Rust, such as understanding ownership, dealing with 
              the borrow checker, and adapting to compile-time error checking.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-python-blue to-rust-orange rounded-2xl text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Join the Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with other Python developers making the transition to Rust. Share your experiences, 
            ask questions, and help others on their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join Discord Community
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Contributing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Want to Contribute?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            py2rs.info is open source and community-driven. We welcome contributions from developers 
            at all levels, whether it's fixing typos, adding new tutorials, or suggesting improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contribution Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
