import React, { useEffect, useState } from 'react'

import { API, graphqlOperation } from 'aws-amplify'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'

import { Box, Stack, Text } from 'grommet'
import Img from "gatsby-image"

import { listProjects as ListProjects } from '../graphql/queries'

export default () => {
    const [projectsInfo, setProjectsInfo] = useState({})
    const [errors, setErrors] = useState(false)

    const projectsContent = useStaticQuery(graphql`
    query ProjectsContentQuery {
        allMdx {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        dataid
                    }
                    fields {
                        slug
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400, maxHeight: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }`)

    useEffect(() => {
        mergeProjectInfo()
    })

    async function mergeProjectInfo() {
        let merged = []
        try {
            const projectsData = await API.graphql(graphqlOperation(ListProjects))
            const content = projectsContent.allMdx.edges
            const dataItems = projectsData.data.listProjects.items

            content.forEach(({ node: project }) => {
                const lookup = project.frontmatter.dataid
                const found = _.find(dataItems, item => {
                    return item.id === lookup
                })
                merged.push(Object.assign(project, found))
            })
            setProjectsInfo(merged)
        } catch (error) {
            console.log('error fetching projects: ', error)
            setErrors(true)
        }
    }

    if (_.isEmpty(projectsInfo)) {
        return <div>Loading ...</div>
    }

    if (errors) {
        return <div>There was an error</div>
    }

    return (
        <Box direction="row-responsive">
            {projectsInfo.map((project) => (
                <Link to={project.fields.slug} key={project.id}>
                    <Box animation="fadeIn" width="medium">
                        <Stack anchor="bottom">
                            <Img fluid={project.fields.image.childImageSharp.fluid} />
                            <Box background={{ "color": "dark-3", "opacity":"strong"}}>
                                <Text color="light-1" size="large">
                                    {project.frontmatter.title}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Link>
            ))}
        </Box>
    )
}