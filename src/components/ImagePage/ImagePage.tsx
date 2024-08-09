import React, { FC } from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`

const ImagePage: FC = () => {
  return (
    <ImageContainer>
      <Image src="/images/Date.png" alt="Displayed Image" />
    </ImageContainer>
  )
}

export default ImagePage
