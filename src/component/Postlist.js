import React, { useState, useEffect } from 'react'
import Post from './Post'

function Postlist() {
  const [post, setPost] = useState([])
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
          console.log(data)
        setPost(data)
      })
    }
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <>
     <div className="container">
         <div className="row">
         {post.map((data) => (
            <div className="col-3 mt-4">
                <Post title={data.name} body={data.body} />
            </div>
        ))}
         </div>
     </div>

    </>
  )
}

export default Postlist
