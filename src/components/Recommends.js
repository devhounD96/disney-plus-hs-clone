import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Recommends = () => {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Content>
    </Container>
  )
}

export default Recommends

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