import React from "react";
import MenuList from "../MenuList/MenuList";
import { Row, Col } from "antd";

const subMenu = [
  { title: "副菜单1-1", href: "/subnav1/content1" },
  { title: "副菜单1-2", href: "/subnav1/content2" },
  { title: "副菜单1-3", href: "/subnav1/content3" },
  { title: "副菜单1-4", href: "/subnav1/content4" },
];

const RouterPageOne = (props) => {
  return (
    <>
      <Row>
        <Col span={6}>
          <MenuList mode="vertical" menuList={subMenu} />
        </Col>
        <Col span={18}>{props.children}</Col>
      </Row>
    </>
  );
};

export default RouterPageOne;
