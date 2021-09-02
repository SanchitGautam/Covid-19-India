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
export const allst = (state) => {
  if(state==="Total") return "All States" ;
  else return state;
};
export const prettyStat = (stat) =>
  stat ? `${numeral(stat).format("0,0")}` : "0";

export const datetime = (date) => {
  const s = String(
    date[6] +
      date[7] +
      date[8] +
      date[9] +
      "-" +
      date[3] +
      date[4] +
      "-" +
      date[0] +
      date[1] +
      "T" +
      date[11] +
      date[12] +
      date[13] +
      date[14] +
      date[15] +
      date[16] +
      date[17] +
      date[18]
  );
  const c = Date.parse(s);
  const d = new Date(c);

  var yyyy = d.getFullYear();
  var mm = ("0" + (d.getMonth() + 1)).slice(-2); // Months are zero based. Add leading 0.
  var dd = ("0" + d.getDate()).slice(-2); // Add leading 0.
  var hh = d.getHours();
  var h = hh;
  var min = ("0" + d.getMinutes()).slice(-2); // Add leading 0.
  var ampm = "AM";
  var time;

  if (hh > 12) {
    h = hh - 12;
    ampm = "PM";
  } else if (hh === 12) {
    h = 12;
    ampm = "PM";
  } else if (hh === 0) {
    h = 12;
  }

  // ie: 18-02-2013, 8:35 AM
  time = dd + "-" + mm + "-" + yyyy + ", " + h + ":" + min + " " + ampm;

  return time;
};

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
