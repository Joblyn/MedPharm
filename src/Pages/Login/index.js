import React from "react";
import { Form, Button } from "react-bootstrap";
import LoginImg from "../../Assets/Images/loginImg.svg";
import { Link } from "react-router-dom";
import './style.css';

export default function Login() {
  return (
    <div className="login_container d-flex">
      <h3 className="p-5 fixed">
        <Link to="/" className="logo">
          MedPharm
        </Link>
      </h3>
      <div className="login_img_container">
        <img alt="" src={LoginImg} />
      </div>
      <div className="login_form_container">
        <Form>
          <h3 className="form_title">Welcome back!</h3>
          <Form.Group className="form_group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="w-100 custom-input"
              placeholder="Please enter your email address"
            />
          </Form.Group>
          <Form.Group className="form_group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              className="w-100 custom-input"
              placeholder="Please enter your password"
            />
          </Form.Group>
          <Link to="/forgot_password" className="text my-3">
            Forgot Password?
          </Link>

          <Button className="w-100 form_btn d-flex justify-content-center align-items-center" href="/news_feed">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
