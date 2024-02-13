import Button from '../../Button/Button';
import styles from './index.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Description() {
  const location = useLocation();
  const { task } = location.state;
  return (
    <div className={styles.container}>
      <Link to={`/`} className={styles.button__close}>
        &#10006;
      </Link>

      <div>
        <h3 className={styles.task__name}>{task.name}</h3>
        <Button />
      </div>
      <div>
        <p className={styles.description}>{task.description}</p>
        <Button />
      </div>
    </div>
  );
}
