import styles from "../styles.module.css";

interface TransmissionCardProps {
  id: number;
  name: string;
  impedance: string;
}

export default function TransmissionCard({ id, name, impedance }: TransmissionCardProps) {
  return (
    <div className={styles.transmissionCard}>
      <h3>{name}</h3>
      <p>Impedância: <span className={impedance.includes("-") ? styles.negative : ""}>{impedance}</span> p.u.</p>
      <button className={styles.editButton}>✎</button>
    </div>
  );
}
