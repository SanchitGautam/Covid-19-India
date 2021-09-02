import React from "react";
import "./Table.css";
import { prettyStat, allst } from "../../util";
import AnimatedNumber from "animated-number-react";

function Table({ states }) {
  return (
    <div className="table">
      {states.map(({ state, active }) => (
        <tr>
          <td>{allst(state)}</td>
          <td>
            <strong>
              <AnimatedNumber
                value={active}
                formatValue={(v) => prettyStat(v.toFixed(0))}
              />
            </strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
