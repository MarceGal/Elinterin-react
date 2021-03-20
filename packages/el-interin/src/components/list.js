import React from "react"
import { connect, styled } from "frontity"
//import Link from "@frontity/components/link"

import Link from "./link"
import FeaturedMedia from "./featured-media"

const List = ({ state, actions }) => {

  const data = state.source.get(state.router.link)

  return (

    <Items>

      {data.items.map((item) => {

        const post = state.source[item.type][item.id]

        return (

          <Link key={item.id} link={post.link}>
          
            <FeaturedMedia id={post.featured_media}/>
            
            {post.title.rendered}
          
          </Link>

        )

      })}

      <PrevNextNav>

        {data.previous && (
          
          <button onClick={ () => { actions.router.set(data.previous) } }>  &#171; Ver anteriores  </button>

        )}

        {data.next && (
         
         <button onClick={ () => { actions.router.set(data.next) }}> Ver más &#187; </button>

        )}

      </PrevNextNav>
      
    </Items>


  )
}

export default connect(List)

const Items = styled.div`

  & > a {
    display: block;
    color: steelblue !important;
    text-decoration: none;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }
  
  
  img {  
    margin-bottom: 0.5rem !important;    
  }

`
const PrevNextNav = styled.div`

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
  }
  & > button:hover {
    cursor: pointer;
  }

`