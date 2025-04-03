import React from "react";
import "./Button.scss";

// type ButtonProps = {
//   text: string;
//   className?: string;
//   href?: string;
//   newTab?: string;
// }

export default function Button({text, className, href, newTab}: any) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}