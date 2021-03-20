import React from "react"

import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import Header from "./header"
import Loading from "./loading"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Nav from "./nav"

const Root = ({ state, actions }) => {

    const data = state.source.get(state.router.link)

    return (

        <>
            <Global
            styles={css`

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html {
                    font-family: Poppins, system-ui, Verdana, Arial, sans-serif;
                }

            `}
            />            

            <HeaderContent>

              <Header  isPostType={data.isPostType} isPage={data.isPage} />          

            </HeaderContent>

            <Main>

                <Switch>
                  
                    <Loading when={data.isFetching} />

                    <List when={data.isArchive} />
                    
                    <Post when={data.isPost} />
                    
                    <Page when={data.isPage} />

                </Switch>

                 
                { state.theme.isUrlVisible ? 

                  <> Current URL: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button> </>
                  
                  : 

                  <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>

                }


            </Main>

        </>

    )

}

export default connect(Root)


const HeaderContent = styled.div`

  position: fixed;
  width: 100%;
  top:0;

`


const Main = styled.main`

  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 1rem;
  margin: auto;
  margin-top: 10rem ;
  
  @media screen and (max-width: 560px) {
    margin-top: 7rem ;
  }

  img {
    
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 2rem 0;

  }

  h2 {
    margin: 0.5em 0;
  }

  p {
    
  }

  figcaption {

    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
    
  }

  a {

    color: steelblue;

  }


`

const Button = styled.button`

  background: transparent;
  border: none;
  color: #aaa;
  margin: 2em;

  :hover {
    cursor: pointer;
    color: #888;
  }

`