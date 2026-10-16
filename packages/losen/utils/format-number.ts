// Show a dash instead of "NaN" when a value is missing or not a number
export function formatNumber(value: number | string | undefined) {
  return Number.isNaN(Number(value)) ? '—' : value;
}
