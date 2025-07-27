import CodeComparison from '@/components/CodeComparison'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Error Handling: Python Exceptions vs Rust Result - py2rs.info',
  description: 'Understand how Rust’s error handling with Result differs from Python’s try/except model, and why it matters.',
}

export default function ErrorHandlingTutorial() {
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
          Error Handling: Python Exceptions vs Rust Result
        </h1>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>10 min read</span>
          <span className="mx-2">•</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
            Beginner
          </span>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300">
          Error handling in Rust is very different from Python. Instead of exceptions, Rust encourages you to handle errors explicitly with <code>Result</code>. Let's explore how this works and why it can lead to more reliable code.
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Python Exceptions: Flexible but Dangerous</h2>
        <p>
          Python uses exceptions to signal errors. You write your normal logic and catch errors only when needed. This is powerful but can make it easy to forget to handle failures:
        </p>

        <CodeComparison
          pythonCode={`def divide(a, b):
    return a / b

try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(f"Error: {e}")`}
          rustCode={`fn divide(a: f64, b: f64) -> f64 {
    a / b  // ⚠️ Will panic at runtime if b == 0
}

// Rust prefers handling errors explicitly`}
          title="Division with Potential Error"
        />

        <h2>Rust's Result Type: Errors as Values</h2>
        <p>
          Rust encourages you to handle errors as part of the type system. Instead of throwing exceptions, functions return a <code>Result</code> type:
        </p>

        <CodeComparison
          pythonCode={`def safe_divide(a, b):
    if b == 0:
        return None
    return a / b

result = safe_divide(10, 2)
if result is None:
    print("Divide by zero!")
else:
    print(result)`}
          rustCode={`fn safe_divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Divide by zero".to_string())
    } else {
        Ok(a / b)
    }
}

match safe_divide(10.0, 2.0) {
    Ok(result) => println!("{}", result),
    Err(e) => println!("Error: {}", e),
}`}
          title="Explicit Error Handling"
        />

        <h2>Propagating Errors with <code>?</code></h2>
        <p>
          In Rust, the <code>?</code> operator simplifies error propagation by returning early if an error occurs:
        </p>

        <CodeComparison
          pythonCode={`def read_file(path):
    with open(path) as f:
        return f.read()

try:
    content = read_file("hello.txt")
except IOError as e:
    print(f"Failed to read file: {e}")`}
          rustCode={`use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}`}
          title="Error Propagation"
        />

        <h2>When Rust Panics</h2>
        <p>
          Rust does have panics, similar to Python exceptions, but they’re meant for unrecoverable errors. You should reserve <code>panic!</code> for bugs, not expected runtime errors.
        </p>

        <CodeComparison
          pythonCode={`raise Exception("This should never happen")`}
          rustCode={`panic!("This should never happen");`}
          title="Explicit Panic"
        />

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Rust's Result type:</strong> forces you to handle errors explicitly</li>
          <li><strong>No exceptions:</strong> Rust avoids hidden control flow</li>
          <li><strong>? operator:</strong> ergonomically propagates errors</li>
          <li><strong>Panics:</strong> should be rare and only used for unrecoverable logic errors</li>
        </ul>

        <h2>Coming from Python</h2>
        <p>
          If you're used to Python's dynamic and flexible error handling, Rust's approach might feel verbose. But in return, you get strong compile-time guarantees and fewer surprises at runtime. With <code>Result</code>, you always know what might fail — and what you have to do about it.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-8">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Pro Tip:</strong> Use <code>Result</code> for anything that can fail, and use <code>?</code> to keep your code clean while still being safe.
          </p>
        </div>
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/tutorials"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-rust-orange"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          All Tutorials
        </Link>

        <Link
          href="/tutorials/ownership-for-pythonistas"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80"
        >
          Next: Ownership for Pythonistas
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
