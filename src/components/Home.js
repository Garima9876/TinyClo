import React from "react";
import homeImage from "../components/assets/home-page.png";
import SectionWrapper from "./SectionWrapper";

const Home = () => {
  return (
    <SectionWrapper>
      <section className="bg-home-colour">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <h1 className="display-5 fw-bold">
                <span className="text-unique-secondary">BABIES</span> GROW FAST
              </h1>
              <p className="lead">Simplify Your Life with Our</p>
              <button className="btn btn-unique-secondary text-white fw-bold btn-lg my-2 py-0">
                TinyClo Subscription
              </button>
              <div className="mt-5">
                <button className="btn btn-secondary mx-2 fw-bold mb-2 mb-lg-0 px-4">
                  How it works?
                </button>
                <button className="btn btn-primary mx-2 fw-bold text-white">
                  Start Membership
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={homeImage}
                alt="Mother and Baby"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Home;
