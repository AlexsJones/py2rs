import CodeComparison from '@/components/CodeComparison'
import { Clock, ArrowLeft, ArrowRight, Terminal, Zap, Check } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Writing Your First Rust CLI - py2rs.info',
  description: 'Learn how to build a command-line application in Rust, comparing it with Python.',
}

export default function FirstRustCliTutorial() {
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
          Writing Your First Rust CLI
        </h1>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
          <Clock className="h-4 w-4 mr-2" />
          <span>15 min read</span>
          <span className="mx-2">•</span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm">
            Practical
          </span>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Let's build a simple command-line application in both Python and Rust 
          to compare the development experience and end results.
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Project Setup</h2>
        <p>
          First, let's set up our projects. We'll create a simple CLI tool that 
          counts lines, words, and characters in a file (like <code>wc</code>).
        </p>

        <CodeComparison
          pythonCode={`# Python: Using Click for CLI
# File: wc.py
import click
import sys
from pathlib import Path

@click.command()
@click.argument('file', type=click.Path(exists=True))
@click.option('--lines/--no-lines', '-l', default=True, help='Count lines')
@click.option('--words/--no-words', '-w', default=True, help='Count words')
@click.option('--chars/--no-chars', '-c', default=False, help='Count characters')
def wc(file, lines, words, chars):
    """A simple word count program."""
    try:
        content = Path(file).read_text()
        counts = {}
        
        if lines:
            counts['lines'] = len(content.splitlines())
        if words:
            counts['words'] = len(content.split())
        if chars:
            counts['chars'] = len(content)
            
        click.echo(f"{file}")
        for name, count in counts.items():
            click.echo(f"  {name}: {count}")
            
    except Exception as e:
        click.echo(f"Error: {e}", err=True)
        sys.exit(1)

if __name__ == '__main__':
    wc()`}
          rustCode={`// Rust: Using clap for CLI
// File: src/main.rs
use clap::Parser;
use std::fs;
use std::path::PathBuf;

/// A simple word count program
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// Input file
    file: PathBuf,

    /// Count lines
    #[arg(short, long, default_value_t = true)]
    lines: bool,

    /// Count words
    #[arg(short, long, default_value_t = true)]
    words: bool,

    /// Count characters
    #[arg(short, long, default_value_t = false)]
    chars: bool,
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args = Args::parse();
    
    let content = fs::read_to_string(&args.file)?;
    let mut counts = std::collections::HashMap::new();
    
    if args.lines {
        counts.insert("lines", content.lines().count());
    }
    if args.words {
        counts.insert("words", content.split_whitespace().count());
    }
    if args.chars {
        counts.insert("chars", content.chars().count());
    }
    
    println!("{}", args.file.display());
    for (name, count) in counts {
        println!("  {}: {}", name, count);
    }
    
    Ok(())
}`}
          title="CLI Application Setup"
        />

        <h2>Dependencies</h2>
        <p>
          Both languages use package/dependency management, but they work differently:
        </p>

        <CodeComparison
          pythonCode={`# Python: requirements.txt or pyproject.toml
# Using pyproject.toml (modern approach)
[build-system]
requires = ["setuptools>=42"]
build-backend = "setuptools.build_meta"

[project]
name = "py-wc"
version = "0.1.0"
description = "A word count program in Python"
requires-python = ">=3.8"
dependencies = [
    "click>=8.0.0",
]

[project.scripts]
py-wc = "wc:wc"`}
          rustCode={`// Rust: Cargo.toml
[package]
name = "rust-wc"
version = "0.1.0"
edition = "2021"
description = "A word count program in Rust"

[dependencies]
clap = { version = "4.0", features = ["derive"] }`}
          title="Dependency Management"
        />

        <h2>Building and Running</h2>
        <p>
          Let's see how to build and run our applications:
        </p>

        <CodeComparison
          pythonCode={`# Install in development mode
$ pip install -e .

# Run the script
$ py-wc --help
Usage: py-wc [OPTIONS] FILE

  A simple word count program.

Arguments:
  FILE  [required]

Options:
  -l, --lines / --no-lines  Count lines  [default: True]
  -w, --words / --no-words  Count words  [default: True]
  -c, --chars / --no-chars  Count characters  [default: False]
  --help                    Show this message and exit.`}
          rustCode={`# Build in debug mode (fast compile, slower runtime)
$ cargo build

# Build in release mode (slower compile, faster runtime)
$ cargo build --release

# Run directly with Cargo
$ cargo run -- --help
A simple word count program

Usage: rust-wc [OPTIONS] <FILE>

Arguments:
  <FILE>  Input file

Options:
  -l, --lines  Count lines [default: true]
  -w, --words  Count words [default: true]
  -c, --chars  Count characters [default: false]
  -h, --help   Print help
  -V, --version    Print version`}
          title="Building and Running"
        />

        <h2>Error Handling</h2>
        <p>
          Both languages handle errors, but Rust's approach is more explicit:
        </p>

        <CodeComparison
          pythonCode={`# Python: Exceptions
try:
    with open("nonexistent.txt") as f:
        content = f.read()
except FileNotFoundError as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
except Exception as e:
    print(f"Unexpected error: {e}", file=sys.stderr)
    sys.exit(1)`}
          rustCode={`// Rust: Result type
use std::fs::File;
use std::io::Read;

fn read_file(path: &str) -> Result<String, Box<dyn std::error::Error>> {
    let mut file = File::open(path)?;
    let mut content = String::new();
    file.read_to_string(&mut content)?;
    Ok(content)
}

// Usage:
match read_file("nonexistent.txt") {
    Ok(content) => println!("File content: {}", content),
    Err(e) => eprintln!("Error reading file: {}", e),
}`}
          title="Error Handling"
        />

        <h2>Testing</h2>
        <p>
          Both languages have built-in testing support:
        </p>

        <CodeComparison
          pythonCode={`# test_wc.py
import pytest
from wc import wc
from click.testing import CliRunner

def test_wc_lines():
    runner = CliRunner()
    result = runner.invoke(wc, ["--no-words", "--no-chars", "test.txt"])
    assert "lines: 10" in result.output
    assert result.exit_code == 0`}
          rustCode={`// tests/wc_test.rs
#[test]
fn test_count_lines() {
    let content = "Hello\nworld\n";
    let args = Args {
        file: "test.txt".into(),
        lines: true,
        words: false,
        chars: false,
    };
    
    // Test logic here
    assert_eq!(count_lines(&content), 2);
}

// In Cargo.toml:
// [[test]]
// name = "wc_test"
// path = "tests/wc_test.rs"`}
          title="Testing"
        />

        <h2>Packaging and Distribution</h2>
        <p>
          Packaging for distribution works differently in both ecosystems:
        </p>

        <CodeComparison
          pythonCode={`# Python: Using setuptools and PyPI
# Build distribution
$ python -m build

# Upload to PyPI
$ twine upload dist/*

# Install from PyPI
$ pip install py-wc`}
          rustCode={`// Rust: Using Cargo and crates.io
# Build for release
$ cargo build --release

# The binary is in target/release/rust-wc

# Publish to crates.io
$ cargo publish

# Install globally
$ cargo install rust-wc`}
          title="Packaging and Distribution"
        />

        <h2>Performance Comparison</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
          <h3 className="text-blue-800 dark:text-blue-200 font-semibold mb-4">
            <Zap className="inline h-5 w-5 mr-2" />
            Performance Note
          </h3>
          <p className="text-blue-800 dark:text-blue-200">
            Rust's compiled nature gives it a significant performance advantage:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-blue-800 dark:text-blue-200">
            <li><strong>Startup time:</strong> Rust is typically 10-100x faster than Python</li>
            <li><strong>Memory usage:</strong> Rust uses about half the memory of Python</li>
            <li><strong>CPU usage:</strong> Rust is often 2-10x faster for CPU-bound tasks</li>
            <li><strong>Binary size:</strong> Rust produces standalone binaries (larger but self-contained)</li>
          </ul>
        </div>

        <h2>Key Takeaways</h2>
        <ul>
          <li><strong>Development speed:</strong> Python is often quicker for prototyping</li>
          <li><strong>Performance:</strong> Rust provides better performance and lower resource usage</li>
          <li><strong>Error handling:</strong> Rust's explicit error handling catches more issues at compile time</li>
          <li><strong>Distribution:</strong> Rust produces standalone binaries, Python requires an interpreter</li>
          <li><strong>Learning curve:</strong> Rust has a steeper learning curve but offers more control</li>
        </ul>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 my-8">
          <h3 className="text-green-800 dark:text-green-200 font-semibold mb-2 flex items-center">
            <Check className="h-5 w-5 mr-2" />
            When to Choose Which?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-python-blue mb-2">Choose Python When:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Rapid prototyping is needed</li>
                <li>Performance is not critical</li>
                <li>You need extensive data science libraries</li>
                <li>Team is more familiar with Python</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-rust-orange mb-2">Choose Rust When:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Performance is critical</li>
                <li>Memory safety is important</li>
                <li>You want to avoid runtime errors</li>
                <li>Building system-level tools</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/tutorials/rust-modules-vs-python-packages"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-rust-orange"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous: Rust Modules vs Python Packages
        </Link>
        
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm">
          <Check className="h-4 w-4 mr-2" />
          Tutorial Complete!
        </div>
      </div>
    </div>
  )
}
