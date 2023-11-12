import React from 'react';
import { Form, Input, message } from 'antd';
import '../styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/user/register',
        values
      );
      if (res.data.success) {
        message.success('Registered successfully');
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('something went wrong');
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
          <h3 className="text-center text-primary">Please Register !!</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" requerd />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="text" requerd />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" requerd />
          </Form.Item>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
          <Link to="/login" className="m-2 text-decoration-none">
            You have an account? Please Login
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Register;
