import React, { createContext, useState, useEffect } from "react"
import { Auth, API, graphqlOperation } from 'aws-amplify'

import { getAccount as GetAccount } from '../graphql/queries'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [accountInfo, setAccountInfo] = useState({})

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(() => setLoggedIn(true))
            .then(() => getAccount())
            .catch(() => setLoggedIn(false))
    })

    async function getAccount() {
        try {
            const userId = Auth.user.username
            console.log('running this ...')
            const accountData = await API.graphql(graphqlOperation(GetAccount, { id: userId }))
            setAccountInfo(accountData.data.getAccount)
        } catch (error) {
            console.log('error getting account info', error)
        }
    }

    return (
        <UserContext.Provider value={{ loggedIn, accountInfo, setLoggedIn }}>
            {children}
            <pre>{JSON.stringify(Auth.user, null, 2)}</pre>
        </UserContext.Provider>
    )
}