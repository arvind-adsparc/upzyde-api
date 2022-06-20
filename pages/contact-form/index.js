import { useState, useEffect } from "react";
import { Typography, Spin } from "antd";
import Layout from "../../models/components/Layout/layout";

const { Title } = Typography;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const res = await fetch("/api/contact");
        const result = await res.json();
        setLoading(false);

        console.log(result);
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
      </Layout>
    </div>
  );
};

export default ContactForm;
