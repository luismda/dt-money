import { useState, useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { CalendarBlank, TagSimple } from 'phosphor-react'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import {
  PriceHighlight,
  TransactionsCardsContainer,
  TransactionCard,
  TransactionsTable,
} from './style'

export function TransactionsList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  function handleReizeWindow() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleReizeWindow)

    return () => {
      window.removeEventListener('resize', handleReizeWindow)
    }
  }, [])

  if (windowWidth <= 768) {
    return (
      <TransactionsCardsContainer>
        {transactions.map((transaction) => {
          return (
            <TransactionCard.Root key={transaction.id}>
              <div>
                <TransactionCard.Description>
                  {transaction.description}
                </TransactionCard.Description>

                <TransactionCard.Price>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </TransactionCard.Price>
              </div>

              <TransactionCard.Details>
                <span>
                  <TagSimple size={16} /> {transaction.category}
                </span>

                <span>
                  <CalendarBlank size={16} />
                  <time dateTime={transaction.createdAt}>
                    {dateFormatter().format(new Date(transaction.createdAt))}
                  </time>
                </span>
              </TransactionCard.Details>
            </TransactionCard.Root>
          )
        })}
      </TransactionsCardsContainer>
    )
  }

  return (
    <TransactionsTable>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter().format(new Date(transaction.createdAt))}</td>
            </tr>
          )
        })}
      </tbody>
    </TransactionsTable>
  )
}
