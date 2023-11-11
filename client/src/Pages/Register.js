import React from 'react';
import { Form, Input } from 'antd';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
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
            <Input type="text" requerd />
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
