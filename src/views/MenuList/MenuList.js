import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const MenuList = ({ mode, menuList }) => {
  return (
    <>
      <Menu mode={mode}>
        {menuList.length &&
          menuList.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={item.href}>{item.title}</Link>
              </Menu.Item>
            );
          })}
      </Menu>
    </>
  );
};

export default MenuList;
