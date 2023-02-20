import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 2rem;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    & {
      margin-top: 1.5rem;
    }
  }
`

export const TransactionsCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  visibility: hidden;
  max-height: 0;

  span:first-child {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-300']};
  }

  span:last-child {
    line-height: 1.6;
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    & {
      visibility: visible;
      max-height: none;

      margin-bottom: 0.75rem;
    }
  }
`
