"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BusCard from "./components/BusCard";
import TransmissionCard from "./components/TransmissionCard";
import SimulationResult from "./components/SimulationResult";

export default function Simulator() {
  const [showSimulation, setShowSimulation] = useState(false);

  return (
    <div className={styles.container}>
      <Header onSimulate={() => setShowSimulation(true)} />
      <main className={styles.main}>
        {!showSimulation ? (
          <>
            {/* Seção de Buses */}
            <section className={styles.busSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Barras</h2>
                <button className={styles.addButton}>+</button>
              </div>
              <div className={styles.areaCard}>
                <BusCard id={1} voltage={1.0} shunt={0.02} values={[]} onEdit={() => {}} />
              </div>
              {/* Adicione mais cards de barras conforme necessário */}
            </section>

            {/* Seção de Transmission Lines */}
            <section className={styles.transmissionSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Linhas de Transmissão</h2>
                <button className={styles.addButton}>+</button>
              </div>
              <div className={styles.areaCard}>
                <TransmissionCard id={1} name="Linha 1" impedance="-0.05 + j0.02" />
              </div>
              {/* Adicione mais cards de transmissão conforme necessário */}
            </section>
          </>
        ) : (
          <SimulationResult onBack={() => setShowSimulation(false)} />
        )}
      </main>
      <Footer />
    </div>
  );
}
