import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [activerewards, setActiveRewards] = useState(true);
  useEffect(() => {
    if(!sessionStorage.getItem("username"))
    {
      navigate("/auth")
    }
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const rewards = [
    {
      reward:"5% off on next visit",
      cost:"10 Points"
    },
    {
      reward:"flat 15$ off on next visit",
      cost:"25 Points"
    },
    {
      reward:"50% off on teeth whitenings",
      cost:"350 Points"
    },
    {
      reward:"Amazon Gift card worth 35$",
      cost:"500 Points"
    },
    {
      reward:"Free teeth cleaning",
      cost:"700 Points"
    }

  ]
  const History = [
    {
      reward:"5% off on next visit",
      cost:"10 Points",
      claimed:"13 Feb 2022"
    },
    {
      reward:"Amazon Gift card worth 35$",
      cost:"500 Points",
      claimed:"27 Aug 2022"
    },

  ]
  return (
    <div style={{ minWidth: "100vw" }}>
      <div id="square" contentEditable />
      {/*clip css */}
      <div className="gridContainer">
        <div className="child1">
          <div style={{ fontSize: "1.8rem", padding: "10px" }}>
            Introducting{" "}
            <span style={{ color: "var(--primary)", fontWeight: "900" }}>
              Weave Rewardz!
            </span>
          </div>
          <div style={{ fontSize: "1.3rem" }}>
            So far, your loyalty has accumulated 300 Points!
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
                {rewards.map((ele,index)=>{
                  return <tr key={index}>
                    <td style={{width:"50%"}}>{ele.reward}</td>
                    <td style={{width:"20%"}}>{ele.cost}</td>
                    <td className="redeemTable">Redeem</td>
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
                {History.map((ele,index)=>{
                  return <tr key={index}>
                    <td style={{width:"50%"}}>{ele.reward}</td>
                    <td style={{width:"20%"}}>{ele.cost}</td>
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
