 import React, { useState } from "react"
 import Header from "./components/Header"

function App() {

  const[items, seItems] = useState([
    {id: 1,name:"Urea 50kg"},
    {id: 2,name:"DAP 50kg"},
    {id: 3,name:"Potash 50kg"}
    
  ])
  const hasItems = items.length > 0

return (
 <div style={{ padding: "16px", fontFamily: "Arial", maxWidth: "420px", margin: "0 auto" }}>
 <Header title="Warehouse Stock Handling App" />

 
  <h3>Available Items</h3>


{
  hasItems && (
     <ul>
    {items.map(item=>(
     <li key= {item.id}>{items.name}</li> 
    ))}
    </ul>
  )
}
    {!hasItems && <p>No items available</p>} 
  </div>

);
 }
export default App;
