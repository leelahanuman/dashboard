import React from "react";
import image2 from "../images/security.jpg";

export const AllDevices = () => {
    var showDate=new Date();
    var displayTodaysDate=showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear();
    var dt=showDate.toString();
    var displaytime=showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds();
  return (
    <div>
      <div className="allDevices">
        <div className="deviceContainer d- flex flex-column justify-content-center align-items-center">
          <img src={image2} alt=".." className="securityImage" />
          <h1 classNameName="DeviceTitle">Manage Access and Devices</h1>
          <p classNameName="DeviceSign">
            These signed -in devices have recently been active on this
            account.You can sign out any unfamiliar devices{" "}
          </p>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="header d-flex flex-row">
                  <h5 className="card-title">
                    <i className="fa fa-desktop" aria-hidden="true"></i> PC
                    Chrome-Web browser
                  </h5>
                  <a href="#" className="btn btn-outline-primary">
                    SignOut
                  </a>
                </div>
                <hr />
                <p className="card-text mt-3">
                  <i className="fa fa-user"></i> No profile to show
                </p>
                <p className="card-text mt-3">
                  <i className="fa fa-clock"></i> {dt},{displaytime} 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="header d-flex flex-row">
                  <h5 className="card-title">
                    <i className="fa fa-mobile"></i> Android phone
                  </h5>
                  <a href="#" className="btn btn-outline-primary">
                    SignOut
                  </a>
                </div>
                <hr />
                <p className="card-text mt-3">
                  <i className="fa fa-user"></i> No profile to show
                </p>
                <p className="card-text mt-3">
                  <i className="fa fa-clock"></i> {dt},{displaytime}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="header d-flex flex-row">
                  <h5 className="card-title">
                    <i className="fa fa-desktop" aria-hidden="true"></i> iPhone
                    Safari -Mobile Browser
                  </h5>
                  <a href="#" className="btn btn-outline-primary">
                    SignOut
                  </a>
                </div>
                <hr />
                <p className="card-text mt-3">
                  <i className="fa fa-user"></i> No profile to Show
                </p>
                <p className="card-text mt-3">
                  <i className="fa fa-clock"></i> {dt},{displaytime}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body ">
                <div className="header d-flex flex-row">
                  <h5 className="card-title mr-5">
                    <i className="fa fa-desktop" aria-hidden="true"></i> iPhone
                    Safari -Mobile Browser
                  </h5>
                  <a href="#" className="btn btn-outline-primary">
                    SignOut
                  </a>
                </div>
                <hr />
                <p className="card-text mt-3 mr-5">
                  <i className="fa fa-user"></i> No profile to Show
                </p>
                <p className="card-text mt-3 mr-5">
                  <i className="fa fa-clock"></i> {dt},{displaytime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
