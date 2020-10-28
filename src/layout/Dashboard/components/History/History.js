import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import './History.css'


const History = (props) => {
  return (
    <>
    
      <div className="history_top">
        History
      </div>

      <div className="history_main">
        {/* <Scrollbars
          renderThumbVertical={props => (
            <div {...props} className="scrollbar-vertical" />
          )}
        >
          {props.history2.map((message, i) =>
            message !== null ?
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
            : null
          )}
        </Scrollbars> */}
      </div>

    </>
  )
}

export default History