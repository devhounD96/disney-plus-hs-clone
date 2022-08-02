import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'
import Viewers from './Viewers'

const Home = () => {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
    </Container>
  )
}

export default Home

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);
  &::after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

  }
  
`