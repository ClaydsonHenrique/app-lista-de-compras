import React from 'react'

export default function Inputs({ name, type, value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}
