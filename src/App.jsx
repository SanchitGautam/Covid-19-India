import React, { useEffect, useState } from "react";
import "./App.css";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./components/InfoBox/InfoBox";
import Table from "./components/Table/Table";
import News from "./components/News/News";
import { sortData, sortData1, datetime } from "./util";
import Temp from "./components/Graph/Graph";
import Footer from "./components/Footer/Footer";
function App() {
  
  const [states, setStates] = useState([]);
  const [stateInfo, setStateInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [but, setBut] = useState(1);
  const [b, setB] = useState();
  const [dt, setDt] = useState();
  useEffect(() => {
    const getStatesData = async () => {
      await fetch("https://api.covid19india.org/data.json")
        .then((response) => response.json())
        .then((data) => {
          const temp = data.statewise;
          const stateIf = temp.filter((x) => {
            return x.statecode === "TT";
          });
          const states1 = temp.map((St) => ({
            name: St.state,
            value: St.statecode,
          }));
          const xyz = sortData(temp);
          setTableData(xyz);
          setStates(states1);
          setStateInfo(stateIf[0]);
          setDt(datetime(stateIf[0].lastupdatedtime));
        });
    };
    getStatesData();
  }, []);
  useEffect(() => {
    const getnewsData = async () => {
      await fetch("https://api.covid19india.org/updatelog/log.json")
        .then((response) => response.json())
        .then((data) => {
          const z = sortData1(data);
          setNewsData(z);
        });
    };
    getnewsData();
  }, []);

  const onStateChange = async (event) => {
    const stateCode = event.target.value;

    await fetch("https://api.covid19india.org/data.json")
      .then((response) => response.json())
      .then((data) => {
        const temp = data.statewise;
        const stateIf = temp.filter((x) => {
          return x.statecode === stateCode;
        });
        setStateInfo(stateIf[0]);
        setDt(datetime(stateIf[0].lastupdatedtime));
      });
  };
  // console.log(stateInfo);
  // console.log(stateInfo.lastupdatedtime);

  return (
    <div className="tracker">
      <div className="app">
        <div className="app__left">
          {/* <Header /> */}
          <div className="app__header">
            <h1>
              Covid-19 <strong>INDIA</strong>
            </h1>
            <div className="app__dropdown">
              <FormControl variant="outlined">
                <InputLabel>
                  <h10>Select State</h10>
                </InputLabel>
                <Select
                  className="select"
                  onChange={onStateChange}
                  value={stateInfo.state}
                  label="Select State"
                >
                  <MenuItem className="menu" value="" disabled>
                    Select State
                  </MenuItem>
                  {states.map((state) => (
                    <MenuItem className="menu" value={state.value}>{state.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="app__stats">
            <div
              onClick={function () {
                setBut(1);
                setB(1);
              }}
            >
              <InfoBox
                active={b === 1}
                c={b}
                t={1}
                title="Confirmed"
                cases={stateInfo.confirmed}
                total={stateInfo.deltaconfirmed}
                update={dt}
              />
            </div>
            {/* <div
            onClick={function () {
                setB(2);
              }}>
              <InfoBox
              active={b === 2}
              c={b}
                title="Active"
                cases={stateInfo.active}
                update={stateInfo.lastupdatedtime}
              />
            </div> */}
            <div
              onClick={function () {
                setBut(2);
                setB(2);
              }}
            >
              <InfoBox
                active={b === 2}
                c={b}
                t={2}
                title="Recovered"
                cases={stateInfo.recovered}
                total={stateInfo.deltarecovered}
                update={dt}
              />
            </div>
            <div
              onClick={function () {
                setBut(3);
                setB(3);
              }}
            >
              <InfoBox
                active={b === 3}
                c={b}
                t={3}
                title="Deaths"
                cases={stateInfo.deaths}
                total={stateInfo.deltadeaths}
                update={dt}
              />
            </div>
          </div>

          <div className="graph">
            
              <Temp code={stateInfo.statecode} flag={but} />
            
          </div>
        </div>
        <div className="app__right">
          <Card>
            <CardContent>
              <h6> Live Active Cases</h6>
              <Table states={tableData} />
            </CardContent>
          </Card>
          <br></br>
          <Card>
            <CardContent>
              <h6> Latest Updates</h6>
              <News news={newsData} />
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
