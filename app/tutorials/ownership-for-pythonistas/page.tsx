import CodeComparison from '@/components/CodeComparison'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Ownership for Pythonistas - py2rs.info',
  description: 'Understand Rust\'s ownership system through the lens of Python\'s memory management.',
}

export default function OwnershipForPythonistasTutorial() {
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
          Ownership for Pythonistas
        </h1>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>12 min read</span>
          <span className="mx-2">•</span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm">
            Intermediate
          </span>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Rust's ownership system is its most distinctive feature. As a Python developer, 
          you're used to garbage collection handling memory for you. Let's explore how Rust's 
          approach differs and why it's so powerful.
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Python's Memory Management</h2>
        <p>
          In Python, you rarely think about memory management. The garbage collector automatically 
          cleans up objects when they're no longer referenced:
        </p>

        <CodeComparison
          pythonCode={`# Python: Automatic memory management
def create_data():
    data = [1, 2, 3, 4, 5]  # Memory allocated
    return data             # Reference returned

my_data = create_data()     # data lives on
# When my_data goes out of scope or is reassigned,
# garbage collector will eventually clean it up`}
          rustCode={`// Rust: Explicit ownership
fn create_data() -> Vec<i32> {
    let data = vec![1, 2, 3, 4, 5];  // Memory allocated
    data  // Ownership transferred to caller
}

fn main() {
    let my_data = create_data();  // my_data owns the Vec
    // When my_data goes out of scope, memory is freed immediately
}`}
          title="Memory Management Comparison"
        />

        <h2>The Three Rules of Ownership</h2>
        <p>
          Rust's ownership system is built on three simple rules:
        </p>
        <ol>
          <li>Each value in Rust has a variable that's called its owner</li>
          <li>There can only be one owner at a time</li>
          <li>When the owner goes out of scope, the value will be dropped</li>
        </ol>

        <h2>Ownership Transfer (Move)</h2>
        <p>
          In Python, assignment typically creates a new reference to the same object. 
          In Rust, assignment can transfer ownership:
        </p>

        <CodeComparison
          pythonCode={`# Python: Multiple references to same object
original_list = [1, 2, 3]
copied_list = original_list  # Both point to same object

original_list.append(4)
print(copied_list)  # [1, 2, 3, 4] - both see the change

# To actually copy:
import copy
real_copy = copy.deepcopy(original_list)`}
          rustCode={`// Rust: Ownership transfer (move)
let original_vec = vec![1, 2, 3];
let moved_vec = original_vec;  // Ownership transferred

// println!("{:?}", original_vec);  // ❌ Error! original_vec no longer valid
println!("{:?}", moved_vec);       // ✅ Works fine

// To actually copy:
let original_vec = vec![1, 2, 3];
let copied_vec = original_vec.clone();  // Explicit copy`}
          title="Assignment Behavior"
        />

        <h2>Borrowing: Temporary Access</h2>
        <p>
          Sometimes you want to use a value without taking ownership. Rust provides "borrowing" 
          through references, similar to how you might pass objects to functions in Python:
        </p>

        <CodeComparison
          pythonCode={`# Python: Passing objects to functions
def print_length(data):
    print(f"Length: {len(data)}")
    # data is still accessible in the caller

def modify_list(data):
    data.append(999)  # Modifies original list

my_list = [1, 2, 3]
print_length(my_list)  # my_list still usable
modify_list(my_list)   # my_list is modified
print(my_list)         # [1, 2, 3, 999]`}
          rustCode={`// Rust: Borrowing with references
fn print_length(data: &Vec<i32>) {  // Immutable borrow
    println!("Length: {}", data.len());
}

fn modify_vec(data: &mut Vec<i32>) {  // Mutable borrow
    data.push(999);
}

fn main() {
    let mut my_vec = vec![1, 2, 3];
    print_length(&my_vec);    // Borrow, my_vec still owned here
    modify_vec(&mut my_vec);  // Mutable borrow
    println!("{:?}", my_vec); // [1, 2, 3, 999]
}`}
          title="Borrowing vs Direct Access"
        />

        <h2>The Borrow Checker</h2>
        <p>
          Rust's borrow checker enforces rules that prevent common bugs like use-after-free 
          and data races. These rules might seem strict coming from Python:
        </p>

        <CodeComparison
          pythonCode={`# Python: This can lead to issues
data = [1, 2, 3]
reference1 = data
reference2 = data

# Both can modify simultaneously
reference1.append(4)
reference2.append(5)

# In multithreaded code, this could cause race conditions`}
          rustCode={`// Rust: Borrow checker prevents issues
let mut data = vec![1, 2, 3];
let ref1 = &mut data;  // Mutable borrow
// let ref2 = &data;   // ❌ Error! Can't have immutable borrow while mutable exists

ref1.push(4);
// Only one mutable reference allowed at a time
// This prevents data races at compile time!`}
          title="Borrow Checker Rules"
        />

        <h2>Smart Pointers: When You Need Flexibility</h2>
        <p>
          Sometimes ownership rules are too restrictive. Rust provides smart pointers 
          that offer more flexibility, similar to Python's natural behavior:
        </p>

        <CodeComparison
          pythonCode={`# Python: Shared ownership is natural
import threading

class SharedData:
    def __init__(self):
        self.value = 0
        self.lock = threading.Lock()
    
    def increment(self):
        with self.lock:
            self.value += 1

# Multiple threads can share the same object
shared = SharedData()
# Pass shared to multiple threads...`}
          rustCode={`// Rust: Shared ownership with smart pointers
use std::sync::{Arc, Mutex};
use std::thread;

#[derive(Debug)]
struct SharedData {
    value: i32,
}

fn main() {
    let shared = Arc::new(Mutex::new(SharedData { value: 0 }));
    
    let handles: Vec<_> = (0..3).map(|_| {
        let shared_clone = Arc::clone(&shared);
        thread::spawn(move || {
            let mut data = shared_clone.lock().unwrap();
            data.value += 1;
        })
    }).collect();
    
    for handle in handles {
        handle.join().unwrap();
    }
}`}
          title="Shared Ownership with Smart Pointers"
        />

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Ownership prevents bugs:</strong> No use-after-free, no data races</li>
          <li><strong>Zero-cost abstractions:</strong> Safety without runtime overhead</li>
          <li><strong>Explicit is better:</strong> Memory management is visible and predictable</li>
          <li><strong>Borrowing is lending:</strong> Use references when you don't need ownership</li>
          <li><strong>Smart pointers for flexibility:</strong> When ownership rules are too strict</li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 my-8">
          <h3 className="text-blue-800 dark:text-blue-200 font-semibold mb-2">Think of it this way:</h3>
          <ul className="text-blue-800 dark:text-blue-200 space-y-2">
            <li><strong>Python:</strong> "Everything is a reference, garbage collector cleans up"</li>
            <li><strong>Rust:</strong> "Everything has an owner, cleanup happens when owner goes away"</li>
            <li><strong>Python:</strong> "Pass objects around freely"</li>
            <li><strong>Rust:</strong> "Lend with &, give away with move, copy with .clone()"</li>
          </ul>
        </div>

        <p>
          The ownership system might feel restrictive at first, but it prevents entire classes of bugs 
          that can occur in Python (especially in concurrent code). The compiler becomes your pair 
          programming partner, catching issues before they reach production.
        </p>
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/tutorials/variables-and-mutability"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-rust-orange"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous: Variables & Mutability
        </Link>
        
        <Link
          href="/tutorials/rust-modules-vs-python-packages"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80"
        >
          Next: Modules vs Packages
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
