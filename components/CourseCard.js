import React from 'react'
import Link from 'components/Link'
import { redirectTo } from 'helpers/RouteHelpers'
import 'styles/card.sass'

export default function CourseCard ({ title, children, href }) {
  return (
    <div className="card" onClick={() => redirectTo(href)}>
      <h2>
        <Link href={href}>
          {title}
        </Link>
      </h2>
      <p>
        {children}
      </p>
    </div>
  )
}
