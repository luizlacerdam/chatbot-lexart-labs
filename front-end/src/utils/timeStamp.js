export default function timeStamp() {
  const ten = 10;
  const timestamp = new Date();
  const hours = timestamp.getHours();
  let minutes = timestamp.getMinutes();
  if (minutes < ten) minutes = `0${minutes}`;
  return `${hours}:${minutes}`;
}
