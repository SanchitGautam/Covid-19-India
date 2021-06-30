import React from "react";
import AnimatedNumber from "animated-number-react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { prettyStat } from "../../util";
import "./InfoBox.css";
function sign(s) {
  let s1 = "+";
  if (s === "0") return "❤";
  else if (s) return s1.concat(s);
}

function InfoBox({ active, c, t, title, cases, total, update }) {
  return (
    <div className="infoBox">
    <Card className={`infoBox ${active && c===1 &&"infoBox__1"} ${active && c===2 &&"infoBox__2"} ${active && c===3 &&"infoBox__3"} ${t===1 &&"info__1"} ${t===2 &&"info__2"} ${t===3 &&"info__3"}`}>
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <Typography>
        <AnimatedNumber className={`infoBox__cases ${t===1 && "cases1"} ${t===2 && "cases2"} ${t===3 && "cases3"}`}
          value={cases}
          formatValue={(v) => prettyStat(v.toFixed(0))}
        />
        </Typography>
        <Typography >
        <AnimatedNumber className={`infoBox__total ${t===1 && "cases1"} ${t===2 && "cases2"} ${t===3 && "cases3"}`}
          value={total} 
          formatValue={(v) => sign(prettyStat(v.toFixed(0)))}
        />
        </Typography>
        <h5>
          {update}
        </h5>
      </CardContent>
    </Card>
    </div>
  );
}

export default InfoBox;
