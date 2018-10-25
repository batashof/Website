function parseDate(dateInput) {
  const date = new Date(dateInput);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC"
  ];
  return {
    day: date.getDate(),
    month: months[date.getMonth()]
  };
}
export { parseDate };
