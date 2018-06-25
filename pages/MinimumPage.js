import React from 'react'
import Code from 'components/Code'

export default () => (
  <div>
    <h1>React + Next.js</h1>
    <h2>package.json mínimo</h2>
    <Code>
      {`
{
  "name": "meu-site",
  "scripts": {
    "start": "node index"
  },
  "dependencies": {
    "next": "^6.0.3",
    "next-routes": "^1.4.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1"
  }
}
      `}
    </Code>
  </div>
)
