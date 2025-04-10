import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  newTab?: string;
}

export default function Button({text, className, href, newTab}: Readonly<ButtonProps>) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}