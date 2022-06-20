import { useState } from "react";
import { Typography, Spin } from "antd";
import Layout from "../../models/components/Layout/layout";

const { Title } = Typography;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

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
