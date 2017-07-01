import React, { Component } from 'react'
import { Table, Column } from './WhateverTable'

const CoorCell = ({ msg, column }) =>
  <td>
    {msg} [{column.coordinate.x}, {column.coordinate.y}]
  </td>

class App extends Component {

  state = {
    arrayObjects: [
      { first: 1, second: 2, third: false },
      { first: 11, second: 22, third: true },
      { first: 'one', second: 'two', third: true}
    ],
    arrayArrays: [[1,2,false], [11,22,true], ['one','two',true]],
  }

  clickObjects = ({ x, y }) => (e) => {
    this.state.arrayObjects[y][x] = !this.state.arrayObjects[y][x]
    this.setState({ arrayObjects: this.state.arrayObjects })
  }

  clickArrays = ({ x, y }) => (e) => {
    this.state.arrayArrays[y][x] = !this.state.arrayArrays[y][x]
    this.setState({ arrayArrays: this.state.arrayArrays })
  }

  render() {
    return (
      <div>
        <Table data={this.state.arrayObjects}>
          <Column name="first" label="1st" />
          <Column name="second" label="2nd" cell={CoorCell} cellProps={{ msg: 'Coordinate' }} />
          <Column name="third" label="Yes?" cell={(props) =>
            <td>
              <input
                type="checkbox"
                checked={props.data}
                onChange={this.clickObjects(props.column.coordinate)}
              />
            </td>
          } />
        </Table>
        <button onClick={e => {
          const selected = this.state.arrayObjects.filter(row => !!row.third)
          alert(JSON.stringify(selected))
        }}>Go</button>
        <hr />
        <Table data={this.state.arrayArrays}>
          <Column name={0} label="1st" />
          <Column name={1} label="2nd" cell={CoorCell} cellProps={{ msg: 'Coordinate' }} />
          <Column name={2} label="Yes?" cell={(props) =>
            <td>
              <input
                type="checkbox"
                checked={props.data}
                onChange={this.clickArrays(props.column.coordinate)}
              />
            </td>
          } />
        </Table>
        <button onClick={e => {
          const selected = this.state.arrayArrays.filter(row => !!row[2])
          alert(JSON.stringify(selected))
        }}>Go</button>
      </div>
    );
  }
}

export default App
