// - Valor em centavos = Valor em reais * 100
// - Valor em reais = Valor em centavos / 100




/**
 * Converte um valor monetário em reais (BRL) para centavos.
 * @param {string} amount - O valor monetário em reais (BRL) a ser convertido.
 * @returns {number} O valor convertido em centavos.
*/
export function convertRealToCent(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
  const priceInCents = Math.round(numericPrice * 100)

  return priceInCents;
}