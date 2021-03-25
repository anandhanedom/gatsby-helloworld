import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <h1>Hola</h1>
      <h2>
        Don't miss all the news of the best league in the world. The single
        place for all LaLiga Santander football.
      </h2>
      <p>
        Want to work with us? <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  );
};

export default Home;
