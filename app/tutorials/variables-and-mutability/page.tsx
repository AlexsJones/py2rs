import CodeComparison from '@/components/CodeComparison'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Variables and Mutability - py2rs.info',
  description: 'Learn how Rust handles variables and mutability compared to Python\'s dynamic approach.',
}

export default function VariablesAndMutabilityTutorial() {
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
          Variables and Mutability
        </h1>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>8 min read</span>
          <span className="mx-2">•</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
            Beginner
          </span>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          One of the first things Python developers notice about Rust is how it handles variables. 
          Let's explore the key differences and similarities.
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Python's Flexible Variables</h2>
        <p>
          In Python, variables are references to objects, and you can reassign them freely. 
          Python doesn't distinguish between mutable and immutable variables at the language level:
        </p>

        <CodeComparison
          pythonCode={`# Python variables are flexible
name = "Alice"
name = "Bob"  # Reassignment is always allowed

age = 25
age = 30      # Type can even change
age = "thirty"`}
          rustCode={`// Rust variables are immutable by default
let name = "Alice";
// name = "Bob";  // ❌ This would cause a compile error

let age = 25;
// age = 30;      // ❌ This would also fail`}
          title="Variable Assignment Comparison"
        />

        <h2>Rust's Explicit Mutability</h2>
        <p>
          Rust makes mutability explicit. By default, variables are immutable, which helps prevent bugs. 
          If you want to change a variable's value, you must declare it as mutable with the <code>mut</code> keyword:
        </p>

        <CodeComparison
          pythonCode={`# Python: All variables are mutable by default
counter = 0
counter += 1  # Works fine
counter = 100 # Also works fine

# Lists are mutable objects
numbers = [1, 2, 3]
numbers.append(4)  # Modifies the list
numbers = [5, 6, 7]  # Reassigns the variable`}
          rustCode={`// Rust: Explicit mutability
let mut counter = 0;
counter += 1;  // ✅ Works because counter is mut
counter = 100; // ✅ Also works

// Vectors need mut to be modified
let mut numbers = vec![1, 2, 3];
numbers.push(4);     // ✅ Works because numbers is mut
numbers = vec![5, 6, 7]; // ✅ Reassignment also works`}
          title="Mutable Variables"
        />

        <h2>Shadowing: A Rust Superpower</h2>
        <p>
          Rust has a unique feature called "shadowing" that allows you to declare a new variable with the same name, 
          effectively hiding the previous one. This is different from reassignment:
        </p>

        <CodeComparison
          pythonCode={`# Python: Variable reassignment
spaces = "   "
spaces = len(spaces)  # Changes type from str to int

# This is just normal reassignment
# The original string is garbage collected`}
          rustCode={`// Rust: Shadowing allows type changes
let spaces = "   ";
let spaces = spaces.len(); // ✅ New variable, different type

// Each 'let' creates a new variable
// The previous one becomes inaccessible`}
          title="Shadowing vs Reassignment"
        />

        <h2>Constants vs Immutable Variables</h2>
        <p>
          Both languages have constants, but they work differently:
        </p>

        <CodeComparison
          pythonCode={`# Python constants (by convention)
PI = 3.14159
MAX_USERS = 1000

# These are just variables - Python won't stop you from changing them
PI = 2.71828  # Not recommended, but allowed`}
          rustCode={`// Rust constants (truly immutable)
const PI: f64 = 3.14159;
const MAX_USERS: u32 = 1000;

// Constants must be known at compile time
// const CURRENT_TIME = std::time::SystemTime::now(); // ❌ Won't compile`}
          title="Constants"
        />

        <h2>Practical Example: Counter Implementation</h2>
        <p>
          Let's see how you might implement a simple counter in both languages:
        </p>

        <CodeComparison
          pythonCode={`class Counter:
    def __init__(self):
        self.value = 0
    
    def increment(self):
        self.value += 1
    
    def get_value(self):
        return self.value

# Usage
counter = Counter()
counter.increment()
print(counter.get_value())  # Prints: 1`}
          rustCode={`struct Counter {
    value: u32,
}

impl Counter {
    fn new() -> Self {
        Counter { value: 0 }
    }
    
    fn increment(&mut self) {
        self.value += 1;
    }
    
    fn get_value(&self) -> u32 {
        self.value
    }
}

// Usage
let mut counter = Counter::new();
counter.increment();
println!("{}", counter.get_value()); // Prints: 1`}
          title="Counter Implementation"
        />

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Immutable by default:</strong> Rust variables are immutable unless explicitly marked with <code>mut</code></li>
          <li><strong>Explicit mutability:</strong> This prevents many common bugs and makes code intentions clear</li>
          <li><strong>Shadowing:</strong> Allows reusing variable names while potentially changing types</li>
          <li><strong>True constants:</strong> Rust constants are compile-time evaluated and truly immutable</li>
          <li><strong>Performance benefits:</strong> Immutability enables compiler optimizations</li>
        </ul>

        <h2>Coming from Python</h2>
        <p>
          As a Python developer, you might initially find Rust's approach restrictive. However, this explicitness helps catch bugs at compile time that might only surface during runtime in Python. The compiler becomes your pair programming partner, helping you write more reliable code.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-8">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Pro Tip:</strong> Start by making variables immutable by default, then add <code>mut</code> only when you need to modify them. This mirrors Rust's philosophy and will help you write better code.
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
