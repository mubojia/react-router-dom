import React from "react";
import MenuList from "../MenuList/MenuList";
import { Row, Col } from "antd";

const subMenu = [
  { title: "副菜单4-1", href: "/subnav4/content1" },
  { title: "副菜单4-2", href: "/subnav4/content2" },
  { title: "副菜单4-3", href: "/subnav4/content3" },
  { title: "副菜单4-4", href: "/subnav4/content4" },
];

const RouterPageFour = (props) => {
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

export default RouterPageFour;
