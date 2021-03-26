import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const Home = () => {
  return (
    <Layout>
      <Head title={"Home"} />
      <h1>All the latest & breaking football news.</h1>
      <h3>
        All news. <br />
        All matches. <br />
        All leagues & teams.
      </h3>
      <p>
        Want to work with us? <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  );
};

export default Home;
