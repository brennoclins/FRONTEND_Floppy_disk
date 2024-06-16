import styles from './app.module.css'

export function App() {
  return (
    <section className={styles.floppy_disk}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.metal}></div>
          <div className={styles.plastic}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.line1}></div>
          <div className={styles.line_color}></div>
        </div>
        <div className={styles.square_right}></div>
        <div className={styles.square_left}></div>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}>Brenno Developer</div>
        <div className={styles.line4}></div>
        <div className={styles.line5}>do Windows 11</div>
        <div className={styles.line6}>Disco de instalação</div>
        <p className={styles.index}>Index</p>
      </div>
    </section>
  )
}
