/*
 * @Description: 底部版权
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2023-11-01 08:55:11
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-04-26 16:11:08
 */
import { CopyrightOutlined, GithubOutlined } from "@ant-design/icons";
import { Row, Space, Typography } from "antd";
import { FC } from "react";

const { Text } = Typography;

const Footer: FC = () => {
  return (
    <Space
      direction="vertical"
      size="small"
      style={{ display: "flex", padding: "20px 0" }}>
      <Row justify="center" align="middle">
        <Space size="small" align="center" wrap>
          <Text type="secondary">
            <CopyrightOutlined style={{ marginRight: 5 }} />
            Power by
          </Text>
          <a href="https://github.com/weiyi412" target="_blank">
            <Text type="secondary">
              <GithubOutlined style={{ marginRight: 5 }} />
              浮生梦
            </Text>
          </a>
        </Space>
      </Row>
    </Space>
  );
};
export default Footer;
