import Link from 'next/link'
import { ArrowRight, Code, BookOpen, Users, Zap } from 'lucide-react'
import CodeComparison from '@/components/CodeComparison'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            From <span className="text-python-blue">Python</span> to{' '}
            <span className="text-rust-orange">Rust</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Master Rust programming with tutorials designed specifically for Python developers. 
            Learn systems programming without losing your Pythonic intuition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-3 bg-rust-orange text-white font-semibold rounded-lg hover:bg-rust-orange/90 transition-colors"
            >
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Code Comparison Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            See the Similarities, Learn the Differences
          </h2>
          <CodeComparison
            pythonCode={`# Python: Reading a file
def read_file(filename):
    try:
        with open(filename, 'r') as f:
            content = f.read()
        return content
    except FileNotFoundError:
        return None`}
            rustCode={`// Rust: Reading a file
use std::fs;

fn read_file(filename: &str) -> Option<String> {
    match fs::read_to_string(filename) {
        Ok(content) => Some(content),
        Err(_) => None,
    }
}`}
            title="File I/O Comparison"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why py2rs.info?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-python-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-python-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Python-First Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every concept explained through familiar Python patterns before diving into Rust.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-rust-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-rust-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Practical Tutorials
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hands-on examples and projects that build real-world Rust applications.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a community of Python developers making the transition to Rust.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn how Rust's performance benefits can supercharge your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-python-blue to-rust-orange rounded-2xl text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Rust Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Python developers who have successfully transitioned to Rust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Tutorials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
