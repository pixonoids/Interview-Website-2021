import classes from "./main.module.css";
import Button from "../UI/Button/Button";
import Map from "../UI/map/Map";
import { Link } from "react-router-dom";
import ThreeCube from "../three/girlModel";
import Cube from "../three/cube";
import Video from "../three/three circle/video";

const Main = () => {
  return (
    <>
      <video className={classes.videotag} autoPlay loop muted>
        <source src={"./video/back.mp4"} type="video/mp4" />
      </video>
      <section className={classes.main}>
        <div className={classes.parent}>
          <div className={classes.container}>
            <h1>Pixonoids Interview 2k21</h1>
            <p>
              Team Pixonoids cordially invites you to the Sophomores interviews
              which gives you a fair chance to connect with people of akin
              vision and be a part of the team which is driven by the same
              vigour
            </p>

            <Button
              to="/authen"
              type="solid"
              text={"Start your Application"}
            ></Button>
          </div>
        </div>
        <div className={classes.threejs}>
          {/* <Video/> */}

          <Cube />
        </div>
      </section>
    </>
  );
};

export default Main;
