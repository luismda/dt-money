import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow-x: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  min-width: 17.5rem;
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1.4;
  }

  time {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-500']};

    display: block;
    margin-top: 0.125rem;

    visibility: hidden;
    max-height: 0;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};

      time {
        color: ${(props) => props.theme['gray-300']};
      }
    `}

  @media (max-width: 768px) {
    & time {
      visibility: visible;
      max-height: none;
    }
  }
`
