import React from 'react'
import Feed from './Feed'

function Home({posts,fetchError,isLoading}) {
  return (
    // <main className='Home'>
    //     {posts.length ? (
    //       <Feed posts={posts}/>
    //     ):(
    //       <p style={{marginTop: "2rem"}}>No posts to display.</p>
    //     )
    //     }
    // </main>
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading&&fetchError && <p className='statusMsg' style={{color:'red'}}>{fetchError}</p>}
      {!fetchError&&!isLoading&& (posts.length ? (
          <Feed posts={posts}/>
        ):(
          <p style={{marginTop: "2rem"}}>No posts to display.</p>
        ))}
    </main>
  )
}

export default Home