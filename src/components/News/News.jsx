import React from "react";
import "./News.css";
import { time } from "../../util";
function News({ news }) {
  return (
    <div className="news">
      {news.map(({ update, timestamp }) => (
        <div className="tr">
          <div>
            <strong>{'" ' + update + ' "'}</strong>
          </div>
          <div>{time(timestamp)}</div>
        </div>
      ))}
    </div>
  );
}

export default News;
