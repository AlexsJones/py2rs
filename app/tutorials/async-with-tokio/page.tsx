import CodeComparison from '@/components/CodeComparison';
import { Clock, ArrowLeft, ArrowRight, Zap, Server, Cpu, Link2, Code as CodeIcon } from 'lucide-react';
import Link from 'next/link';
import { CODE_EXAMPLES } from './content';

export const metadata = {
  title: 'Async Programming with Tokio - py2rs.info',
  description: 'Learn how to write asynchronous Rust code with Tokio, comparing it to Python\'s asyncio.',
};

export default function AsyncWithTokioTutorial() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/tutorials"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tutorials
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Async Programming with Tokio
        </h1>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>15 min read</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1" />
            <span>Advanced</span>
          </div>
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Learn how to write asynchronous Rust code with Tokio, comparing it to Python's asyncio.
        </p>
      </div>

      {/* Setting Up Tokio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <CodeIcon className="h-6 w-6 mr-2 text-rust-orange" />
          Setting Up Tokio
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          First, add Tokio to your <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">Cargo.toml</code>:
        </p>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.setup.python}
          rustCode={CODE_EXAMPLES.setup.rust}
          title="Basic Setup"
        />
      </section>

      {/* Async Functions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Zap className="h-6 w-6 mr-2 text-rust-orange" />
          Async Functions
        </h2>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.asyncFunctions.python}
          rustCode={CODE_EXAMPLES.asyncFunctions.rust}
          title="Async Functions"
        />
      </section>

      {/* Tasks and Concurrency */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Cpu className="h-6 w-6 mr-2 text-rust-orange" />
          Tasks and Concurrency
        </h2>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.concurrency.python}
          rustCode={CODE_EXAMPLES.concurrency.rust}
          title="Concurrent Tasks"
        />
      </section>

      {/* HTTP Requests */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Link2 className="h-6 w-6 mr-2 text-rust-orange" />
          Making HTTP Requests
        </h2>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.httpRequests.python}
          rustCode={CODE_EXAMPLES.httpRequests.rust}
          title="HTTP Requests"
        />

        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">
            <span className="font-semibold">Note:</span> Don't forget to add{' '}
            <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">
              reqwest = &#123; version = "0.11", features = ["json"] &#125;
            </code>{' '}
            to your <code className="bg-blue-100 dark:bg-blue-900/50 px-1 rounded">Cargo.toml</code> for the HTTP client.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <svg className="h-6 w-6 mr-2 text-rust-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Channels for Communication
        </h2>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.channels.python}
          rustCode={CODE_EXAMPLES.channels.rust}
          title="Channels"
        />
      </section>

      {/* Error Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Error Handling
        </h2>

        <CodeComparison
          pythonCode={CODE_EXAMPLES.errorHandling.python}
          rustCode={CODE_EXAMPLES.errorHandling.rust}
          title="Error Handling"
        />
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Key Takeaways
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Tokio provides a powerful runtime for async Rust, similar to Python's asyncio but with Rust's performance benefits</li>
          <li>Async/await syntax is similar between Python and Rust, but Rust requires explicit handling of errors and lifetimes</li>
          <li>Use <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">tokio::spawn</code> to run concurrent tasks (like <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">asyncio.create_task</code>)</li>
          <li>Channels in Tokio (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">mpsc</code>) are similar to Python's <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">asyncio.Queue</code> but more type-safe</li>
          <li>For HTTP clients, <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">reqwest</code> is the most popular choice in the Rust ecosystem</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/tutorials/rust-modules-vs-python-packages"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous: Rust Modules vs Python Packages
        </Link>
        <Link
          href="/tutorials"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80"
        >
          Back to All Tutorials
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
