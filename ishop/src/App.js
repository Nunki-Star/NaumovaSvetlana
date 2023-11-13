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
  const {Name, Price, URL, Quantity, delRow, index} = props
  return(<tr>
    <td>{Name}</td>
    <td>{Price}</td>
    <td>{URL}</td>
    <td>{Quantity}</td>
    <td>
      <button onClick = {
      () => { delRow(index) }
    }>Delete</button>
    </td>
  </tr>)
}



const Table = (props) =>{
  const {data, delRow} = props
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
      {data.map((row, index) => 
        <Row key = {`key${index}`}
        Name = {row.Name}
        Price = {row.Price}
        URL = {row.URL}
        Quantity = {row.Quantity}
        delRow = {delRow}
        index = {index}/>
      )}
    </tbody>
  </table>)
}

function App() {

  const [rows, setRows] = useState(goods)

  const deleteRow = (number) =>  {
    let copy = [...rows]
    copy = copy.filter(
      (item, index) => number != index
    )
    setRows(copy)
  }

  return (
    <div className="App">
      
      <Table data = {rows}
        delRow = {deleteRow} />
    </div>
  );
}

export default App;
