import CodeComparison from '@/components/CodeComparison'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Rust Modules vs Python Packages - py2rs.info',
  description: 'Compare and contrast how code organization works in Rust modules versus Python packages.',
}

export default function RustModulesVsPythonPackagesTutorial() {
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
          Rust Modules vs Python Packages
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
          Code organization is crucial in any programming language. Let's explore how Rust's 
          module system compares to Python's package structure and learn the best practices 
          for organizing your Rust projects.
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Python Package Structure</h2>
        <p>
          In Python, you organize code using files and directories. Each directory with an 
          <code>__init__.py</code> file becomes a package:
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 border border-gray-300 dark:border-gray-700">
          <div className="text-gray-600 dark:text-gray-400 mb-2">Python Project Structure:</div>
          <pre className="text-gray-900 dark:text-gray-100">{`my_project/
├── __init__.py
├── main.py
├── utils/
│   ├── __init__.py
│   ├── helpers.py
│   └── math_ops.py
└── models/
    ├── __init__.py
    ├── user.py
    └── product.py`}</pre>
        </div>

        <CodeComparison
          pythonCode={`# utils/math_ops.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# utils/__init__.py
from .math_ops import add, multiply

# main.py
from utils import add, multiply
# or
from utils.math_ops import add

result = add(5, 3)`}
          rustCode={`// src/utils/math_ops.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

pub fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

// src/utils/mod.rs
pub mod math_ops;
pub use math_ops::{add, multiply};

// src/main.rs
mod utils;
use utils::{add, multiply};

fn main() {
    let result = add(5, 3);
}`}
          title="Basic Module Structure"
        />

        <h2>Rust Module System</h2>
        <p>
          Rust uses a different approach. Instead of relying on the file system alone, 
          Rust has explicit module declarations:
        </p>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6 border border-gray-300 dark:border-gray-700">
          <div className="text-gray-600 dark:text-gray-400 mb-2">Rust Project Structure:</div>
          <pre className="text-gray-900 dark:text-gray-100">{`my_project/
├── Cargo.toml
└── src/
    ├── main.rs
    ├── utils/
    │   ├── mod.rs
    │   └── math_ops.rs
    └── models/
        ├── mod.rs
        ├── user.rs
        └── product.rs`}</pre>
        </div>

        <h2>Module Declaration and Visibility</h2>
        <p>
          One key difference is that Rust requires explicit module declarations and 
          visibility controls:
        </p>

        <CodeComparison
          pythonCode={`# Python: Everything is public by convention
# utils/helpers.py
def public_function():
    return "I'm public"

def _private_function():  # Convention: starts with _
    return "I'm private by convention"

# main.py
from utils.helpers import public_function, _private_function
# Both work, privacy is just convention`}
          rustCode={`// Rust: Explicit visibility control
// src/utils/helpers.rs
pub fn public_function() -> &'static str {
    "I'm public"
}

fn private_function() -> &'static str {  // No 'pub' = private
    "I'm private"
}

// src/main.rs
mod utils;
use utils::helpers::public_function;
// use utils::helpers::private_function;  // ❌ Error! Not public`}
          title="Visibility Control"
        />

        <h2>Importing and Using Code</h2>
        <p>
          Both languages have ways to import and use code from other modules, 
          but the syntax and behavior differ:
        </p>

        <CodeComparison
          pythonCode={`# Python imports
import json
import os.path
from collections import defaultdict
from typing import List, Dict

# Relative imports
from .utils import helper_function
from ..models import User

# Aliasing
import numpy as np
from datetime import datetime as dt`}
          rustCode={`// Rust use statements
use std::collections::HashMap;
use std::fs;
use std::path::Path;

// Multiple imports from same module
use std::io::{self, Read, Write};

// Relative imports (within your crate)
use crate::utils::helper_function;
use super::models::User;

// Aliasing
use std::collections::HashMap as Map;`}
          title="Import Syntax Comparison"
        />

        <h2>Re-exports and Module Organization</h2>
        <p>
          Both languages support re-exporting symbols to create cleaner APIs:
        </p>

        <CodeComparison
          pythonCode={`# Python re-exports
# mylib/__init__.py
from .core import CoreClass
from .utils import helper_function
from .advanced import AdvancedFeature

# Users can import directly from mylib
# from mylib import CoreClass, helper_function

# Or create aliases
from .core import CoreClass as Core`}
          rustCode={`// Rust re-exports
// src/lib.rs
mod core;
mod utils;
mod advanced;

// Re-export for easier access
pub use core::CoreStruct;
pub use utils::helper_function;
pub use advanced::AdvancedFeature;

// Users can import directly
// use mylib::{CoreStruct, helper_function};

// Or create aliases
pub use core::CoreStruct as Core;`}
          title="Re-exports"
        />

        <h2>Inline Modules vs Separate Files</h2>
        <p>
          Rust allows you to define modules inline or in separate files, 
          giving you more flexibility than Python:
        </p>

        <CodeComparison
          pythonCode={`# Python: Always separate files for modules
# You can't define a module inline in Python
# Each .py file is a module

# utils.py
def helper():
    pass

# main.py
import utils
utils.helper()`}
          rustCode={`// Rust: Inline modules
mod utils {
    pub fn helper() {
        println!("Helper function");
    }
    
    mod private_submodule {
        pub fn internal_function() {
            println!("Internal");
        }
    }
}

fn main() {
    utils::helper();
}

// Or separate files (like Python)
// mod utils;  // Looks for utils.rs or utils/mod.rs`}
          title="Inline vs File Modules"
        />

        <h2>Best Practices Comparison</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-python-blue/5 border border-python-blue/20 rounded-lg p-6">
            <h3 className="text-python-blue font-semibold mb-4">Python Best Practices</h3>
            <ul className="space-y-2 text-sm">
              <li>• Use <code>__init__.py</code> to control package API</li>
              <li>• Follow PEP 8 naming conventions</li>
              <li>• Use relative imports within packages</li>
              <li>• Keep modules focused and cohesive</li>
              <li>• Use <code>__all__</code> to control <code>from module import *</code></li>
            </ul>
          </div>
          
          <div className="bg-rust-orange/5 border border-rust-orange/20 rounded-lg p-6">
            <h3 className="text-rust-orange font-semibold mb-4">Rust Best Practices</h3>
            <ul className="space-y-2 text-sm">
              <li>• Use <code>mod.rs</code> or <code>lib.rs</code> to control module API</li>
              <li>• Follow Rust naming conventions (snake_case)</li>
              <li>• Use <code>pub use</code> for re-exports</li>
              <li>• Keep modules focused and cohesive</li>
              <li>• Use <code>crate::</code> for absolute paths within your crate</li>
            </ul>
          </div>
        </div>

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Explicit vs Implicit:</strong> Rust requires explicit module declarations, Python uses file system</li>
          <li><strong>Visibility:</strong> Rust has compile-time privacy, Python uses conventions</li>
          <li><strong>Re-exports:</strong> Both support clean APIs through re-exports</li>
          <li><strong>Flexibility:</strong> Rust allows inline modules, Python requires separate files</li>
          <li><strong>Organization:</strong> Both support hierarchical code organization</li>
        </ul>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 my-8">
          <p className="text-green-800 dark:text-green-200">
            <strong>Pro Tip:</strong> Start with Rust's module system by thinking about your Python package structure, 
            then add explicit <code>mod</code> declarations and <code>pub</code> keywords where needed. 
            The compiler will guide you through any issues!
          </p>
        </div>
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/tutorials/ownership-for-pythonistas"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-rust-orange"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous: Ownership for Pythonistas
        </Link>
        
        <Link
          href="/tutorials/first-rust-cli"
          className="inline-flex items-center text-rust-orange hover:text-rust-orange/80"
        >
          Next: Your First Rust CLI
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
