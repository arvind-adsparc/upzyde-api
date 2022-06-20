import { useState, useEffect } from "react";
import { Typography, Spin, Table } from "antd";
import moment from "moment";

import Layout from "../../components/Layout/layout";

const { Title } = Typography;

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Company Type",
    dataIndex: "companyType",
    key: "companyType",
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const res = await fetch("/api/contact");
        const result = await res.json();

        const modifiedData = result.data.map((info) => {
          return {
            key: info._id,
            firstName: info.firstName,
            lastName: info.lastName,
            company: info.company,
            email: info.email,
            companyType: info.companyType,
            message: info.message,
            createdAt: moment(info.createdAt).format("lll"),
          };
        });

        setData(modifiedData);

        console.log("result", result);
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
          <Title>Contact Form Submissions</Title>
        </Spin>

        <div>
          <Table dataSource={data} columns={columns} />
        </div>
      </Layout>
    </div>
  );
};

export default ContactForm;
