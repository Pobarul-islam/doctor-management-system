import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

const Login = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/user/login',
        values
      );

      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        message.success('Login successful');
        navigate('/');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center text-primary">Please Login !!</h3>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <button className="btn btn-primary" type="submit" htmlType="submit">
              Login
            </button>
          </Form.Item>

          <Link to="/register" className="m-2 text-decoration-none">
            Not an account? Please register
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;














