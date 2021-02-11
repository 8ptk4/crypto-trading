import React, { useEffect } from 'react';
import {
  AreaChart,
  Area,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import socketIO from 'socket.io-client';


const Chart = () => {
  const [data, setData] = React.useState([]);



  const handleData = () => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND}/chart/`,
    }).then(response => {
      const display = response.data.response.slice(-6);
      const chart_data = display.map((data) => {
        return {
          date: data.date.split(' ')[1],
          btc: data.btc,
          bc: data.bc
        }; 
      });
      setData(chart_data);    
    }).catch(error => {
      console.error(error);
    });
  };



  useEffect(() => {
    const ENDPOINT = `${process.env.REACT_APP_BACKEND}/`;
    const socket = socketIO(ENDPOINT);

    socket.on('history', (data) => handleData());
    handleData();
    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis stroke="white" />
          <XAxis dataKey="date" stroke="white" />
          <Tooltip />
          <LabelList
            className="label"
            dataKey="date"
            position="insideTop"
            angle="45" />
          <Area
            type="monotone"
            dataKey="btc"
            stroke="#fff"
            fillOpacity={1}
            fill="url(#colorPv)" />
          <Area
            type="monotone"
            dataKey="bc"
            stroke="#fff"
            fillOpacity={1}
            fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;