export const millisecToHHMM = (mils) => {
  var sec_num = parseInt(mils / 1000, 10);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${hours}:${minutes}`;
};
