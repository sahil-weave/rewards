import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
function AdminPanel() {
    const [historyObj, setHistoryObj] = useState([])
    const [activerewards, setActiveRewards] = useState(true);
    const [rewardStatus, setRewardStatus] = useState([])
    useEffect(() => {
        if(!sessionStorage.getItem("username"))
        {
          navigate("/auth")
        }
        if(sessionStorage.getItem("username")!=="Admin")
        {
            navigate("/")
        }
        setHistoryObj(historyRewards)
        setRewardStatus(reward)
    }, []);
    const historyRewards = [
        {
             points : 200,
             credited_on :"07/14/2021",
             user_email : "rahul@gmail.com",
         },
         {
            points : 200,
            credited_on :"05/9/2021",
            user_email : "user4@gmail.com",
        },
        {
            points : 245,
            credited_on :"10/19/2021",
            user_email : "user2@gmail.com",
        },
        {
            points : 175,
            credited_on :"03/31/2021",
            user_email : "user5@gmail.com",
        }
    ]
    const reward = [
        {
          reward_name:"5% off on next visit",
          reward_id:"1",
          claimed:"1/23/2022",
          status:"active",
          user_email:"user123@gmail.com"
        },
        {
            reward_name:"5% off on next visit",
            reward_id:"1",
            claimed:"2/13/2022",
            status:"expired",
            user_email:"user123@gmail.com"
          },
          {
            reward_name:"Free teeth Whitening",
            reward_id:"3",
            claimed:"7/27/2022",
            status:"active",
            user_email:"user123@gmail.com"
          },
    
      ]
const navigate = useNavigate();
  return (
    <div className='adminContainer'>
        <div className='officeContainer'>

        </div>
        <div className="child3">
          <div
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={activerewards ? "rewardTab selected" : "rewardTab"}
              onClick={() => {
                setActiveRewards(true);
              }}
            >
              Reward Ledger
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={!activerewards ? "rewardTab selected" : "rewardTab"}
              onClick={() => {
                setActiveRewards(false);
              }}
            >
              Point Ledger
            </div>
          </div>
          {activerewards ? (
            <div className="boxContent">
              <table className="boxTable">
                <tr className="boxHead">
                  <th style={{width:"30%"}}>User ID</th>
                  <th style={{width:"10%"}}>Reward ID</th>
                  <th style={{width:"30%"}}>Reward Name</th>  
                  <th style={{width:"15%"}}>Claimed On</th>
                  <th style={{width:"15%"}}>Status</th>
                </tr>
                {rewardStatus.map((ele,index)=>{
                  return <tr key={index} style={ele.status!=="expired"?{}:{pointerEvents:"none", backgroundColor:"grey"}}>
                    <th style={{width:"30%"}}>{ele.user_email}</th>
                    <th style={{width:"5%"}}>{ele.reward_id}</th>
                    <th style={{width:"30%"}}>{ele.reward_name}</th>  
                    <th style={{width:"15%"}}>{ele.claimed}</th>
                    <th style={{width:"20%"}} className="redeemTable"
                    onClick={()=>{
                        let res=window.confirm("Are you sure you want to expire the reward of \""+ele.user_email+"\"?")
                        if(res)
                        {
                            ele.status="expired"
                            setRewardStatus([...rewardStatus])
                        }
                    }}>
                        {ele.status}</th>
                  </tr>
                })}
              </table>
            </div>
          ) : (
            <div className="boxContent">
              <table className="boxTable">
                <tr className="boxHead">
                  <th style={{width:"50%"}}>Email</th>
                  <th style={{width:"20%"}}>Points</th>
                  <th style={{width:"20%"}}>Credited on</th>
                </tr>
                {historyObj.map((ele,index)=>{
                  return <tr key={index}>
                    <td style={{width:"50%"}}>{ele.user_email}</td>
                    <td style={{width:"20%"}}>{ele.points} Points</td>
                    <td style={{width:"20%"}}>{ele.credited_on}</td>
                  </tr>
                })}
              </table>
            </div>
          )}

        </div>
    </div>
  )
}

export default AdminPanel