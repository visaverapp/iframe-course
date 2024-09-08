export function secondsToTime(s: number) {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const remainingSeconds = s % 60;

  if (hours > 0) {
    return hours + ' ч ' + minutes + ' мин ' + remainingSeconds + ' сек';
  } else if (minutes > 0) {
    return minutes + ' мин ' + remainingSeconds + ' сек';
  } else {
    return remainingSeconds + ' сек';
  }
}
