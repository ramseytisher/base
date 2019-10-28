import React, { useEffect, useState } from 'react'

import { API, graphqlOperation } from 'aws-amplify'

import { listProjects as ListProjects } from '../graphql/queries'

export default () => {
    const [projects, setProjects] = useState({})
    
    useEffect(() => {
        getProjects()
    }, [])

    async function getProjects() {
        try {
            const projectData = await API.graphql(graphqlOperation(ListProjects))
            setProjects(projectData)
        } catch (error) {
            console.log('error fetching projects: ', error)
        }
    }

    return (
        <div>
            <pre>{JSON.stringify(projects, null, 2)}</pre>
        </div>
    )
}