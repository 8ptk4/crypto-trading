// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import History from "./components/History/History";
// import Panel from "./components/Panel/Panel";
// import axios from 'axios'


// import "./Dashboard.css";

// const DashboardLayout = ({ children, history2, ...props }) => {
//   const [balance, setBalance] = useState(0)
//   const [holdings, setHoldings] = useState([
//     {
//       crypto: 'BitCoin',
//       amount: 0
//     },
//     {
//       crypto: 'BitConnect',
//       amount: 0
//     }
//   ])
  
//   const fetchBalance = () => {
//     axios({
//       method: "get",
//       headers: { 'x-access-token': storage },
//       url: `${process.env.REACT_APP_BACKEND}/wallet/balance`
//     })
//       .then(response => {
//         setBalance(response.data.response.balance)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   useEffect(() => {
//     console.log("HEJSAN")
//     fetchBalance()
    
//   })

//   return (
//     <>
//       <section className="main hbox space-between">
//         <nav>
//           <Navbar history={children.props.history} />
//         </nav>
//         <article>
//           <Panel {...props} />
//           {children}
//         </article>
//         <aside>
//           <History history2={history2}/>
//         </aside>
//       </section>
//     </>
//   );
// };

// export default DashboardLayout;