import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  height: 100vh;
  background: ${theme.colors.layout.background};
`

export const Match = styled.div`
  overflow: auto;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 450px;
  background: ${theme.colors.layout.darkAccent};
`

export const Column = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const ButtonColumn = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled.h2`
  color: ${theme.colors.fonts.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: bold;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    text-shadow: 3px 3px ${theme.colors.layout.accent}; 
  }
`

export const SmallHeader = styled.h2`
  color: ${theme.colors.fonts.header};
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: bold;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    text-shadow: 3px 3px ${theme.colors.layout.accent}; 
  }
`

export const Text = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 10px;
`

export const Frame = styled.iframe`
  display: block;
  border: none;
  width: 300px;
  height: 380px;
  padding: 40px;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
`

export const Compatible = styled.text`
  color: green;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  padding: 2px;
  margin: 15px;
  transition: 0.5s ease;

  &:hover {
    text-shadow: 3px solid white;
  }
`

export const KindaCompatible = styled.text`
  color: yellow;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  padding: 2px;
  margin: 15px;
  transition: 0.5s ease;

  &:hover {
    text-shadow: 3px solid white;
  }
`

export const NotCompatible = styled.text`
  color: red;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  padding: 2px;
  margin: 15px;
  transition: 0.5s ease;

  &:hover {
    text-shadow: 3px solid white;
  }
`

export const Image = styled.img`
  padding: 20px;  
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  height: 150px;
`

export const NextArrow = styled.img`
  width: 100px;
  height: auto;
  transform: rotate(90deg);
  transition: 0.5s ease;

  &:hover {
    filter: invert(100%);
    cursor: pointer;
  }
`

export const PrevArrow = styled.img`
  width: 100px;
  height: auto;
  transform: scaleX(-1);
  transform: rotate(270deg);
  transition: 0.5s ease;

  &:hover {
    filter: invert(100%);
    cursor: pointer;
  }
`