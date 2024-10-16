import React from 'react'
import './Sidebar.scss'
const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul role="list">
        <h2>Your Lists</h2>
        <li>Gaming</li>
        <li>Cooking</li>
        <li>Sports</li>
        <li>Adventure</li>
      </ul>
      <button>
        New List
        <box-icon name="plus" type="regular" color="#000"></box-icon>
      </button>
    </div>
  )
}

export default Sidebar