import React from 'react'
import PropTypes from 'prop-types'

Row.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
}

export function Row({
  children,
  className,
  style,
}) {
  return (
    <tr {...{ className, style }}>
      {children}
    </tr>
  )
}
