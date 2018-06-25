import React from 'react'
import Link from 'components/Link'
import 'styles/card.sass'

export default function CourseCard ({ title, children, href }) {
  return (
    <Link className="card" href={href}>
      <h2>{title}</h2>
      <p>{children}</p>
    </Link>
  )
}
