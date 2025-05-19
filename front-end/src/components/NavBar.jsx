import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/">home</a>
          <p>Smart Shopping</p>
          </div>
        <ul>
          <li><button>Nova Lista</button></li>
        </ul>
      </nav>
    </div>
  )
}
