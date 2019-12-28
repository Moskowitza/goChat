import * as React from 'react'

interface Props {
    userName:string
}

export default function User({userName}) {
    return (
        <li>
            {userName}
        </li>
    )
}
