export const formatPrice = (price: number, locale: string = "pt") => {
  const isEn = locale === "en"
  return new Intl.NumberFormat(isEn ? "en-IE" : "pt-BR", {
    style: "currency",
    currency: isEn ? "EUR" : "BRL",
    minimumFractionDigits: 0,
  }).format(price)
}
