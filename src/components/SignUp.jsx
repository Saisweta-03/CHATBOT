import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.jpg"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ email, setEmail] = useState("");
  const [ name, setName] = useState("");
  const [ number, setNumber] = useState("");
  const [address , setAddress] = useState("");
    let navigate = useNavigate();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
    } else {
      const payload = {
        name,
        email,
        address,
        phone:number,
        username: email,
        password
      }
      const response = await axios.post("http://localhost:8001/signup",payload)
      setPasswordError("");
      alert("Account created successfully!");
      return navigate("/signin");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create Account</Title>
        <Input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name" />
        <Input onChange={(e)=> setAddress(e.target.value)} value={address} type="text" placeholder="Address" />
        <Input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email address" />
        <Input onChange={(e)=> setNumber(e.target.value)} value={number} type="tel" placeholder="Enter your phone number" />

        <Input 
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        <CheckboxWrapper>
          <input type="checkbox" /> I agree to the terms and conditions
        </CheckboxWrapper>

        <Button onClick={handleSignUp}>Sign Up</Button>

        <p>
          Already Have an Account? <Link to="/signin">SignIn</Link>
        </p>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
