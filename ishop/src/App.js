import './App.css';
import { useState } from 'react'

const goods = [
  {Name:"product1", Price:"30", URL:"http://111.com", Quantity:"20"},
  {Name:"product2", Price:"40", URL:"http://222.com", Quantity:"30"},
  {Name:"product3", Price:"56", URL:"http://333.com", Quantity:"40"},
  {Name:"product4", Price:"40", URL:"http://444.com", Quantity:"20"},
  {Name:"product5", Price:"77", URL:"http://555.com", Quantity:"20"},
  {Name:"product6", Price:"30", URL:"http://666.com", Quantity:"20"}
]

const Row = (props) => {
  const {Name, Price, URL, Quantity} = props
  return(<tr>
    <td>{Name}</td>
    <td>{Price}</td>
    <td>{URL}</td>
    <td>{Quantity}</td>
  </tr>)
}



const Table = (props) =>{
  const {data} = props
  return(<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>URL</th>
        <th>Quantity</th>
        <th>Control</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => 
        <Row Name = {row.Name}
        Price = {row.Price}
        URL = {row.URL}
        Quantity = {row.Quantity}/>
      )}
    </tbody>
  </table>)
}

function App() {

  const [rows, setRows] = useState(goods)
  return (
    <div className="App">
      
      <Table data = {rows}/>
    </div>
  );
}

export default App;
