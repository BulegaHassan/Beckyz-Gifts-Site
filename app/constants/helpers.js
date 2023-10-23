export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UGX",
  }).format(number / 1)
  return newNumber;
};
