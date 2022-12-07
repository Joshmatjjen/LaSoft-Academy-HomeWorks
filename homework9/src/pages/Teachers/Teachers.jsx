import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import BounceLoader from "react-spinners/BounceLoader";

import { getTeachersAction } from "../../resources/teacher/teacher.actions";
import { selectTeachers } from "../../resources/teacher/teacher.selectors";

import "./teachers.styles.css";

const Teachers = ({ onGetTeachersAction, teachers }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchTeachers = useCallback(async () => {
    setErrorMsg(null);
    setLoading(true);
    const res = await onGetTeachersAction();
    if (res.type === "success") {
      setErrorMsg(null);
      setLoading(false);
    } else {
      setErrorMsg("No course found");
      setLoading(false);
    }
  }, [onGetTeachersAction]);

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
              <div key={item.id} className="teachers-item">
                <div className="teachers-item---image">
                  <img src={item.photo} alt="" />
                </div>
                <div className="teachers-item-container">
                  <div className="teachers-item-1">
                    <p>{item.first_name + " " + item.last_name}</p>
                  </div>
                  <div className="teachers-item-2">
                    <div>
                      <p>Courses:</p>
                      <ul>
                        {item.courses.map((it) => (
                          <li>
                            {it} <br />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p>Education:</p>
                      <p>{item.education}</p>
                    </div>
                    <div>
                      <p>About me:</p>
                      <p>{item.about}</p>
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

const mapStateToProps = createStructuredSelector({
  teachers: selectTeachers,
});

const mapDispatchToProps = (dispatch) => ({
  onGetTeachersAction: (data) => dispatch(getTeachersAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
