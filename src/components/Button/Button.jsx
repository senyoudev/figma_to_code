/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TwentyFourUserInterface10 } from "../../icons/TwentyFourUserInterface10";
import "./style.css";

export const Button = ({ type, size, state, icon, className, labelClassName, text = "Label" }) => {
  return (
    <div className={`button ${state} ${size} ${icon} ${type} ${className}`}>
      {((icon === "no" && state === "click") ||
        (icon === "no" && state === "default") ||
        (icon === "no" && state === "disabled") ||
        (icon === "no" && state === "focus") ||
        (icon === "no" && state === "hover")) && <div className={`label ${labelClassName}`}>{text}</div>}

      {((icon === "left" && size === "medium" && state === "click") ||
        (icon === "left" && size === "medium" && state === "default") ||
        (icon === "left" && size === "medium" && state === "disabled") ||
        (icon === "left" && size === "medium" && state === "focus") ||
        (icon === "left" && size === "medium" && state === "hover") ||
        (icon === "left" && size === "small" && state === "click") ||
        (icon === "left" && size === "small" && state === "default") ||
        (icon === "left" && size === "small" && state === "disabled") ||
        (icon === "left" && size === "small" && state === "focus") ||
        (icon === "left" && size === "small" && state === "hover")) && (
        <img
          className="element-user-interface"
          alt="Element user interface"
          src={
            (state === "click" && type === "primary") ||
            (state === "default" && type === "primary") ||
            (state === "focus" && type === "primary") ||
            (state === "hover" && type === "primary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface----29.svg"
              : state === "disabled"
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface----25.svg"
              : "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface----19.svg"
          }
        />
      )}

      {((icon === "left" && size === "medium") ||
        (icon === "left" && size === "small") ||
        (icon === "no" && size === "medium" && state === "loading") ||
        (icon === "no" && size === "small" && state === "loading") ||
        (icon === "right" && size === "medium") ||
        (icon === "right" && size === "normal" && state === "click") ||
        (icon === "right" && size === "normal" && state === "default") ||
        (icon === "right" && size === "normal" && state === "disabled") ||
        (icon === "right" && size === "normal" && state === "focus") ||
        (icon === "right" && size === "normal" && state === "hover") ||
        (icon === "right" && size === "small") ||
        (size === "normal" && state === "loading")) && <div className="text-wrapper">{text}</div>}

      {((icon === "left" && size === "normal" && state === "click") ||
        (icon === "left" && size === "normal" && state === "default") ||
        (icon === "left" && size === "normal" && state === "disabled") ||
        (icon === "left" && size === "normal" && state === "focus") ||
        (icon === "left" && size === "normal" && state === "hover")) && (
        <>
          <TwentyFourUserInterface10
            className="instance-24-user-interface-10"
            color={
              (state === "click" && type === "primary") ||
              (state === "default" && type === "primary") ||
              (state === "focus" && type === "primary") ||
              (state === "hover" && type === "primary")
                ? "white"
                : state === "disabled"
                ? "#ABBED1"
                : "#4CAF4F"
            }
          />
          <div className="div">{text}</div>
        </>
      )}

      {(icon === "right" || (icon === "left" && state === "loading") || (icon === "no" && state === "loading")) && (
        <img
          className="element-arrows-directions"
          alt="Element arrows directions"
          src={
            (size === "medium" && state === "click" && type === "primary") ||
            (size === "medium" && state === "default" && type === "primary") ||
            (size === "medium" && state === "focus" && type === "primary") ||
            (size === "medium" && state === "hover" && type === "primary") ||
            (size === "small" && state === "click" && type === "primary") ||
            (size === "small" && state === "default" && type === "primary") ||
            (size === "small" && state === "focus" && type === "primary") ||
            (size === "small" && state === "hover" && type === "primary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-arrows---directions-right-29.svg"
              : state === "disabled" && ["medium", "small"].includes(size)
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-arrows---directions-right-26.svg"
              : (icon === "left" && size === "medium" && type === "primary") ||
                (icon === "right" && size === "medium" && state === "loading" && type === "primary") ||
                (size === "small" && state === "loading" && type === "primary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface-loading-17.svg"
              : icon === "no" && type === "primary" && size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface-loading-12.svg"
              : (size === "normal" && state === "click" && type === "primary") ||
                (size === "normal" && state === "default" && type === "primary") ||
                (size === "normal" && state === "focus" && type === "primary") ||
                (size === "normal" && state === "hover" && type === "primary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/24-arrows---directions-right-14.svg"
              : state === "disabled" && size === "normal"
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/24-arrows---directions-right-13.svg"
              : state === "loading" && size === "normal" && type === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/24-user-interface-loading-8.svg"
              : (icon === "left" && size === "medium" && type === "secondary") ||
                (icon === "left" && size === "medium" && type === "tertiary") ||
                (icon === "left" && size === "small" && type === "secondary") ||
                (icon === "no" && size === "small" && type === "secondary") ||
                (icon === "right" && size === "medium" && state === "loading" && type === "secondary") ||
                (icon === "right" && size === "medium" && state === "loading" && type === "tertiary") ||
                (icon === "right" && size === "small" && state === "loading" && type === "secondary") ||
                (size === "small" && state === "loading" && type === "tertiary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface-loading-11.svg"
              : icon === "no" && size === "medium" && ["secondary", "tertiary"].includes(type)
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-user-interface-loading-1.svg"
              : (size === "normal" && state === "click" && type === "secondary") ||
                (size === "normal" && state === "click" && type === "tertiary") ||
                (size === "normal" && state === "default" && type === "secondary") ||
                (size === "normal" && state === "default" && type === "tertiary") ||
                (size === "normal" && state === "focus" && type === "secondary") ||
                (size === "normal" && state === "focus" && type === "tertiary") ||
                (size === "normal" && state === "hover" && type === "secondary") ||
                (size === "normal" && state === "hover" && type === "tertiary")
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/24-arrows---directions-right-9.svg"
              : size === "normal" && state === "loading" && ["secondary", "tertiary"].includes(type)
              ? "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/24-user-interface-loading-5.svg"
              : "https://generation-sessions.s3.amazonaws.com/b8dca0392a9d6e75a89fa22ea41e9046/img/16-arrows---directions-right-20.svg"
          }
        />
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "normal"]),
  state: PropTypes.oneOf(["click", "default", "focus", "loading", "hover", "disabled"]),
  icon: PropTypes.oneOf(["right", "no", "left"]),
  text: PropTypes.string,
};
