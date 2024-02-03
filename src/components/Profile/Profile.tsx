import image from "./profile-image.svg";
import styles from "./index.module.css";

export default function Profile(): JSX.Element {
  return (
    <div className={styles.profile}>
      <img src={image} alt="profile" />
    </div>
  );
}
