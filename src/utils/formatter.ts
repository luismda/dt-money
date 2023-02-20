export function dateFormatter(options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('pt-BR', options)
}

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
