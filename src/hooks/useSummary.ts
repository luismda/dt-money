import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summaryOfValues = useMemo(() => {
    return transactions.reduce(
      (acc, { type, price }) => {
        if (type === 'income') {
          acc.income += price
          acc.total += price
        } else {
          acc.outcome += price
          acc.total -= price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  const summaryOfDates = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income' && acc.lastIncome === '') {
          acc.lastIncome = transaction.createdAt
        } else if (transaction.type === 'outcome' && acc.lastOutcome === '') {
          acc.lastOutcome = transaction.createdAt
        }

        if (acc.lastUpdate === '') {
          acc.lastUpdate = transaction.createdAt
        }

        return acc
      },
      {
        lastIncome: '',
        lastOutcome: '',
        lastUpdate: '',
      },
    )
  }, [transactions])

  return {
    summaryOfValues,
    summaryOfDates,
  }
}
