import React from 'react'


function About({image = "https://via.placeholder.com/215Links ", about}) {
  return (
    <div>
        <aside >
        <img src={typeof image === 'string' ? image : "https://via.placeholder.com/215"} alt="blog logo" />
        <p>{about}</p>
        </aside>
    </div>
  )
}

export default About
