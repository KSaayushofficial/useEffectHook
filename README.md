📖 Introduction:
The useEffect Hook allows you to perform side effects in functional components. It is commonly used for fetching data, managing subscriptions, handling timers, and updating the DOM after render.

🚀 Why useEffect?
Runs after the component renders.
Can be controlled to run only when specific values change.
Supports cleanup functions to prevent memory leaks.

📌 Common Use Cases:
✔ Fetching data from an API
✔ Subscribing to events (WebSockets, Firebase, etc.)
✔ Managing timers (setTimeout, setInterval)
✔ Updating the document title or modifying the DOM
✔ Cleaning up event listeners when a component unmounts

⚡ Behavior of useEffect:
By default, it runs after every render.
Can be configured to run only once (on mount) or only when dependencies change.
Supports a cleanup function to handle unsubscriptions and memory management.

🛠 Best Practices:
Use dependencies wisely to avoid unnecessary re-renders.
Always clean up subscriptions and timers in the cleanup function.
Avoid unnecessary API calls by optimizing dependency arrays.

📜 Key Takeaways:
useEffect simplifies handling side effects in functional components.
Proper dependency management ensures optimized performance.
Cleanup functions prevent memory leaks and ensure better app performance.

🔗 Additional Resources:
React Official Documentation
React Hooks Guide
