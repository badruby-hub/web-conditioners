
import classes from "./loader.module.css";

export default function Loader(){
    return <>
    <p className={classes.circle}>
    <span className={`${classes.ouro} ${classes.ouro3}`}>
    <span className={classes.left}><span className={classes.anim}></span></span>
    <span className={classes.right}><span className={classes.anim}></span></span>
  </span>
</p>
    </>
}