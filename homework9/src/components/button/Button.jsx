import React from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Button = ({
  type,
  title,
  classes,
  route,
  data,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <>
      {type === "button" ? (
        <div
          disabled={disabled}
          className={clsx(classes, "btn")}
          onClick={onClick}
        >
          {loading ? (
            <ClipLoader
              className="spinner-loader"
              color={"#ffffff"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            title
          )}
        </div>
      ) : (
        <Link
          className={clsx(classes, "btn")}
          to={{
            pathname: `${route}`,
          }}
          state={data}
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
