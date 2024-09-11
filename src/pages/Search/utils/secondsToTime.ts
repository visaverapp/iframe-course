// export function secondsToTime(s: number) {
//   const hours = Math.floor(s / 3600);
//   const minutes = Math.floor((s % 3600) / 60);
//   const remainingSeconds = s % 60;
//
//   if (hours > 0) {
//     return hours + ' ч ' + minutes + ' мин ' + remainingSeconds + ' сек';
//   } else if (minutes > 0) {
//     return minutes + ' мин ' + remainingSeconds + ' сек';
//   } else {
//     return remainingSeconds + ' сек';
//   }
// }

export function secondsToTime(s: number) {
  const totalSeconds = Math.floor(s); // Округляем до целого числа
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  // Добавляем ведущие нули для единиц времени
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}