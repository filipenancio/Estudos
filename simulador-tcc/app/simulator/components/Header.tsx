import styles from "../styles.module.css";

interface HeaderProps {
  onSimulate: () => void;
}

export default function Header({ onSimulate }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>Simulador de Sistemas de Potência</h1>
      <div>
        <button className={styles.whiteButton}>Importar</button>
        <button className={styles.whiteButton}>Exportar</button>
        <button className={styles.blueButton} onClick={onSimulate}>Simular</button>
      </div>
    </header>
  );
}
