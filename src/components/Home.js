import React from "react";
import homeImage from "../components/assets/home-page.png";
import clothing from "../components/assets/clothing.png";
import equipments from "../components/assets/equipments.png";
import toys from "../components/assets/toys.png";
const Home = () => {
  return (
    <>
      <section className="bg-home-colour">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center mt-5">
              <h1 className="display-5 fw-bold mt-2">
                <span className="text-unique-secondary">BABIES</span> GROW FAST
              </h1>
              <p className="comfortaa-font">Simplify Your Life with Our</p>
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
      <section className="categories py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div
                className="card h-80 position-relative"
                style={{
                  backgroundColor: "#4695CF26",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                <div className="row px-3">
                  <div className="col-lg-5 position-relative">
                    <img
                      src={clothing}
                      alt="Kids Clothing"
                      style={{
                        position: "absolute",
                        left: "0",
                        bottom: "0",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-lg-7 card-body px-3">
                    <h2 className="card-title comissioner-font">
                      Kids Clothing
                    </h2>
                    <p className="card-text fw-500 comissioner-font">
                      Age (0-6)
                    </p>
                    <button className="btn btn-secondary fw-bold">
                      Explore &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div
                className="card h-80 position-relative"
                style={{
                  backgroundColor: "#DF88929E",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                <div className="row px-3">
                  <div className="col-lg-7 card-body">
                    <h2 className="card-title comissioner-font">Equipments</h2>
                    <p className="card-text fw-500 comissioner-font">
                      Age (0-6)
                    </p>
                    <button className="btn btn-secondary fw-bold">
                      Explore &gt;
                    </button>
                  </div>
                  <div className="col-lg-5 position-relative">
                    <img
                      src={equipments}
                      alt="Equipments"
                      style={{
                        position: "absolute",
                        right: "-30px",
                        bottom: "-30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div
                className="card h-80 position-relative"
                style={{
                  backgroundColor: "#2CA06E4D",
                  border: "none",
                  borderRadius: "15px",
                }}
              >
                <div className="row px-3">
                  <div className="col-lg-8 card-body">
                    <h2 className="card-title comissioner-font">Toys</h2>
                    <p className="card-text fw-500 comissioner-font">
                      Age (0-6)
                    </p>
                    <button className="btn btn-secondary fw-bold">
                      Explore &gt;
                    </button>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <img
                      src={toys}
                      alt="Toys"
                      style={{
                        position: "absolute",
                        right: "-30px",
                        bottom: "-30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
