import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import "./Graph.css";
function Temp({ code, flag }) {
  const [caseData, setData] = useState([]);
  const [mon, setMon] = useState(3);
  let months = Array(10);
  for (let i = 2; i < 17; i++) months[i] = i;

  useEffect(() => {
    fetch("https://api.covid19india.org/states_daily.json")
      .then((response) => response.json())
      .then((data) => {
        const temp = data.states_daily;

        const info = temp.map((x) => ({
          AN: x.an,
          AP: x.ap,
          AR: x.ar,
          AS: x.as,
          BR: x.br,
          CH: x.ch,
          CT: x.ct,
          DD: x.dd,
          DL: x.dl,
          DN: x.dn,
          Ga: x.ga,
          GJ: x.gj,
          HP: x.hp,
          HR: x.hr,
          JH: x.jh,
          JK: x.jk,
          KA: x.ka,
          KL: x.kl,
          LA: x.la,
          LD: x.ld,
          MH: x.mh,
          ML: x.ml,
          MN: x.mn,
          MP: x.mp,
          MZ: x.mz,
          NL: x.nl,
          OR: x.or,
          PB: x.pb,
          PY: x.py,
          RJ: x.rj,
          SK: x.sk,
          TG: x.tg,
          TN: x.tn,
          TR: x.tr,
          TT: x.tt,
          UN: x.un,
          UP: x.up,
          UT: x.ut,
          WB: x.wb,
          Status: x.status,
          date: x.date,
        }));
        setData(info);
      });
  }, []);

  const handleChange = (event) => {
    setMon(event.target.value);
  };
  let dataLen = caseData.length;
  let labelY = [];
  let labelC = [];
  let labelR = [];
  let labelD = [];
  //X- axis Date
  labelY = caseData.filter((x, i) => {
    return i >= dataLen - mon * 90 && x.Status === "Confirmed";
  });

  //console.log(labelY);

  //For different status
  labelC = caseData.filter((x, i) => {
    return i >= dataLen - mon * 90 && x.Status === "Confirmed";
  });
  console.log(labelC);
  labelR = caseData.filter((x, i) => {
    return i >= dataLen - mon * 90 && x.Status === "Recovered";
  });
  labelD = caseData.filter((x, i) => {
    return i >= dataLen - mon * 90 && x.Status === "Deceased";
  });

  if (flag === 1) {
    const newData = {
      labels: labelY.map((yy) => {
        return yy.date;
      }),

      datasets: [
        {
          label: "Daily Confirmed Cases",
          data: labelC.map((yy) => {
            return yy[code];
          }),
          fill: true,
          backgroundColor: "rgba(255,237,153,0.2)",
          borderColor: "#FB9300",
        },
      ],
    };
    return (
      <div>
        <div className="form">
          <FormControl>
            <InputLabel>
              <h10>Select Time Interval</h10>
            </InputLabel>
            <Select
              className="select1"
              onChange={handleChange}
              label="Select Time Interval"
            >
              <MenuItem className="menu" value="" disabled>
                Select Time Interval
              </MenuItem>
              <MenuItem className="menu" value={1}>
                Last Month
              </MenuItem>
              {months.map((m) => (
                <MenuItem className="menu" value={m}>
                  Last {m} months
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="line__wrapper yl">
          <Line data={newData} />
        </div>
      </div>
    );
  } else if (flag === 3) {
    const newData = {
      labels: labelY.map((yy) => {
        return yy.date;
      }),

      datasets: [
        {
          label: "Daily Deceased",
          data: labelD.map((yy) => {
            return yy[code];
          }),
          fill: true,
          backgroundColor: "rgba(255,97,109,0.2)",
          borderColor: "#FF616D",
        },
      ],
    };
    return (
      <div>
        <div className="form">
          <FormControl>
            <InputLabel>
              <h10>Select Time Interval</h10>
            </InputLabel>
            <Select
              className="select1"
              onChange={handleChange}
              label="Select Time Interval"
            >
              <MenuItem className="menu" value="" disabled>
                Select Time Interval
              </MenuItem>
              <MenuItem className="menu" value={1}>
                Last Month
              </MenuItem>
              {months.map((m) => (
                <MenuItem className="menu" value={m}>
                  Last {m} months
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="line__wrapper rd">
          <Line data={newData} />
        </div>
      </div>
    );
  } else {
    const newData = {
      labels: labelY.map((yy) => {
        return yy.date;
      }),

      datasets: [
        {
          label: "Daily Recovered",
          data: labelR.map((yy) => {
            return yy[code];
          }),
          fill: true,
          backgroundColor: "rgba(102,222,147,0.2)",
          borderColor: "#66DE93",
        },
      ],
    };
    return (
      <div>
        <div className="form">
          <FormControl>
            <InputLabel>
              <h10>Select Time Interval</h10>
            </InputLabel>
            <Select
              className="select1"
              onChange={handleChange}
              label="Select Time Interval"
            >
              <MenuItem className="menu" value="" disabled>
                Select Time Interval
              </MenuItem>
              <MenuItem className="menu" value={1}>
                Last Month
              </MenuItem>
              {months.map((m) => (
                <MenuItem className="menu" value={m}>
                  Last {m} months
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="line__wrapper gr">
          <Line data={newData} />
        </div>
      </div>
    );
  }
}

export default Temp;
