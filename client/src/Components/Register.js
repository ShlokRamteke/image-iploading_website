import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Register = () => {
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");

  const setData = (e) => {
    setFName(e.target.value);
  };

  const setImgFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", fname);

    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post("/register", formData, config);
    console.log(res);
  };

  return (
    <>
      <div className="container mt-3">
        <h1> Upload your image here</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name="fname" onChange={setData} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" name="photo" onChange={setImgFile} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
