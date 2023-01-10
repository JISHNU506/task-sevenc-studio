import React from "react";
import Navbar from "./Navbar";
import "./Style.css";
import { Data } from "./Data";
import { Chart } from "./Data";



export default function Dashboard() {

  return (
    <>
      <section className="main">
     
        <Navbar selected="DashBoard"/>
        <div className="main-top">
          <h1>Dashboard</h1>
          <div className="box-content">
            <button className="user">Add Users</button>
            <button className="upload">Upload/Create</button>
            <button className="dot">...</button>
          </div>
        </div>
        <div className="status">
          <h2>Basic Status</h2>
          <div className="week">
            Week<i class="bx bx-chevron-down"></i>
          </div>
        </div>
       
        <div className="main-skills">
        {Chart&&Chart.map((item)=>
        <>
        <div className="card">
            <p className="sub">{item.sub}</p>
            <h3>{item.rate}</h3>
            <p className="growth">
              {item.growth}
              <span>
                <i class="bx bxs-up-arrow"></i> {item.rte}%
              </span>
            </p>
          </div>
        </>)}
        
        </div>

        <div className="seperator"></div>
        <div className="status">
          <h2>Top Charts</h2>
        </div>
        <div className="chart-container">
          <div className="charts">
            <div className="songs-item">
              <h4>Top Songs</h4>
              <span className="item">More</span>
            </div>

            {Data&&Data.map((itm)=>
            <>
            <div className="content">
              <img src="icons/image.png" alt="" />
              <div className="top-songs">
                {" "}
                <p className="songs">{itm.songs}</p>
                <p className="item">{itm.item}</p>
              </div>
            </div>
            </>
            )}
          </div>
          <div className="charts">
            <div className="songs-item">
              <h4>Top Artists</h4>
              <span className="item">More</span>
            </div>
            {Data&&Data.map((itm)=>
            <>
            <div className="content">
              <img src="icons/image.png" alt="" />
              <div className="top-songs">
                {" "}
                <p className="songs">{itm.songs}</p>
                <p className="item">{itm.item}</p>
              </div>
            </div>
            </>
            )}
           
          </div>
          <div className="charts">
            <div className="songs-item">
              <h4>Top Podcasts</h4>
              <span className="item">More</span>
            </div>

            {Data&&Data.map((itm)=>
            <>
            <div className="content">
              <img src="icons/image.png" alt="" />
              <div className="top-songs">
                {" "}
                <p className="songs">{itm.songs}</p>
                <p className="item">{itm.item}</p>
              </div>
            </div>
            </>
            )}
          </div>
          <div className="charts">
            <div className="songs-item">
              <h4>Top Events</h4>
              <span className="item">More</span>
            </div>

            {Data&&Data.map((itm)=>
            <>
            <div className="content">
              <img src="icons/image.png" alt="" />
              <div className="top-songs">
                {" "}
                <p className="songs">{itm.songs}</p>
                <p className="item">{itm.item}</p>
              </div>
            </div>
            </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
