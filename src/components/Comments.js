import React from 'react'

import { DiscussionEmbed } from "disqus-react"

export default  function Comments({ ...props}) {
    const disqusShortname = process.env.GATSBY_DISQUS_NAME

    const disqusConfig = {
      url: `https://www.badideasguy.com/${props.slug}`,
      identifier: props.title,
      title: props.title
    }


    return <DiscussionEmbed config={disqusConfig} shortname={disqusShortname} /> 
}