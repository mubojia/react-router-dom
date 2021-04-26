import React from "react";
import MenuList from "../MenuList/MenuList";
import { Row, Col } from "antd";

const subMenu = [
  { title: "副菜单2-1", href: "/subnav2/content1" },
  { title: "副菜单2-2", href: "/subnav2/content2" },
  { title: "副菜单2-3", href: "/subnav2/content3" },
  { title: "副菜单2-4", href: "/subnav2/content4" },
];

const RouterPageTwo = (props) => {
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

export default RouterPageTwo;
