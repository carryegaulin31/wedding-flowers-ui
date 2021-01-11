import React from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div className="page">
      <div className="title">Wedding Flowers UI</div>
      <div className="subtitle">A searchable list of flowers to make your wedding perfect</div>
      <input type="text" name="search" />
      <div className="name">name</div>
    </div>
  )
}
