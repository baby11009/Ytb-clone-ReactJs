// Time Split

const timeSplit = (timeSplit) => {
  let tiSp = timeSplit.split(" ");

  let date = tiSp[0].split("/");

  let time = tiSp[1].split(":");

  let dn = tiSp[2];

  let hour = Number(time[0]);
  if (dn === "PM") {
    hour = Number(time[0]) + 12;
  }

  return {
    day: Number(date[1]),
    month: Number(date[0]),
    year: Number(date[2]?.replace(/,/g, "")),
    hour,
    min: Number(time[1]),
    sec: Number(time[1]),
  };
};

// format time : mm/dd/yyyy, hh:mm:ss AM/PM

export const timeFormat = (time = '07/05/2024, 09:00:00 AM') => {
  // split var date
  let timeSp = timeSplit(time);

  // split current date

  let currDate = new Date().toLocaleString();

  let currDateSp = timeSplit(currDate);

  if (currDateSp.year > timeSp.year) {
    if (
      currDateSp.year - timeSp.year === 1 &&
      currDateSp.month + 12 - timeSp.month < 12
    ) {
      return `${currDateSp.month + 12 - timeSp.month} tháng trước`;
    }
    return `${currDateSp.year - timeSp.year} năm trước`;
  } else if (currDateSp.month > timeSp.month) {
    if (
      currDateSp.month - timeSp.month === 1 &&
      currDateSp.day + 30 - timeSp.day < 30
    ) {
      return `${currDateSp.day + 30 - timeSp.day} ngày trước`;
    }
    return `${currDateSp.month - timeSp.month} tháng trước`;
  } else if (currDateSp.day > timeSp.day) {
    if (
      currDateSp.day - timeSp.day === 1 &&
      currDateSp.hour + 24 - timeSp.hour < 24
    ) {
      return `${currDateSp.hour + 24 - timeSp.hour} giờ trước`;
    }
    return `${currDateSp.day - timeSp.day} ngày trước`;
  } else if (currDateSp.hour > timeSp.hour) {
    return `${currDateSp.hour - timeSp.hour} giờ trước`;
  } else if (currDateSp.min > timeSp.min) {
    return `${currDateSp.min - timeSp.min} phút trước`;
  } else if (currDateSp.sec >= timeSp.sec) {
    return `${currDateSp.sec - timeSp.sec} phút trước`;
  }
};
