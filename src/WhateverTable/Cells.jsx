import React from 'react'
import PropTypes from 'prop-types'

Cell.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,
  style: PropTypes.object,
}

Cell.defaultProps = {
  className: '',
  data: '',
  style: {},
}

export function Cell({
  className,
  data,
  style,
}) {
  return (
    <td {...{ className, style }}>
      {data}
    </td>
  )
}

Header.propTypes = {
  ...Cell.propTypes,
}

Header.defaultProps = {
  ...Cell.defaultProps,
}

export function Header({
  className,
  data,
  style,
}) {
  return (
    <th {...{ className, style }}>
      {data}
    </th>
  )
}
