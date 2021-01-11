import React from 'react'

export default ({ id, name }) => (
  <div key={id} className="color">{`${name}`}</div>
)
