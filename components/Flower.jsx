import React from 'react'

export default ({ id, name, seasonId }) => (
  <div key={id} className="flower">{`${name} (${seasonId})`}</div>
)