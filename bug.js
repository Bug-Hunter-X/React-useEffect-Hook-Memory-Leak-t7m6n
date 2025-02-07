```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a memory leak if the component unmounts before the timeout
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // This is missing, causing a memory leak
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```