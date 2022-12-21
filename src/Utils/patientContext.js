import { createContext, useContext } from "react";
import { useState } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const masterObj = [
        {
            reward_name:"5% off on next visit",
            reward_id:"1",
            claimed:"1/23/2022",
            status:"active",
            user_email:"user123@gmail.com",
            price:"10",

          },
          {
              reward_name:"5% off on next visit",
              reward_id:"1",
              claimed:"2/13/2022",
              status:"expired",
              user_email:"user123@gmail.com",
              price:"10",
            },
            {
              reward_name:"50% off on teeth Whitening",
              reward_id:"3",
              claimed:"7/27/2022",
              status:"active",
              user_email:"user123@gmail.com",
              price:"350",
            },{
            reward_name:"flat 15$ off on next visit",
            reward_id:"2",
            claimed:"1/23/2022",
            status:"active",
            user_email:"user@gmail.com",
            price:"25",

          },
          {
              reward_name:"5% off on next visit",
              reward_id:"1",
              claimed:"2/13/2022",
              status:"expired",
              user_email:"user@gmail.com",
              price:"10",
            },
            {
              reward_name:"Free Teeth cleaning",
              reward_id:"5",
              claimed:"7/27/2022",
              status:"active",
              user_email:"user@gmail.com",
              price:"700",
            },{
            reward_name:"5% off on next visit",
            reward_id:"1",
            claimed:"11/23/2021",
            status:"expired",
            user_email:"user@gmail.com",
            price:"10",

          },
          {
              reward_name:"flat 15$ off on next visit",
              reward_id:"1",
              claimed:"12/13/2022",
              status:"active",
              user_email:"user@gmail.com",
              price:"25",
            },
            {
              reward_name:"50% off on teeth Whitening",
              reward_id:"3",
              claimed:"7/27/2022",
              status:"active",
              user_email:"user123@gmail.com",
              price:"350",
            },
        ]
        const masterLedger = [
        {
            points : 125,
            credited_on :"",
            user_email : "user2@gmail.com",
            debited_on:"10/19/2021"
        },
        {
             points : 200,
             credited_on :"07/14/2021",
             user_email : "rahul@gmail.com",
             debited_on:""
         },
         {
            points : 200,
            credited_on :"05/9/2021",
            user_email : "user@gmail.com",
            debited_on:""
        },
        {
           points : 25,
           credited_on :"05/9/2021",
           user_email : "user@gmail.com",
           debited_on:"11/23/2021"
       },
        {
            points : 245,
            credited_on :"10/19/2021",
            user_email : "user2@gmail.com",
            debited_on:""
        },
        {
            points : 175,
            credited_on :"03/31/2021",
            user_email : "user123@gmail.com",
            debited_on:""
        },
        {
            points : 100,
            credited_on :"07/14/2021",
            user_email : "rahul@gmail.com",
            debited_on:""
        },
       {
           points : 700,
           credited_on :"",
           user_email : "user123@gmail.com",
           debited_on:"11/31/2021"
       }
    ]
  const [Patients, setPatients] = useState(masterObj);
  const [masterHistory, setMasterHistory] = useState(masterLedger)
  const [masterPoints, setMasterPoints] = useState(649);
  return (
    <PatientContext.Provider value={{ Patients, setPatients, masterHistory, setMasterHistory, masterPoints, setMasterPoints }}>
      {children}
    </PatientContext.Provider>
  );
};
export const usePatients = () => useContext(PatientContext);