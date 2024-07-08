export const durationCalc = (duration) => {
  let hour;
  let min;
  let sec;

  if (duration < 60) {
    let stringSec = duration > 9 ? duration : `0${duration}`;

    return `00:${stringSec}`;
  }
  if (duration < 3600) {
    min = Math.floor(duration / 60);

    sec = duration - min * 60;

    let stringMin = min > 9 ? min : `0${min}`;

    let stringSec = sec > 9 ? sec : `0${sec}`;

    return `${stringMin}:${stringSec}`;
  } else {
    hour = Math.floor(duration / 3600);

    min = Math.floor((duration - hour * 3600) / 60);

    sec = duration - hour * 3600 - min * 60;

    let stringHour = hour > 9 ? hour : `0${hour}`;

    let stringMin = min > 9 ? min : `0${min}`;

    let stringSec = sec > 9 ? sec : `0${sec}`;

    return `${stringHour}:${stringMin}:${stringSec}`;
  }
};
