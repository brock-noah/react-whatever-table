import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { Row } from './Rows'
import { Cell, Header } from './Cells'

export class Table extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    getData: PropTypes.func,
    row: PropTypes.func,
    style: PropTypes.object,
  }

  static defaultProps = {
    data: [],
    getData: (property, obj) => obj[property],
    row: Row,
  }

  render() {
    const {
      children,
      className,
      data,
      getData,
      row: TrComponent,
      style,
    } = this.props

    return (
      <table {...{ className, style }}>
        <thead>
          <tr>
            {Children.map(children, (column, columnIndex) => {
              const def = column.props
              const data = def.label
              const ThComponent = def.header || Header

              return <ThComponent {...{
                ...def.cellProps,
                data,
                key: columnIndex,
                column: {
                  name: def.name,
                  cellType: ThComponent.name,
                  coordinate: { x: def.name, y: 0 },
                  label: def.label,
                }
              }} />
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) =>
            <TrComponent {...{ key: rowIndex }}>
              {Children.map(children, (column, columnIndex) => {
                const def = column.props
                const data = getData(def.name, rowData)
                const TdComponent = def.cell || Cell

                return <TdComponent {...{
                  ...def.cellProps,
                  data,
                  key: columnIndex,
                  column: {
                    name: def.name,
                    cellType: TdComponent.name,
                    coordinate: { x: def.name, y: rowIndex },
                    label: def.label,
                  }
                }} />
              })}
            </TrComponent>
          )}
        </tbody>
      </table>
    )
  }
}
