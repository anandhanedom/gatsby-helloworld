import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I'm Jack Sparrow, a full stack developer, living in Yellowstone Park.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  );
};

export default Home;
