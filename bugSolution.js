```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```