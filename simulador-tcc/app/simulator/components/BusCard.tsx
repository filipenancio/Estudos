import styles from "../styles.module.css";

interface BusCardProps {
  id: number;
  voltage: number;
  shunt: number;
  values: {
    label: string;
    value: number | string;
    isImaginary?: boolean;
  }[];
  onEdit: () => void;
}


export default function BusCard({ id, voltage, shunt, values, onEdit }: BusCardProps) {
  return (
    <div className={styles.busCard}>
      {/* Título do Card (Nome da Barra) */}
      <h3 className={styles.busTitle}>Barra {id}</h3>

      {/* Lista de valores */}
      <ul className={styles.valueList}>
        <li>
          <span className={styles.label}>Voltagem:</span>
          <span className={styles.value}>{voltage} p.u.</span>
        </li>
        <li>
          <span className={styles.label}>Shunt:</span>
          <span className={styles.value}>{shunt} p.u.</span>
        </li>
        {values.map((item, index) => (
          <li key={index} className={styles.valueItem}>
            <span className={styles.label}>{item.label}:</span>
            <span
              className={`${styles.value} ${
                Number(item.value) < 0 ? styles.negative : ""
              } ${item.isImaginary ? styles.imaginary : ""}`}
            >
              {item.value} p.u.
            </span>
          </li>
        ))}
      </ul>

      {/* Botão de edição (ícone de lápis) */}
      <button className={styles.editButton} onClick={onEdit}>
        ✎
      </button>
    </div>
  );
}
