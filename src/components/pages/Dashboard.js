import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Calender from "./Calender";

import image5 from "../images/clients.jpg";
import image6 from "../images/orders.jpg";
import image7 from "../images/mone.jpg";
import getUserapi from "../../api/getUser";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const getUserDetails = async () => {
    console.log("1");
    const response = await getUserapi();
    setUser(response);
    console.log(response);
  };

  useEffect(() => {
    localStorage.getItem("token") && getUserDetails();
  }, []);

  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} user={user} setUser={setUser}>
        <Box sx={{ bgcolor: "#f0f0f0", p: 2 }}>
          {/* Content for the fifth row */}
          <div className="invite">
            <h3>
              Welcome Back,{" "}
              <span role="img" aria-label="Party Emoji">
                🎉 
              </span>
            </h3>
          </div>
        </Box>
      </Grid>
      {/* First Row */}

      <Grid item xs={4}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${image7})`,
            backgroundSize: "cover",
            p: 2,
            height: "200px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto" }}>
              Weekly Balance
            </h3>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "25px",
              }}
            >
              $20K
            </p>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            backgroundImage: `url(${image6})`,
            backgroundSize: "cover",
            p: 2,
            height: "200px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto" }}>
              Orders In Line
            </h3>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "25px",
              }}
            >
              750
            </p>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            backgroundImage: `url(${image5})`,
            backgroundSize: "cover",
            p: 2,
            height: "200px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {" "}
          <div>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto" }}>
              Clients
            </h3>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "25px",
              }}
            >
              150
            </p>
          </div>
        </Box>
      </Grid>

      <Grid item xs={8}>
        <Box
          sx={{
            bgcolor: "#80b9ba",
            p: 2,
            display: "flex",
            justifyContent: "start",
            borderRadius: "50px",
            color: "#fff",
            marginTop: "15px",
          }}
        >
          {/* <Status/> */}
          <div className="status">
          <div className="curret">
            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "45px",
              }}
            >
              Status
            </h3>
            <p style={{ fontFamily: "Roboto", fontSize: "25px" }}>
              Shows current status and info of the selected device,please update
              this description section later before deploying this project
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "30px",
              }}
            >
              Current Device's boot time
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                fontSize: "25px",
              }}
            ></p>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "28px",}}>
              Last cooked recipe:
            </h3>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "28px", }}>
              Host(this) device's IP:
            </h3>
            <h3 style={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "28px", }}>
              Selected device status:
            </h3>
          </div>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Calender />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ bgcolor: "	#ffdcc8", p: 2, borderRadius: 5 }}>
          <div class="table-responsive-sm">
            <table class="table">
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </table>
          </div>
          <div class="table-responsive-md">
            <table class="table">
              <tr>
                <th scope="row text-center">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </table>
          </div>
          <div class="table-responsive-lg">
            <table class="table">
              {" "}
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </table>
          </div>
          <div class="table-responsive-xl">
            <table class="table">
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </table>
          </div>{" "}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
