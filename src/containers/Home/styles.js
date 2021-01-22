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
  width: 600px;
  margin: 30px;
  background: ${theme.colors.layout.darkAccent};
  transition: 0.5s ease;

  &:hover {
    box-shadow: 8px 8px ${theme.colors.layout.header}; 
  }
`
export const MatchButton = styled.button`
  background-color: transparent;
  border-radius: 2em;
  border: 0.2em solid white;
  display: block;
  outline: none;
  color: white;
  cursor: pointer;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: white;
    color: black;
  }
`

export const Column = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const UserColumn = styled.div`
  max-width: 250px;
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

export const BigText = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 18px;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 10px;

  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px ${theme.colors.layout.accent}; 
  }
`

export const Text = styled.p`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
`

export const Bio = styled.div`
  color: ${theme.colors.fonts.body};
  font-family: ${theme.fonts.body.family};
  font-weight: ${theme.fonts.body.weight};
  font-style: italic;
  font-size: 16px;
  padding: 5px;
  word-wrap: normal;
  letter-spacing: 0.5px;
  text-align: center;
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

export const Compatible = styled.p`
  color: green;
  font-family: ${theme.fonts.header.family};
  font-weight: ${theme.fonts.header.weight};
  font-size: 30px;
  padding: 2px;
  margin: 15px;
  transition: 0.5s ease;

  &:hover {
    text-shadow: 6px solid white;
  }
`

export const KindaCompatible = styled.p`
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

export const NotCompatible = styled.p`
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
  width: 200px;
  height: 200px;
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