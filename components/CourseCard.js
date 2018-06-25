import React from 'react'
import Link from 'components/Link'
import 'styles/card.sass'

export default function CourseCard ({ title, children, href }) {
  const content = typeof children === 'string' ? <p>{children}</p> : children
  return (
    <Link href={href} className="card">
      <h2>{title}</h2>
      {content}
    </Link>
  )
}
