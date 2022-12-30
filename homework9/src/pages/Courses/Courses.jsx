import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";
import getSymbolFromCurrency from "currency-symbol-map";
import { morphism } from "morphism";

import { getCoursesAction } from "../../resources/course/course.actions";

import Button from "../../components/Button";

import "./courses.styles.css";

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.courses);

  const courseToCamel = (data) => {
    const schema = {
      id: "id",
      level: "level",
      name: "name",
      currency: "currency",
      duration: "duration",
      fullImgUrl: "full_img_url",
      groups: "groups",
      periodicity: "periodicity",
      thumbnailImgUrl: "thumbnail_img_url",
      descriptionFull: "description_full",
      descriptionShort: "description_short",
    };

    const source = {
      ...data,
    };

    return morphism(schema, source);
  };

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchCourses = useCallback(async () => {
    setErrorMsg(null);
    setLoading(true);
    const res = await dispatch(getCoursesAction());
    if (res.type === "success") {
      setErrorMsg(null);
      setLoading(false);
    } else {
      setErrorMsg(res.data);
      setLoading(false);
    }
  }, [dispatch]);

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
              <div key={courseToCamel(item).id} className="courses-item">
                <img src={courseToCamel(item).thumbnailImgUrl} alt="" />
                <div className="courses-item-container">
                  <div className="courses-item-1">
                    <p>{courseToCamel(item).name}</p>
                    <p>
                      {getSymbolFromCurrency(courseToCamel(item).currency)}300
                    </p>
                  </div>
                  <div className="courses-item-2">
                    <div>
                      <p>Level:</p>
                      <p>{courseToCamel(item).level}</p>
                    </div>
                    <div>
                      <p>Duration:</p>
                      <p>
                        {courseToCamel(item).duration}
                        <br />
                        {courseToCamel(item).periodicity}
                      </p>
                    </div>
                  </div>
                  <div className="courses-item-3">
                    <p>{courseToCamel(item).descriptionShort}...</p>
                  </div>
                  <Button
                    type="route"
                    title="Apply"
                    classes="courses-item-btn"
                    route={`/courses/${courseToCamel(item).id}`}
                    data={courseToCamel(item)}
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

export default Courses;
