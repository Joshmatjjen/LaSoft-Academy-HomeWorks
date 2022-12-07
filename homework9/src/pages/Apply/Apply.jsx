import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useLocation, useNavigate } from "react-router-dom";

import {
  applyCoursesAction,
  getCoursesAction,
} from "../../resources/course/course.actions";
import { selectCourses } from "../../resources/course/course.selectors";

import Button from "../../components/Button";
import { InputApply } from "../../components/Input";

import Success from "../../views/Success";

import artWorkImg from "../../assets/img/artWork.png";

import "./apply.styles.css";
import ImageBackground from "../../components/ImageBackground";

const Apply = ({ onGetCoursesAction, courses, onApplyCoursesAction }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    courseId: "",
    groupId: "",
    full_name: "",
    email: "",
    phone: "",
  });
  const [newCourse, setNewCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseGroup, setCourseGroup] = useState(null);
  const [applySuccess, setApplySuccess] = useState(
    state?.subscribeSuccess || false
  );

  const fetchCourses = useCallback(async () => {
    await onGetCoursesAction();
  }, [onGetCoursesAction]);

  const submitForm = useCallback(async () => {
    setLoading(true);

    const res = await onApplyCoursesAction(formData);
    if (res.type === "success") {
      setLoading(false);
      setApplySuccess(true);
    } else {
      setLoading(false);
    }
  }, [formData, onApplyCoursesAction]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  useMemo(() => {
    if (courses) {
      const courseData = courses.map((it) => {
        return { ...it, label: it.name, value: it.name };
      });
      setNewCourse(courseData);
    }
  }, [courses]);

  useMemo(() => {
    if (selectedCourse) {
      const groupData = selectedCourse.groups.map((it) => {
        return {
          ...it,
          label: it.days.join(`/`).concat(` ${it.time}`),
          value: it.id,
        };
      });
      setCourseGroup(groupData);
    }
  }, [selectedCourse]);

  return (
    <div className="content apply--content">
      {applySuccess ? (
        <Success
          title="Thank you!"
          subtitle="Check your mailbox. There should be a confirmation letter. We'll contact you soon to give you info about next steps"
          onClick={() => navigate("/")}
          buttonTitle="Back to Home"
        />
      ) : (
        <>
          <section className="apply--content__left">
            <div className="apply--content__left--1">
              <h3>Apply to desired course right away!</h3>
              <p>
                Select desired course and group, leave us your contact
                information and we’ll reach out to you for confirmation and
                letting you know about further steps
              </p>
            </div>
            <div className="apply--content__left--2">
              <InputApply
                title="Course"
                type="select"
                options={newCourse}
                onChange={(value) => {
                  setSelectedCourse(value);
                  setFormData((it) => {
                    return { ...it, courseId: value.id };
                  });
                }}
                isDisabled={!courses}
              />

              <InputApply
                title="Group"
                type="select"
                options={courseGroup}
                onChange={(value) =>
                  setFormData((it) => {
                    return { ...it, groupId: value.id };
                  })
                }
                setFormData={setFormData}
                isDisabled={!selectedCourse}
              />

              <InputApply
                title="Full name"
                value={formData?.full_name}
                onChange={(evt) => {
                  setFormData((it) => {
                    return { ...it, full_name: evt.target.value };
                  });
                }}
              />

              <InputApply
                title="E-mail"
                placeholder="email@email.com"
                value={formData?.email}
                onChange={(evt) => {
                  setFormData((it) => {
                    return { ...it, email: evt.target.value };
                  });
                }}
              />

              <InputApply
                title="Phone number"
                placeholder="(___)___-__-__"
                value={formData?.phone}
                onChange={(evt) => {
                  setFormData((it) => {
                    return { ...it, phone: evt.target.value };
                  });
                }}
              />
            </div>

            <Button
              title="Apply"
              loading={loading}
              disabled={Object.values(formData).some(
                (x) => x === null || x === ""
              )}
              classes="course-item-btn"
              type="button"
              onClick={() => submitForm()}
            />
          </section>

          <ImageBackground
            className="apply--content__right"
            image={artWorkImg}
            alt="Art Work"
          />
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
  onApplyCoursesAction: (data) => dispatch(applyCoursesAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
