import styles from './app.module.css'

export function App() {
  return (
    <section className={styles.floppy_disk}>
      <p className={styles.signature}>Brenno C. Lins</p>

      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.metal}></div>
          <div className={styles.plastic}></div>
        </div>

        <div className={styles.tag}>
          <div className={styles.lines}>
            <span className={styles.line}>Disco de Instalação</span>
            <span className={styles.line}>do Windows 11</span>
            <span className={styles.line}></span>
            <span className={styles.line}>Brenno Surf</span>
            <div className={styles.line_bottom}>
              <span className={styles.line1}></span>
              <p className={styles.index_text}>Index</p>
            </div>
          </div>
          <div className={styles.line_tag_bottom}></div>
        </div>

        <div className={styles.square_right}></div>
        <div className={styles.square_left}></div>
      </div>
    </section>
  )
}
