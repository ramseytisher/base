import React, { useEffect, useState } from 'react'

import { API, graphqlOperation } from 'aws-amplify'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Box } from 'grommet'

import { listAccounts as ListAccounts } from '../graphql/queries'

export default () => {
    const [accounts, setAccounts] = useState({})
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        getAccounts()
    })

    async function getAccounts() {
        try {
            const accountsData = await API.graphql(graphqlOperation(ListAccounts))
            setAccounts(accountsData.data.listAccounts.items)
        } catch (error) {
            setErrors(true)
        }
    }

    return (
        <Box>
            <pre>{JSON.stringify(accounts, null, 2)}</pre>
        </Box>
    )
}