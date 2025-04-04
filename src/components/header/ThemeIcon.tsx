interface ThemeIconProps {
  src: string;
}
export function ThemeIcon(props: ThemeIconProps) {
  return (
    <img src={props.src}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "0px 10px"
      }}
      alt="theme-icon"
    >
    </img>
  )
}