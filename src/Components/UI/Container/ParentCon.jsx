import classes from "./ParentCon.module.css"
const ParentCon = (props) => {
    return (
        <div className={classes.main} style={{ 
            backgroundImage: `url("${props.backgroundURL}")` 
          }}>
            {props.children}
        </div>
    )
}

export default ParentCon
