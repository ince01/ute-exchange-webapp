export function convertToDateMonth(string) {
  const month = string.toString().substr(4, 6);
  const year = string.toString().substr(0, 4);
  return `${year}-${month}`;
}

export function convertNumber(number) {
  const parts = number.toFixed(0).split('.');
  const num = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + (parts[1] ? `.${parts[1]}` : '');
  return num;
}
