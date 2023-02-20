import { useTheme } from 'styled-components'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { SummaryCard, SummaryContainer } from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const theme = useTheme()

  const { summaryOfValues, summaryOfDates } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>

        <strong>{priceFormatter.format(summaryOfValues.income)}</strong>

        {summaryOfDates.lastIncome !== '' && (
          <time>
            Última entrada em{' '}
            {dateFormatter({ day: 'numeric', month: 'long' }).format(
              new Date(summaryOfDates.lastIncome),
            )}
          </time>
        )}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summaryOfValues.outcome)}</strong>

        {summaryOfDates.lastOutcome !== '' && (
          <time>
            Última saída em{' '}
            {dateFormatter({ day: 'numeric', month: 'long' }).format(
              new Date(summaryOfDates.lastOutcome),
            )}
          </time>
        )}
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>{priceFormatter.format(summaryOfValues.total)}</strong>

        {summaryOfDates.lastUpdate !== '' && (
          <time>
            Atualizado em{' '}
            {dateFormatter({ day: 'numeric', month: 'long' }).format(
              new Date(summaryOfDates.lastUpdate),
            )}
          </time>
        )}
      </SummaryCard>
    </SummaryContainer>
  )
}
