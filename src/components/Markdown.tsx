import React from 'react'

import sections from '../sections'

const MarkdownDocs: () => JSX.Element = () => {
  return (
    <>
      {sections.map((page, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: page }} />
      ))}
    </>
  )
}

export default MarkdownDocs
