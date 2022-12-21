import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [activerewards, setActiveRewards] = useState(true);
  const [rewardObj, setRewardObj] = useState([])
  const [historyObj, setHistoryObj] = useState([])
  const [myPoint, setMyPoint] = useState(389);
  useEffect(() => {
    if(!sessionStorage.getItem("username"))
    {
      navigate("/auth")
    }
    if(sessionStorage.getItem("username")==="Admin")
    {
        navigate("/admin")
    }
    setRewardObj(rewards)
    setHistoryObj(History)
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
}, []);
console.log(historyObj)
  const rewards = [
    {
      reward:"5% off on next visit",
      cost:"10",
      status:false
    },
    {
      reward:"flat 15$ off on next visit",
      cost:"25",
      status:true
    },
    {
      reward:"50% off on teeth whitenings",
      cost:"350",
      status:true
    },
    {
      reward:"Amazon Gift card worth 35$",
      cost:"500",
      status:false
    },
    {
      reward:"Free teeth cleaning",
      cost:"700",
      status:true
    }

  ]
  const History = [
    {
      reward:"5% off on next visit",
      cost:"10",
      claimed:"2/13/2022"
    },
    {
      reward:"Amazon Gift card worth 35$",
      cost:"500",
      claimed:"7/27/2022"
    },

  ]
  const redeemHandler = (ele) =>{
    console.log("reached")
    setRewardObj([...rewardObj] )
    setHistoryObj([...historyObj, {...ele, claimed:new Date().toLocaleDateString("en-US")}])
  }
  return (
    <div style={{ minWidth: "100vw" }}>
      <div id="square" contentEditable />
      {/*clip css */}
      <div className="gridContainer">
        <div className="child1">
          <div style={{ fontSize: "1.8rem", padding: "10px" }}>
            Introducing{" "}
            <span style={{ color: "var(--primary)", fontWeight: "900" }}>
              Weave Rewardz!
            </span>
          </div>
          <div style={{ fontSize: "1.3rem" }}>
            Available Balance: {myPoint} Points!
          </div>
        </div>
        <div className="child2"></div>
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
              Rewards
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
              History
            </div>
          </div>
          {activerewards ? (
            <div className="boxContent">
              <table className="boxTable">
                <tr className="boxHead">
                  <th style={{width:"50%"}}>Reward</th>
                  <th style={{width:"20%"}}>Cost</th>
                  <th style={{width:"20%"}}>{""}</th>
                </tr>
                {rewardObj.map((ele,index)=>{
                  return <tr key={index} style={ele.status?{}:{pointerEvents:"none", backgroundColor:"grey"}}>
                    <td style={{width:"50%"}}>{ele.reward}</td>
                    <td style={{width:"20%"}}>{ele.cost} Points</td>
                    <td className="redeemTable" onClick={()=>{
                        let res=window.confirm("Are you sure you want to redeem \""+ele.reward+"\"?")
                        if(res)
                        {
                            if(myPoint>Number(ele.cost))
                        {
                            console.log(typeof(ele.cost))
                            setMyPoint(myPoint - Number(ele.cost))
                            ele.status = false
                            redeemHandler(ele)
                        }
                        else
                        {
                            window.alert("Insufficient amount")
                        }}
                        }
                        }>Redeem</td>
                  </tr>
                })}
              </table>
            </div>
          ) : (
            <div className="boxContent">
              <table className="boxTable">
                <tr className="boxHead">
                  <th style={{width:"50%"}}>Reward</th>
                  <th style={{width:"20%"}}>Cost</th>
                  <th style={{width:"20%"}}>Claimed on</th>
                </tr>
                {historyObj.map((ele,index)=>{
                  return <tr key={index}>
                    <td style={{width:"50%"}}>{ele.reward}</td>
                    <td style={{width:"20%"}}>{ele.cost} Points</td>
                    <td style={{width:"20%"}}>{ele.claimed}</td>
                  </tr>
                })}
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
