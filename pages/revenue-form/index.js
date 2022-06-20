import { useState, useEffect } from "react";
import { Typography, Spin, Table } from "antd";
import moment from "moment";

import Layout from "../../components/Layout/layout";

const { Title } = Typography;

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const Revenue = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const res = await fetch("/api/submission?form=revenue");
        const result = await res.json();

        const modifiedData = result.data.map((info) => {
          return {
            key: info._id,
            email: info.email,
            createdAt: moment(info.createdAt).format("lll"),
          };
        });

        setData(modifiedData);

        setLoading(false);
      } catch (err) {
        console.log("err", err);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Layout>
        <Spin size="large" spinning={loading}>
          <Title>Increase Revenue Form Submissions</Title>
        </Spin>

        <div>
          <Table dataSource={data} columns={columns} />
        </div>
      </Layout>
    </div>
  );
};

export default Revenue;
