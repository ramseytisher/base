import React, { createContext, useState, useEffect } from "react"
import { Auth } from 'aws-amplify'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(() => setLoggedIn(true))
            .catch(() => setLoggedIn(false))
    })

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
            <pre>{JSON.stringify(Auth.user, null, 2)}</pre>
        </UserContext.Provider>
    )
}