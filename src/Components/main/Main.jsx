import classes from "./main.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Cube from "../three/cube";
import Loading from "../loading/Loading";
import { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
    window.sessionStorage.setItem("currentPage", "authen");
  }, []);
  //click functions
  const onClickMain = () => {
    navigate("/register");
  };
  return (
    <>
      <Loading load={loading} />
      <video className={classes.videotag} autoPlay loop muted>
        <source src={"./video/back.mp4"} type="video/mp4" />
      </video>
      <section className={classes.main}>
        <div className={classes.parent}>
          <div className={classes.container}>
            <h1>Pixonoids Interview 2K22</h1>
            <p>
              Team Pixonoids cordially invites you to the Freshmen interviews
              which gives you a fair chance to connect with people of akin
              vision and be a part of the team which is driven by the same
              vigour
            </p>

            <Button
              type="solid"
              text={"Start your Application"}
              onClick={onClickMain}
            ></Button>
          </div>
        </div>
        <div className={classes.threejs}>
          {/* <Video/> */}

          <Cube loading={setLoading} />
        </div>
      </section>
    </>
  );
};

export default Main;
