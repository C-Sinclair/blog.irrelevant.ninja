import React from 'react'
import { Card, Elevation } from '@blueprintjs/core'
import { useStaticQuery, graphql } from 'gatsby'
import { useTags } from '../hooks/useTags'

const Tags = () => {
    const data = useStaticQuery(graphql`
        query AllTagsQuery {
            allMarkdownRemark {
                group(field: frontmatter___tags) {
                    tag: fieldValue
                    totalCount
                }
            }
        }
    `)
    const { selectedTags, selectTag } = useTags()

    const handleClick = tag => () => selectTag(tag)
    
    return (
        <Card interactive elevation={Elevation.ONE} id="tags">
            <h4>Tags</h4>
            <ol>
                { data.allMarkdownRemark.group.map(({ tag, totalCount }) => (
                    <div 
                        className={selectedTags.includes(tag) ? "selected tag" : "tag"}
                        onClick={handleClick(tag)}>
                        <p>{tag}</p>
                        <p className="count">{totalCount}</p>
                    </div>
                ))}
            </ol>
        </Card>  
    )
}

export default Tags