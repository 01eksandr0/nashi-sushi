export const generateTimeIntervals = () => {
  const intervals = ["Найближчий час"];
  const currentHour =
    new Date().getHours() > 11 && new Date().getHours() < 21
      ? new Date().getHours()
      : 11;
  const currentMinute = new Date().getMinutes() >= 30 ? 45 : 30;
  for (let hour = currentHour; hour < 21; hour++) {
    for (let minute = currentMinute; minute < 60; minute += 15) {
      intervals.push(
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`
      );
    }
  }
  return intervals;
};
