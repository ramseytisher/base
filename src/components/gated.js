import React, { useState, useContext } from 'react'

import { UserContext } from '../context/user-context'

import Login from '../components/login'

export default ({ children, showLogin }) => {
    const [isAuthzed, setIsAuthzed] = useState(false)

    const {loggedIn} = useContext(UserContext)

    if (loggedIn) { return <div>{children && children}</div> }

    if (showLogin) { return <Login /> }

    return null

}