import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Style.css";
import Popupmenu from "./Popupmenu";

export default function Artist() {
  const [buttonpopup, setbuttonpopup] = useState(false);
  const [data,setData]=useState({
    CMember:"false",
    VMember:"false"
  })
  const [olddata, setolddata] = useState(JSON.parse(localStorage.getItem("Contact"))||[])


  const valueName=(ev)=>{
    const value=ev.target.value
    const name=ev.target.name
  
   setData({
    ...data,
    [name]:value
   })
  }
  console.log("dataas==>",data);


  const SubmitAction=(act)=>{
    act.preventDefault()
    setbuttonpopup(false)
 
 setolddata([
   ...olddata,
   {...data}
 ])
 console.log("ansers=======================>",olddata);
 }

 useEffect(() => {
  localStorage.setItem("Contact",JSON.stringify(olddata))
  setData({   CMember:"false",
  VMember:"false"})
  
  }, [olddata])


  const dlt=(d)=>{
  console.log("delete=============>",d);

 const dot=olddata.filter(item=>{
 return item.fullname!=d
  })
  
  // console.log(dot)
  setolddata(dot)
}


  return (
    <>
      <section className="artist">
        <Navbar selected="Artist"/>
        <div className="main-top">
          <div className="page">
            <p className="page-indicator">
              First-level Menu/ Second-level Menu / <span>Current Page</span>
            </p>
            <h1 id="artist">Artists</h1>
          </div>

          <div className="box-content">
            <button className="uploader" onClick={() => setbuttonpopup(true)}>
              Add Artist
            </button>

            <button className="dot">...</button>
          </div>
        </div>

        <div className="header_fixed">
          <table>
            <thead>
              <tr>
                <th id="artist">Artist Name</th>
                <th id="coremember">Core Member</th>
                <th id="verified">Verified </th>
                <th id="folowers">Followers</th>
                <th id="albums">ALBUMS/EP</th>
                <th id="created">Created ON</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             
                {olddata&&olddata.map((item)=>
                <>
                 <tr>
                 <td>
                  <img src="https://drive.google.com/uc?export=view&id=1qw3KUJnYgvnJHQP-yY13u_rXrJO8ZbL_" />
                  <span>{item.fullname}</span>
                </td>
                <td>{item.CMember}</td>
                <td>{item.VMember}</td>
                <td>820</td>
                <td>5</td>
                <td>17/06/2021</td>
                <td id="delete" onClick={()=>dlt(item.fullname)}>
                  <i className="fa fa-trash-o" style={{ fontSize: 24 }} />
                </td>
                </tr>
                </>)}
               
              
          
            </tbody>
          </table>
        </div>

        <Popupmenu trigger={buttonpopup} setTrigger={setbuttonpopup}>
          <h3 className="popup-artist">Add Artist</h3>
          <div className="seperator-div"></div>

          <form  onSubmit={SubmitAction}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="enter name" name="fullname" onChange={valueName} required/>
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input type="text" placeholder="enter name"  name="lastname" onChange={valueName}/>
              </div>
              <div className="input-box">
                <span className="details">Single Name</span>
                <input type="text" placeholder="enter name" name="singlename" onChange={valueName} />
              </div>
              <div className="text-area">
                <span className="details">Details</span>
                <textarea
                  name="details" onChange={valueName}
                  cols="30"
                  rows="10"
                  placeholder="Autosize height based on content lines"
                ></textarea>
              </div>
              <div className="upload">
                <div className="image-area">
                 
                  <i class="bx bx-upload"></i> &nbsp;Click to Upload Profile
                  Thumbnail
                </div>
                <div className="image">
                  <img
                    src="https://drive.google.com/uc?export=view&id=1fCtvhYFy1roieanYeXua1jKJyfUhiDS6"
                    alt=""
                  />
                </div>
                <p>
                  Image has to be of aspect ratio 1:1 with a size of 3000 pixels
                  x 3000 pixels
                </p>
              </div>

              <div class="col-sm-9">
                <div class="checkbox">
                  <label for="vertical-checkbox-1">
                    <input
                      type="checkbox"
                      name="CMember"
                      id="vertical-checkbox-1"
                      value="True"
                      onChange={valueName} 
                    />
                    Core Member
                    <span class="check"></span>
                  </label>
                </div>
                <div class="checkbox">
                  <label for="vertical-checkbox-2">
                    <input
                      type="checkbox"
                      name="VMember"
                      id="vertical-checkbox-1"
                      value="True"
                      onChange={valueName} 
                    />
                    Verified Member
                    <span class="check"></span>
                  </label>
                </div>
               
              </div>
              <div className="submission">
                  <button className="cancell">Cancell</button>
                  <button className="ok"  >Ok</button>
                </div>
            </div>
          </form>
        </Popupmenu>
      </section>
    </>
  );
}
