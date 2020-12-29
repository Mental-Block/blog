import React from 'react'

import { DiscussionEmbed } from "disqus-react"

export default function Comments({ ...props}) {
    const {title, slug} = props

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug, title },
      }

    return <DiscussionEmbed {...disqusConfig} /> 
}