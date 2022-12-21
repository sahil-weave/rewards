import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatients } from "../Utils";
function LandingPage() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [activerewards, setActiveRewards] = useState(true);
  const [rewardObj, setRewardObj] = useState([])
  const {Patients, setPatients, masterHistory, setMasterHistory, masterPoints, setMasterPoints} = usePatients();
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
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
}, []);
  const rewards = [
    {
      reward:"5% off on next visit",
      cost:"10",
      status:false,
      reward_id:"1"
    },
    {
      reward:"flat 15$ off on next visit",
      cost:"25",
      status:true,
      reward_id:"2"
    },
    {
      reward:"50% off on teeth whitenings",
      cost:"350",
      status:true,
      reward_id:"3"
    },
    {
      reward:"Free pet grooming ",
      cost:"500",
      status:false,
      reward_id:"4"
    },
    {
      reward:"40% off on contact lenses",
      cost:"700",
      status:true,
      reward_id:"5"
    }

  ]
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
            Available Balance: {masterPoints} Points!
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
                  return <tr key={index}>
                  <td style={{width:"50%"}}>{ele.reward}</td>
                  <td style={{width:"20%"}}>{ele.cost} Points</td>
                  <td className="redeemTable" onClick={()=>{
                      let res=window.confirm("Are you sure you want to redeem \""+ele.reward+"\"?")
                      if(res)
                      {
                          if(masterPoints>Number(ele.cost))
                      {
                          setMasterPoints(masterPoints - Number(ele.cost))
                          setMasterHistory([...masterHistory,         {
                            points : ele.cost,
                            credited_on :"",
                            user_email : sessionStorage.getItem("useremail"),
                            debited_on:new Date().toLocaleDateString("en-US")
                        },])
                        setPatients([
                            ...Patients,{
                                reward_name:ele.reward,
                                reward_id:ele.reward_id,
                                claimed:new Date().toLocaleDateString("en-US"),
                                status:"active",
                                user_email:sessionStorage.getItem("useremail"),
                                price:ele.cost,
                    
                              },
                        ])
                        //   redeemHandler(ele)
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
                {Patients.map((ele,index)=>{
                  return sessionStorage.getItem("useremail")===ele.user_email&&<tr key={index}>
                    <td style={{width:"50%"}}>{ele.reward_name}</td>
                    <td style={{width:"20%"}}>{ele.price} Points</td>
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
