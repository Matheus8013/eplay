export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentIten) => {
    if (currentIten.prices.current) {
      return (accumulator += currentIten.prices.current)
    }
    return 0
  }, 0)
}
