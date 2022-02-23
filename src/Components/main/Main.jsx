import classes from "./main.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Cube from "../three/cube";
import Loading from "../loading/Loading";
import { useEffect, useState } from "react";
import Copyright from "../UI/copyright/Copyright";

const Main = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    window.sessionStorage.setItem("currentPage", "authen");
  }, []);
  //click functions
  const onClickMain = () => {
    navigate("/register");
  };
  return (
    <>
      {loading && <Loading load={loading} />}
      <video className={classes.videotag} autoPlay loop muted>
        <source src={"./video/back.mp4"} type="video/mp4" />
      </video>
      <section className={classes.main}>
        <div className={classes.container}>
          <h1>Freshmen Interviews 2k22</h1>
          <img
            className={classes["model-face"]}
            src="./images/tiltjs/model-face.png"
          ></img>
          <p>
            Team Pixonoids cordially invites you to the Freshmen interviews
            which gives you a fair chance to connect with people of akin vision
            And be a part of the team which is driven by creativity.
          </p>

          <Button
            type="solid"
            text={"Start your Application"}
            onClick={onClickMain}
            className={classes.red}
          ></Button>
        </div>

        <div className={classes.threejs}>
          <Cube loading={setLoading} />
        </div>
        <Copyright className={classes.homefot} />
      </section>
    </>
  );
};

export default Main;
