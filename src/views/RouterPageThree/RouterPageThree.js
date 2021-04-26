import React from "react";
import MenuList from "../MenuList/MenuList";
import { Row, Col } from "antd";

const subMenu = [
  { title: "副菜单3-1", href: "/subnav3/content1" },
  { title: "副菜单3-2", href: "/subnav3/content2" },
  { title: "副菜单3-3", href: "/subnav3/content3" },
  { title: "副菜单3-4", href: "/subnav3/content4" },
];

const RouterPageThree = (props) => {
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

export default RouterPageThree;
