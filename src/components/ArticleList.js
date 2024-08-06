import React from 'react'
import Article from './Article'

function ArticleList({posts = []}) {
  return (
    <div>
        <main>
        {posts.map((posts) => (
        <Article
          key={posts.id}
          title={posts.title}
          date={posts.date}
          preview={posts.preview}
          minutes={posts.minutes}
        />
      ))}
        </main>
    </div>
  )
}

export default ArticleList