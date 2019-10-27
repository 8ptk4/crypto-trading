import React from "react";
import {
  AreaChart,
  Area,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Chart = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    /*
    const socket = socketIO("http://localhost:1337/")
    socket.on('chart_data', (data) => {
      setData(data)
    })

    axios({
      method: "get",
      url: "http://localhost:1337/history/get",
    })
      .then(response => {
        socket.emit('chart_data', response.data.response)
      })
      .catch(error => {
        console.error(error)
      });

    return () => {
      socket.off()
    }
    */
  }, [])

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
          <XAxis dataKey="name" stroke="white" />
          <Tooltip />
          <LabelList
            className="label"
            dataKey="name"
            position="insideTop"
            angle="45" />
          <Area
            type="monotone"
            dataKey="BitCoin"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)" />
          <Area
            type="monotone"
            dataKey="BitConnect"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;