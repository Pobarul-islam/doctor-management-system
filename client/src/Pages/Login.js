import React from 'react';
import { Form, Input } from 'antd';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
 const onFinishHandler = (values) => {
   console.log(values);
 };
const Login = () => {
    return (
      <>
        <div className="form-container">
          <Form
            layout="vertical"
            onFinish={onFinishHandler}
            className="register-form"
          >
            <h3 className="text-center text-primary">Please Login !!</h3>

            <Form.Item label="Email" name="email">
              <Input type="text" requerd />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="text" requerd />
            </Form.Item>

            <button className="btn btn-primary" type="submit">
              Login
            </button>
            <Link to="/register" className="m-2 text-decoration-none">
              Not an account? Please register
            </Link>
          </Form>
        </div>
      </>
    );
};

export default Login;