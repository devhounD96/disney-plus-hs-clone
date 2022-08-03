import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg' alt='' />
        </Background>
        <ImgTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/50B933E83609BEEFEDFA177A6D96DBFA7804C14F70A0B5AB314E892E65498ACF/scale?width=1440&aspectRatio=1.78' alt='' />
        </ImgTitle>
    </Container>
  )
}

export default Detail

const Container = styled.div`
        position: relative;
        min-height: calc(100vh - 250px);
        overflow-x: hidden;
        display: block;
        top: 72px;
        padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
        left: 0px;
        opacity: 0.8;
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: -1;

        img {
            width: 100vw;
            height: 100vh;

            @media (max-width: 768px) {
                width: initial;
            }
        }
`

const ImgTitle = styled.div`

`