import React from "react";
import "./News.css";
import { time } from "../../util";
function News({ news }) {
  return (
    <div className="news">
      {news.map(({ update, timestamp }) => (
        <tr>
          <td>
            <strong>{'" ' + update + ' "'}</strong>
          </td>
          <td>{time(timestamp)}</td>
        </tr>
      ))}
    </div>
  );
}

export default News;
