import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/Tech-trends-to-rule-in-fashion-e-commerce-feature-01.jpg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import { API_ALL_URL } from "../assets/fake-data/products.js";


import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";


const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(API_ALL_URL);
      const json = await data.json();
      setAllProducts(json);
      setFilteredProducts(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (category === "ALL") {
      setFilteredProducts(allProducts);
    }

    if (category === "men's clothing") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "men's clothing"
      );
      setFilteredProducts(filteredProducts);
    }

    if (category === "jewelery") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "jewelery"
      );
      setFilteredProducts(filteredProducts);
    }

    if (category === "electronics") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "electronics"
      );
      setFilteredProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
       <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Shopping different products from different websites ??</h5>
                <h1 className="mb-4 hero__title">
                  <span>One Place</span> for all <br /> your
                  <span> Shopping needs</span>
                </h1>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4"> 

                  <button className="all__shopping-btn">
                    <Link to="/shopping">Explore all Products</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Items</h2>
            </Col>

            <Col lg="12">
              <div className="shopping__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  {
                    category === "ALL" ? "shoppingBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 {
                    category === "men's clothing"" ? "shoppingBtnActive" : ""
                  } `}
                  onClick={() => setCategory("men's clothing")}
                >
                 
                  <span className="BoldData">M</span>en's clothing
                </button>

                <button
                  className={`d-flex align-items-center gap-2 {
                    category === "jewelery" ? "shoppingBtnActive" : ""
                  } `}
                  onClick={() => setCategory("jewelery")}
                >
                  
                  <span className="BoldData">J</span>ewelery
                </button>

                <button
                  className={`d-flex align-items-center gap-2 {
                    category === "electronics" ? "shoppingBtnActive" : ""
                  } `}
                  onClick={() => setCategory("electronics")}
                >
                
                <span className="BoldData">E</span>lectronics
                </button>
              </div>
            </Col> 

            {filteredProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="Image-width" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  New Fashion and Products Everyday<span></span>
                </h2>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh designs
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Order in few minutes{" "}
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>  

    </Helmet>
  );
};

export default Home;
