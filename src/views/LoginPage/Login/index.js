import React, { Component } from "react";
import "./index.scss";
import { Row, Col, Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import api from "../../../api/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  onFinish = (values) => {
    api
      .Login()
      .then((res) => {
        console.log("ok");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getCode = () => {
    let params = {
      username: this.state.username,
      module: "login",
    };
    api
      .GetSms(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleFrom = () => {
    console.log(this.props);
    this.props.switchForm("Register");
  };

  inputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="login">
        <div>
          <div className="form-header">
            <span className="column">登录</span>
            <span className="chage-from" onClick={this.toggleFrom}>
              账号注册
            </span>
          </div>
          <div className="from-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入正确的账户" }]}
              >
                <Input
                  value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="账户名"
                  onChange={this.inputChange}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入正确的密码" }]}
              >
                <Input
                  type="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="密码"
                />
              </Form.Item>

              <Form.Item
                name="verificationCode"
                rules={[{ len: 6, message: "请输入6位正确验证码" }]}
              >
                <Row gutter={16}>
                  <Col span={15}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码1"
                    />
                  </Col>
                  <Col span={9}>
                    <Button type="danger" onClick={this.getCode} block>
                      获取验证码
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
