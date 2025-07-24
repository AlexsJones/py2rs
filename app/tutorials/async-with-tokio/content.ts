export const TUTORIAL_METADATA = {
  title: 'Async Programming with Tokio',
  description: 'Learn how to write asynchronous Rust code with Tokio, comparing it to Python\'s asyncio.',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction to Async Programming',
      content: `
        <p>Asynchronous programming allows you to write concurrent code that can handle many operations at the same time without blocking the execution of your program. This is particularly useful for I/O-bound operations like network requests or file operations.</p>
        <p>In Python, you use <code>asyncio</code> for asynchronous programming, while in Rust, the most popular choice is <code>tokio</code>.</p>
      `
    },
    {
      id: 'setup',
      title: 'Setting Up Async Projects',
      content: `
        <p>Let's look at how to set up an async project in both Python and Rust.</p>
      `,
      code: 'setup',
      codeTitle: 'Project Setup',
      codeDescription: 'Setting up an async project in Python vs Rust.'
    },
    {
      id: 'async-functions',
      title: 'Async/Await Syntax',
      content: `
        <p>Both Python and Rust use the <code>async/await</code> syntax for writing asynchronous code. Here's how they compare:</p>
      `,
      code: 'asyncFunctions',
      codeTitle: 'Async Functions',
      codeDescription: 'Defining and calling async functions in both languages.'
    },
    {
      id: 'concurrency',
      title: 'Running Concurrent Tasks',
      content: `
        <p>Running multiple tasks concurrently is a common pattern in async programming. Here's how to do it in both languages.</p>
      `,
      code: 'concurrency',
      codeTitle: 'Concurrent Tasks',
      codeDescription: 'Running multiple tasks concurrently in Python and Rust.'
    },
    {
      id: 'http-requests',
      title: 'Making HTTP Requests',
      content: `
        <p>Making HTTP requests is a common use case for async programming. Here's how to do it in both languages.</p>
      `,
      code: 'httpRequests',
      codeTitle: 'HTTP Requests',
      codeDescription: 'Making concurrent HTTP requests in Python and Rust.'
    },
    {
      id: 'channels',
      title: 'Communication Between Tasks',
      content: `
        <p>Channels provide a way to communicate between concurrent tasks. Here's how they work in both languages.</p>
      `,
      code: 'channels',
      codeTitle: 'Channels',
      codeDescription: 'Using channels for communication between tasks.'
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      content: `
        <p>Proper error handling is crucial in async code. Here's how to handle errors in both languages.</p>
      `,
      code: 'errorHandling',
      codeTitle: 'Error Handling',
      codeDescription: 'Handling errors in async code.'
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      content: `
        <p>Here are some best practices for writing async code in both Python and Rust.</p>
      `
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
      content: `
        <p>Both Python's asyncio and Rust's Tokio provide powerful tools for writing asynchronous code. While the concepts are similar, the implementation details differ between the two languages.</p>
        <p>Rust's strong type system and ownership model provide additional safety guarantees, while Python's dynamic nature makes it more concise and easier to get started with.</p>
      `
    }
  ]
};

export const CODE_EXAMPLES = {
  setup: {
    python: `# Python: Built into the standard library
import asyncio

# Python 3.7+
async def main():
    print("Hello, asyncio!")

asyncio.run(main())`,
    rust: `// Rust: Add to Cargo.toml
// [dependencies]
// tokio = { version = "1.0", features = ["full"] }

#[tokio::main]
async fn main() {
    println!("Hello, Tokio!");
}`
  },
  asyncFunctions: {
    python: `import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(1)
    return {"data": 42}

async def main():
    result = await fetch_data()
    print(f"Got data: {result}")

asyncio.run(main())`,
    rust: `use std::time::Duration;
use tokio::time::sleep;

async fn fetch_data() -> serde_json::Value {
    println!("Fetching data...");
    sleep(Duration::from_secs(1)).await;
    serde_json::json!({ "data": 42 })
}

#[tokio::main]
async fn main() {
    let result = fetch_data().await;
    println!("Got data: {}", result);
}`
  },
  concurrency: {
    python: `import asyncio

async def task(name, seconds):
    print(f"Task {name} started")
    await asyncio.sleep(seconds)
    print(f"Task {name} completed")
    return f"Task {name} result"

async def main():
    # Run tasks concurrently
    tasks = [
        asyncio.create_task(task("A", 2)),
        asyncio.create_task(task("B", 1)),
        asyncio.create_task(task("C", 3))
    ]
    
    # Wait for all tasks to complete
    results = await asyncio.gather(*tasks)
    print("All tasks completed:", results)

asyncio.run(main())`,
    rust: `use std::time::Duration;
use tokio::time::sleep;

async fn task(name: &str, seconds: u64) -> String {
    println!("Task {} started", name);
    sleep(Duration::from_secs(seconds)).await;
    println!("Task {} completed", name);
    format!("Task {} result", name)
}

#[tokio::main]
async fn main() {
    // Spawn tasks to run concurrently
    let task_a = tokio::spawn(task("A", 2));
    let task_b = tokio::spawn(task("B", 1));
    let task_c = tokio::spawn(task("C", 3));

    // Wait for all tasks to complete
    let (a, b, c) = tokio::join!(
        task_a,
        task_b,
        task_c
    );

    println!("All tasks completed: {:?}", (a, b, c));
}`
  },
  httpRequests: {
    python: `import aiohttp
import asyncio

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    urls = [
        'https://httpbin.org/get',
        'https://api.github.com',
        'https://www.rust-lang.org'
    ]
    
    tasks = [fetch_url(url) for url in urls]
    results = await asyncio.gather(*tasks)
    
    for url, content in zip(urls, results):
        print(f"{url} returned {len(content)} bytes")

asyncio.run(main())`,
    rust: `use reqwest;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let urls = [
        "https://httpbin.org/get",
        "https://api.github.com",
        "https://www.rust-lang.org"
    ];
    
    let client = reqwest::Client::new();
    let mut tasks = vec![];
    
    for url in urls.iter() {
        let client = client.clone();
        let url = url.to_string();
        
        tasks.push(tokio::spawn(async move {
            match client.get(&url).send().await {
                Ok(resp) => {
                    let text = resp.text().await.unwrap_or_default();
                    (url, text.len())
                }
                Err(_) => (url, 0)
            }
        }));
    }
    
    for task in tasks {
        if let Ok((url, len)) = task.await {
            println!("{} returned {} bytes", url, len);
        }
    }
    
    Ok(())
}`
  },
  channels: {
    python: `import asyncio

async def producer(queue, id):
    for i in range(3):
        msg = f"Message {i} from producer {id}"
        await queue.put(msg)
        print(f"Produced: {msg}")
        await asyncio.sleep(0.5)
    await queue.put(None)  # Sentinel value

async def consumer(queue, id):
    while True:
        msg = await queue.get()
        if msg is None:  # Check for sentinel
            await queue.put(None)  # Notify other consumers
            break
        print(f"Consumer {id} got: {msg}")
        await asyncio.sleep(0.1)  # Simulate work
    print(f"Consumer {id} done")

async def main():
    queue = asyncio.Queue()
    
    # Start producers and consumers
    producers = [asyncio.create_task(producer(queue, i)) for i in range(2)]
    consumers = [asyncio.create_task(consumer(queue, i)) for i in range(3)]
    
    # Wait for producers to finish
    await asyncio.gather(*producers)
    
    # Signal consumers to exit
    await queue.put(None)
    
    # Wait for consumers to finish
    await asyncio.gather(*consumers)

asyncio.run(main())`,
    rust: `use tokio::sync::mpsc;
use std::time::Duration;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(32);
    let mut handles = vec![];
    
    // Spawn producers
    for i in 0..2 {
        let tx = tx.clone();
        handles.push(tokio::spawn(async move {
            for j in 0..3 {
                let msg = format!("Message {} from producer {}", j, i);
                tx.send(Some(msg.clone())).await.unwrap();
                println!("Produced: {}", msg);
                tokio::time::sleep(Duration::from_millis(500)).await;
            }
            // Send None to signal completion
            let _ = tx.send(None).await;
        }));
    }
    
    // Drop the original sender
    drop(tx);
    
    // Spawn consumers
    let mut consumer_handles = vec![];
    for i in 0..3 {
        let mut rx = rx.clone();
        consumer_handles.push(tokio::spawn(async move {
            while let Some(Some(msg)) = rx.recv().await {
                println!("Consumer {} got: {}", i, msg);
                tokio::time::sleep(Duration::from_millis(100)).await;
            }
            println!("Consumer {} done", i);
        }));
    }
    
    // Wait for all producers and consumers to complete
    for handle in handles.into_iter().chain(consumer_handles) {
        let _ = handle.await;
    }
}`
  },
  errorHandling: {
    python: `import asyncio

async def might_fail():
    await asyncio.sleep(1)
    if True:  # Simulate an error
        raise ValueError("Something went wrong")
    return "Success"

async def main():
    try:
        result = await might_fail()
        print(f"Result: {result}")
    except Exception as e:
        print(f"Error: {e}")
    
    # Handle multiple errors with gather
    tasks = [might_fail() for _ in range(3)]
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    for i, result in enumerate(results):
        if isinstance(result, Exception):
            print(f"Task {i} failed: {result}")
        else:
            print(f"Task {i} succeeded: {result}")

asyncio.run(main())`,
    rust: `use std::time::Duration;
use tokio::time::sleep;

async fn might_fail() -> Result<String, String> {
    sleep(Duration::from_secs(1)).await;
    if true { // Simulate an error
        return Err("Something went wrong".to_string());
    }
    Ok("Success".to_string())
}

#[tokio::main]
async fn main() {
    // Handle single error
    match might_fail().await {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
    }
    
    // Handle multiple errors with join_all
    let tasks = vec![
        tokio::spawn(might_fail()),
        tokio::spawn(might_fail()),
        tokio::spawn(might_fail()),
    ];
    
    let results = futures::future::join_all(tasks).await;
    
    for (i, result) in results.into_iter().enumerate() {
        match result {
            Ok(Ok(value)) => println!("Task {} succeeded: {}", i, value),
            Ok(Err(e)) => println!("Task {} failed: {}", i, e),
            Err(join_err) => println!("Task {} panicked: {}", i, join_err),
        }
    }
}`
  }
};
