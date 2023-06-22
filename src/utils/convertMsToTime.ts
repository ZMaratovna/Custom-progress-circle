function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
export const convertMsToTime = (ms: number): string => {
  let sec = Math.floor(ms / 1000);
  let min = Math.floor(sec / 60);
  let h = Math.floor(min / 60);
  sec = sec % 60;
  min = min % 60;
  h = h % 24;
  return `${padTo2Digits(h)}:${padTo2Digits(min)}:${padTo2Digits(
      sec,
  )}`;
}
export const convertToMinsSecs = (ms: number): string => {
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  return min ? `${min} minute` : `${sec} seconds`;
}
