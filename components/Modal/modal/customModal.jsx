import classes from "./customModal.module.scss";

export default function CustomModal(props) {
  const { setState, width } = props;
  return (
    <div className={classes.backdrop}>
      <div className={classes.modalBody} style={{width: width ||"80%"}}>
        <button onClick={() => setState(false)}>&times;</button>
        <div className={classes.modalContent}>{props.children}</div>
      </div>
    </div>
  );
}
