import React from 'react'
import 'styles/code.scss'

export default function Code ({ children }) {
  return (
    <pre className="code">
      <code>
        {children}
      </code>
    </pre>
  )
}
