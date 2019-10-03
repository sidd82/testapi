import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Requested Started");
    axios
      .post(
        `https://sptapiservice.evershinetechsolutions.com/API/AirSearch`,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        },
        {
          withCredentials: true
        },
        {
          AdultCount: 1,
          ChildCount: 0,
          InfantCount: 0,
          IsDomestic: true,
          DirectFlight: false,
          CabinType: 1,
          AirTripType: 1,
          Segments: [
            {
              Origin: "MAA",
              Destination: "DEL",
              DepartureDateTime: "2019-10-04T00:00:00"
            }
          ],
          AirlineSource: []
        },
        {
          auth: {
            username: "SPTCoreCelo",
            password: "SPTc@reCel@1920"
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log("Requested Ended");
      })
      .catch(e => {
        console.log(e);
        console.log("Catch Block Triggered");
      });
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
