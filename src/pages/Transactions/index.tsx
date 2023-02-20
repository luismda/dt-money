import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsList } from '../../components/TransactionsList'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SearchForm } from './components/SearchForm'

import { TransactionsContainer, TransactionsCounter } from './style'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <TransactionsCounter>
          <span>Transações</span>

          <span>
            {transactions.length} {transactions.length > 1 ? 'itens' : 'item'}
          </span>
        </TransactionsCounter>

        <SearchForm />

        <TransactionsList />
      </TransactionsContainer>
    </div>
  )
}
