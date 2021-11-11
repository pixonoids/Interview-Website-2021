import classes from "./main.module.css";
import Button from "../UI/Button/Button"

const Main = () => {
    return (
        <section className={classes.main}>
            <div className={classes.parent}> 
          <div className={classes.container}>
              <h1>Pixonoids Interview 2k21</h1>
              <Button text={"Submit"}/>
          </div>
          <div className={classes.threejs}>

            <h1>Hello</h1>
          </div>
          </div>
        </section>
    )
}

export default Main
