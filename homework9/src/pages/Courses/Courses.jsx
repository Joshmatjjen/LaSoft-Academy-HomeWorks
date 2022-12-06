import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import BounceLoader from "react-spinners/BounceLoader";
import getSymbolFromCurrency from "currency-symbol-map";

import { getCoursesAction } from "../../resources/course/course.actions";
import { selectCourses } from "../../resources/course/course.selectors";

import Button from "../../components/Button";

import "./courses.styles.css";

const Courses = ({ onGetCoursesAction, courses }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchCourses = useCallback(async () => {
    setErrorMsg(null);
    setLoading(true);
    const res = await onGetCoursesAction();
    if (res.type === "success") {
      setErrorMsg(null);
      setLoading(false);
    } else {
      setErrorMsg("No course found");
      setLoading(false);
    }
  }, [onGetCoursesAction]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="content courses--content">
      {loading || errorMsg ? (
        <div className="spinner">
          {loading ? (
            <BounceLoader
              className="spinner-loader"
              color={"#59ABB0"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      ) : (
        <>
          <div>
            <h3>Pick your perfect course!</h3>
          </div>

          <section className="courses--content__box">
            {courses?.map((item) => (
              <div key={item.id} className="courses-item">
                <img src={item.thumbnail_img_url} alt="" />
                <div className="courses-item-container">
                  <div className="courses-item-1">
                    <p>{item.name}</p>
                    <p>{getSymbolFromCurrency(item.currency)}300</p>
                  </div>
                  <div className="courses-item-2">
                    <div>
                      <p>Level:</p>
                      <p>{item.level}</p>
                    </div>
                    <div>
                      <p>Duration:</p>
                      <p>
                        {item.duration}
                        <br />
                        {item.periodicity}
                      </p>
                    </div>
                  </div>
                  <div className="courses-item-3">
                    <p>{item.description_short}...</p>
                  </div>
                  <Button
                    type="route"
                    title="Apply"
                    classes="courses-item-btn"
                    route={`/courses/${item.id}`}
                    data={item}
                  />
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCoursesAction: (data) => dispatch(getCoursesAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
