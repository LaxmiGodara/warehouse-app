 import React, { useState } from "react"
 import Header from "./components/Header"
function App() {
const [clicks, setClicks] = useState(0)
function handleClick() {
 setClicks(clicks + 1)
 }
return (
 <div style={{ padding: "16px", fontFamily: "Arial", maxWidth: "420px", margin: "0 auto" }}>
 <Header title="Warehouse Stock Handling App" />

  <p style={{ fontSize: "14px", lineHeight: "20px" }}>
    Today we learned how state and events work in React.
  </p>

  <div style={{ marginTop: "20px", padding: "12px", border: "1px solid #ccc", borderRadius: "6px" }}>
    <p>You clicked: {clicks}</p>
    <button onClick={handleClick} style={{ padding: "8px", marginTop: "8px" }}>
      Click Me
    </button>
  </div>

</div>

)
 }
export default App
