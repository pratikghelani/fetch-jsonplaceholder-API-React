import React from 'react'

function Post(props) {
  return (
    <>
        <h4>{props.title}</h4>
        <hr/>
        <p className="text-justify">{props.body}</p>
  </>
  )
}

export default Post