import classes from "./main.module.css";
import Button from "../UI/Button/Button"

const Main = () => {
    return (
        <section className={classes.main}>
            <div className={classes.parent}> 
          <div className={classes.container}>
              <h1>Pixonoids Interview 2k21</h1>
              <p>
              Team Pixonoids cordially invites you to the Sophomores interviews which gives you a fair chance to connect with people of akin vision and be a part of the team which is driven by the same vigour   
               </p>
              <Button text={"Start"}/>
          </div>
          <div className={classes.threejs}>

            <h1>threejs Animation here</h1>
          </div>
          </div>
        </section>
    )
}

export default Main
