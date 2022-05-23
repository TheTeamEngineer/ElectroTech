import styled from 'styled-components'

export const Box = styled.div`
  background: #040f23;
  position: absolute;
  padding-bottom: 50px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 94px;
  grid-auto-flow: column;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
  
`

export const FooterLink = styled.a`
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
    color: #ffffff;
  }
`

export const Heading = styled.p`
  font-size: 22px;
  // color: #fff;
  margin-bottom: 40px;

  font-weight: bold;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 15px;
  font-weight: 500;
  position: relative;
  
`
