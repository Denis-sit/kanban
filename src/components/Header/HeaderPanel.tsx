import Profile from "../Profile/Profile";
import styles from "./index.module.css";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useEffect, useRef, useState } from "react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function HeaderPanel(): JSX.Element {
  const [click, setClick] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const clickProfile = (event: React.MouseEvent) => {
    event.stopPropagation();
    setClick((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClick(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bord_name}>Awesome Kanban Board</div>
        <div className={styles.button} onClick={clickProfile}>
          <Profile />
          <ArrowButton click={click} />
          {click && <ProfileMenu ref={ref} />}
        </div>
      </header>
    </>
  );
}
