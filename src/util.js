import numeral from "numeral";

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => {
    let ia = parseInt(a.active, 10);
    let ib = parseInt(b.active, 10);
    if (ia > ib) return -1;
    else return 1;
  });
};
export const sortData1 = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => {
    let ia = parseInt(a.timestamp, 10);
    let ib = parseInt(b.timestamp, 10);
    if (ia > ib) return -1;
    else return 1;
  });
};
export const prettyStat = (stat) =>
  stat ? `${numeral(stat).format("0,0")}` : "0";

export const time = (data) => {
  var now = Date.now();
  const date = new Date(data * 1000);
  var difference = now - date;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  var minutesDifference = Math.floor(difference / 1000 / 60);

  if (daysDifference) {
    if (daysDifference === 1) return "A day ago.";
    else return daysDifference + " days ago.";
  } else if (hoursDifference) {
    if (hoursDifference === 1) return "An hour ago.";
    else return hoursDifference + " hours ago.";
  } else {
    if (minutesDifference === 0) return "Just now.";
    else if (minutesDifference === 1) return "A minute ago.";
    else return minutesDifference + " minutes ago.";
  }
};
