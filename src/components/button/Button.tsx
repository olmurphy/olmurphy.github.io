import { HTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  href?: string;
  newTab?: string;
  download?: string;
}

export default function Button({text, className, href, newTab, download}: Readonly<ButtonProps>) {
  return (
    <div className={className}>
      <a download={download} className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}