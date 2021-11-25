import classes from "./ParentCon.module.css";
const ParentCon = (props) => {
  return (
    <div
      className={`${classes.main} scale-in-center`}
      style={{
        backgroundImage: `url("${props.backgroundURL}")`,
      }}
    >
      {props.children}
    </div>
  );
};

export default ParentCon;
