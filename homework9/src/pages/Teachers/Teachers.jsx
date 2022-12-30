import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";
import { morphism } from "morphism";

import { getTeachersAction } from "../../resources/teacher/teacher.actions";

import "./teachers.styles.css";

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teacher.teachers);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const teacherToCamel = (data) => {
    console.log("data", data);
    const schema = {
      id: "id",
      about: "about",
      courses: "courses",
      education: "education",
      firstName: "first_name",
      lastName: "last_name",
      photo: "photo",
    };

    const source = {
      ...data,
    };
    console.log("Result--", morphism(schema, source));
    return morphism(schema, source);
  };

  console.log("Tech--", teachers);

  const fetchTeachers = useCallback(async () => {
    setErrorMsg(null);
    setLoading(true);
    const res = await dispatch(getTeachersAction());
    if (res.type === "success") {
      setErrorMsg(null);
      setLoading(false);
    } else {
      setErrorMsg(res.data);
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  return (
    <div className="content teachers--content">
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
            <h3>Meet our great team!</h3>
          </div>

          <section className="teachers--content__box">
            {teachers?.map((item) => (
              <div key={teacherToCamel(item).id} className="teachers-item">
                <div className="teachers-item---image">
                  <img src={teacherToCamel(item).photo} alt="" />
                </div>
                <div className="teachers-item-container">
                  <div className="teachers-item-1">
                    <p>
                      {teacherToCamel(item).firstName +
                        " " +
                        teacherToCamel(item).lastName}
                    </p>
                  </div>
                  <div className="teachers-item-2">
                    <div>
                      <p>Courses:</p>
                      <ul>
                        {teacherToCamel(item).courses.map((it) => (
                          <li>
                            {it} <br />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p>Education:</p>
                      <p>{teacherToCamel(item).education}</p>
                    </div>
                    <div>
                      <p>About me:</p>
                      <p>{teacherToCamel(item).about}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Teachers;
