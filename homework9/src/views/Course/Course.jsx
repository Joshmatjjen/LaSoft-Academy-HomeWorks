import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { useLocation } from "react-router-dom";

import Button from "../../components/Button";

import "./course.styles.css";
import ImageBackground from "../../components/ImageBackground";

const Course = () => {
  const { state: courseData } = useLocation();

  return (
    <div className="content course--content">
      <section className="course--content__left">
        <div className="course--content__left--1">
          <h3>Basic Sketching</h3>
        </div>
        <div className="course--content__left--2">
          <div>
            <p>Level:</p>
            <p>{courseData.level}</p>
          </div>
          <div>
            <p>Duration:</p>
            <p>
              {courseData.duration}
              <br />
              {courseData.periodicity}
            </p>
          </div>
        </div>
        <div className="course--content__left--3">
          <p>You will learn:</p>
          <ul>
            {courseData.descriptionFull.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="course--content__left--4">
          <p>Price:</p>
          <p>{getSymbolFromCurrency(courseData.currency)}300</p>
        </div>
        <Button title="Apply now" classes="course-item-btn" type="button" />
      </section>

      <ImageBackground
        className="course--content__right"
        image={courseData.thumbnail_img_url}
        alt="Course Art Work"
      />
    </div>
  );
};

export default Course;
