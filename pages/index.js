import Head from "next/head";
import Link from "next/link";
import Layout from "../models/components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="title">Upzyde Dashboard</h1>

        <div className="grid-container">
          <div className="card">
            <h2>Newsletter Form &rarr;</h2>
          </div>
          <div className="card">
            <h2>Request Demo Form &rarr;</h2>
          </div>
          <div className="card">
            <h2>Increase Revenue Form &rarr;</h2>
          </div>

          <div className="card">
            <Link href="/contact-form">
              <h2>Contact Us Form &rarr;</h2>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
