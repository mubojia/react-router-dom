import React, { Component } from "react";
import "./index.scss";
import { Row, Col, Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  toggleFrom = () => {
    this.props.switchForm("Login");
  };

  render() {
    return (
      <div className="register">
        <div>
          <div className="form-header">
            <span className="column">注册</span>
            <span className="chage-from" onClick={this.toggleFrom}>
              账号登录
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
                rules={[
                  { required: true, message: "请输入正确的账户" },
                  { type: "email", message: "邮箱格式错误" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="账户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "请输入正确的密码" },
                  (getFieldValue) => ({
                    validator(role, value) {
                      console.log(value);
                    },
                  }),
                ]}
              >
                <Input
                  type="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item
                name="rePassword"
                rules={[
                  { required: true, message: "请输入正确的密码" },
                  { required: true, message: "俩次输入的密码不一致" },
                ]}
              >
                <Input
                  type="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="再次输入密码"
                />
              </Form.Item>

              <Form.Item
                name="verificationCode"
                rules={[
                  { required: true, message: "请输入正确的验证码" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password" === value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Row gutter={16}>
                  <Col span={15}>
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="请输入验证码"
                    />
                  </Col>
                  <Col span={9}>
                    <Button type="danger" block>
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
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
