import * as styles from './app.module.scss';

export const App = () => (
  <>
    <p className={styles.red}>
      <code>app.scss</code> CSS module <code>.red =&gt; {styles.red}</code>
    </p>

    <p className="green">
      <code>global.scss</code> global <code>.green</code>
    </p>
  </>
);
