import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Trending = () => {
  return (
    <Container>
        <h4>Trending right now</h4>
        <Content>
            <Wrap>
              <Link to='/'>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B2682B4B01548242036066A1428197E2CC6DB23135B43CEE90A854D4F1055F8/scale?width=800&aspectRatio=1.78&format=jpeg' alt='/' />
              </Link>
            </Wrap>
            <Wrap>
              <Link to='/'>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/38045EEFBFE83AE3CBDDBBD50536A23A14BEBE60639462FBAA16466726014046/badging?width=800&aspectRatio=1.78&format=jpeg&label=originals' alt='/' />
              </Link>
            </Wrap>
            <Wrap>
              <Link to='/'>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A62CB342AF6600C794BDEAC8C49D6A81201CD49E614CC421ED08B0ADF005573B/scale?width=800&aspectRatio=1.78&format=jpeg' alt='/' />
              </Link>
            </Wrap>
            <Wrap>
              <Link to='/'>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/593B2865F439C94D2D8364CB31AA124371E89AF73BA4BEC2CE4C86F7ABE4EB37/scale?width=800&aspectRatio=1.78&format=jpeg' alt='/' />
              </Link>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Trending

const Container = styled.div`
        padding: 0 0 26px;
`

const Content = styled.div`
        display: grid;
        gap: 25px;
        grid-template-columns: repeat(4, minmax(0, 1fr));

        @media(max-width: 768px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
`

const Wrap = styled.div`
        padding-top: 56.25%;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        border: 3px solid rgba(249, 249, 249, 0.1);

        img {
          inset: 0px;
          display: block;
          height: 100%;
          object-fit: cover;
          opacity: 1;
          position: absolute;
          transition: opacity 500ms ease-in-out 0s;
          width: 100%;
          z-index: 1;
          top: 0;
        }
        &:hover {
          box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
          transform: scale(1.05);
          border-color: rgba(249, 249, 249, 0.8);
        }
`