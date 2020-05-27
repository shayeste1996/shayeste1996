import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
const SearchButton = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <>
      <input
        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded-r-full
               w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
                focus:border-purple-500"
        id="inline-full-name"
        type="text"
        value=""
      />
      <Dropdown overlay={menu} trigger={["click"]}>
        <a href="#f"
          className="w-full bg-gray-100 border-2 border-gray-200 text-gray-800 font-bold py-2 px-4 "
          onClick={e => e.preventDefault()}
        >
          دسته را انتخاب کنید <DownOutlined />
        </a>
      </Dropdown>
      <button class="focus:outline-none bg-gray-100 border-2 border-gray-200 hover:bg-gray-400 text-gray-800 font-bold pb-2 px-4 rounded-l-full">
        <SearchOutlined />
      </button>
    </>
  );
};

export default SearchButton;
