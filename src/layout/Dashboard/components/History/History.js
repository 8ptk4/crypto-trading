import React from "react"
import { Scrollbars } from "react-custom-scrollbars";
import "./History.css"
import socketIO from "socket.io-client"
import axios from "axios"

const History = () => {
  const [history, setHistory] = React.useState([])

  React.useEffect(() => {
    const socket = socketIO("http://localhost:1337/")
    socket.on('history_data', (data) => {
      setHistory(data)
    })

    axios({
      method: "get",
      url: "http://localhost:1337/history/get",
    })
      .then(response => {
        socket.emit('history_data', response.data.response)
      })
      .catch(error => {
        console.error(error)
      });

    return () => {
      socket.off()
    }
  }, [])

  return (
    <>
      <div className="history_top">
        History
      </div>
      <div className="history_main">
        <Scrollbars
          renderThumbVertical={props => (
            <div {...props} className="scrollbar-vertical" />
          )}
        >
          {history.map((message, i) => (
            <div key={i} className="history_element">
              <h5>{message.firstname + ' ' + message.lastname}</h5>
              <p>
                <span
                  className={message.action
                    === "sold" ? "title_sold" : "title_purchased"}>
                  {message.action.toUpperCase()}
                </span> {message.date.split(" ")[1]} </p>
              < span > {message.amount} {message.currency}</span>
            </div>
          ))}


        </Scrollbars>
      </div>
    </>
  )
}

export default History