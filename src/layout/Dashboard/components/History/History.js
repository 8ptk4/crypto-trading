import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import './History.css'
import axios from 'axios'

const History = (props) => {
  const [history, setHistory] = React.useState([])

  React.useEffect(() => {
    props.socket.on('history_data', (data) => {
      setHistory(data)
    })

    axios({
      method: "get",
      url: `${process.env.REACT_APP_BACKEND}/history/get`,
    })
      .then(response => {
        props.socket.emit('history_data', response.data.response)
      })
      .catch(error => {
        console.error(error)
      });

    return () => {
      props.socket.off()
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