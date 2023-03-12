import React, { useState } from "react";
import "../Styles/Components.scss";
import upload from "../Images/upload.png";
import Input from "../Components/Input";
import { Outlet, Link } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="upload-container">
      <h2 className="upload-h2"> 1. Upload photos(upto 10photos)</h2>
      <div className="upload-img-box">
        <img src={upload} alt="upload"></img>
      </div>
      <input type="file" onChange={handleChange} />
      <img src={file} alt="" />

      <h2 className="upload-h2">2.Title</h2>
      <Input />
      <h2 className="upload-h2"> 3. Type</h2>
      <Input />
      <h2 className="upload-h2">4. Price </h2>
      <Input />
      <h2 className="upload-h2">5.Description</h2>
      <Input />
      <button>
      <Link to="/Browse" style={{ textDecoration: 'none', color:'#F8E7BA'}}>Delete</Link>
        </button>
      <button>
      <Link to="/Browse" style={{ textDecoration: 'none', color:'#F8E7BA'}}>Upload</Link>
      </button>
      <Outlet/>
    </div>
  );
}

export default Upload;
