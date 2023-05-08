import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/downloadfast-removebg-preview.png";
import categoryImg02 from "../../../assets/images/beautiful-long-dress-sign-red-icon-inside-vector-13603761-removebg-preview.png";
import categoryImg03 from "../../../assets/images/payment-icon-vector-5388406__1_-removebg-preview.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "MAX Safety Delivery",
    imgUrl: categoryImg01,
  },
  {
    display: "100% Qulaity Products",
    imgUrl: categoryImg02,
  },

  {
    display: "100% Secure Payment",
    imgUrl: categoryImg03,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img className="category__img1" src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
