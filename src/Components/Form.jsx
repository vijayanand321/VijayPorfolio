import { useState } from "react";
import "./Form.css";
import React from 'react';
import { FaUserTag } from "react-icons/fa";

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
    mobileNumber: "",
  });

  const { username, email, message, mobileNumber } = userData;

  const [errors, setErrors] = useState({});

  const postUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!message.trim()) newErrors.message = "Message is required";
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }
    return newErrors;
  };

  const submitData = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch(`${window._env_.API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "Authorization": "Basic " + btoa(`${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`),
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        setUserData({
          username: "",
          email: "",
          message: "",
          mobileNumber: "",
        });
        setErrors({});
        alert("Thank you for contacting me");
      } else if (res.status === 409) {
        const errorData = await res.json();
        alert(errorData.message);
      } else {
        const errorvalue = await res.json();
        const errorValueArray = Object.values(errorvalue);
        alert(errorValueArray.join(", "));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <div className="form">
      
        <div className="form-icon">
          <FaUserTag size={40} className="icon" />
        </div>
        
      <form method="post">
        <label>Username</label>
        <input
          type="text"
          value={username}
          name="username"
          onChange={postUserData}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>E-mail</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={postUserData}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          value={message}
          name="message"
          onChange={postUserData}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <label>Mobile Number</label>
        <input
          type="text"
          value={mobileNumber}
          name="mobileNumber"
          onChange={postUserData}
          maxLength="10"
        />
        {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

        <button className="btn" onClick={submitData}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
