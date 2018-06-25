import React from 'react'
import Link from 'components/Link'
import 'styles/courseCard.sass'

export default function CourseCard ({ title, children, href }) {
  const content = typeof children === 'string' ? <p>{children}</p> : children
  return (
    <Link href={href} className="courseCard">
      <h2>{title}</h2>
      {content}
    </Link>
  )
}
