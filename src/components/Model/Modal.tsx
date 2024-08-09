import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`

const ModalImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`

interface ModalProps {
  imageSrc: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImage src={imageSrc} alt="Modal Image" />
      </ModalContent>
    </ModalBackground>
  )
}

export default Modal
