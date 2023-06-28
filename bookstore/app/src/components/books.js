import React from 'react'

export default ({ books }) => (
  <div>
    <h1> These books are from the API </h1>
    {books.map(({id, title, body}) => (
      <div key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    ))}
  </div>
);