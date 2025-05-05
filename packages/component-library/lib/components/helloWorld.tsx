import { useState } from 'react';

function HelloWorld() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hello from Comp Lib</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export { HelloWorld };
