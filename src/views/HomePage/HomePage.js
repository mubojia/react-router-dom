import React, { Fragment } from "react";
import { Row, Col } from "antd";
import MenuList from "../MenuList/MenuList";

const mainMenu = [
  { title: "主菜单一", href: "/subnav1" },
  { title: "主菜单二", href: "/subnav2" },
  { title: "主菜单三", href: "/subnav3" },
  { title: "主菜单四", href: "/subnav4" },
];

const HomePage = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Row>
        <Col span={24}>
          <MenuList mode="horizontal" menuList={mainMenu} />
        </Col>
      </Row>

      {props.children}
    </Fragment>
  );
};

export default HomePage;
