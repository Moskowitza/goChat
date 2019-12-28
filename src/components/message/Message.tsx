import * as React from 'react'

export default function Message({title,body}) {
    return (
        <li>
            <span>{title}</span>
            <span>{body}</span>
        </li>
    )
}
