import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React CI/CD</h1>
        <p>Basic React.js with GitHub Actions Integration</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Click the button to test interactivity</p>
        </div>

        <div className="features">
          <h2>CI/CD Features</h2>
          <ul>
            <li>✅ Automated Testing</li>
            <li>✅ Code Linting</li>
            <li>✅ Build Verification</li>
            <li>✅ GitHub Actions Workflow</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App

