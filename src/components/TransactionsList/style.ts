import styled from 'styled-components'

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;
    color: ${(props) => props.theme['gray-300']};
  }

  td:first-child {
    width: 50%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1.5rem;
`

export const TransactionCard = {
  Root: styled.article`
    background: ${(props) => props.theme['gray-700']};
    border-radius: 6px;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,
  Description: styled.span`
    display: block;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-300']};
  `,
  Price: styled.strong`
    font-size: 1.25rem;
    line-height: 1.6;
  `,
  Details: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      color: ${(props) => props.theme['gray-500']};
    }
  `,
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
