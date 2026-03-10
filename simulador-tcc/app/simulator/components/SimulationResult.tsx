interface SimulationResultProps {
    onBack: () => void;
  }
  
  export default function SimulationResult({ onBack }: SimulationResultProps) {
    return (
      <div>
        <h2>Resultado da Simulação</h2>
        <p>Aqui será exibido o diagrama unifilar.</p>
        <button onClick={onBack}>Voltar</button>
        <button>Ver Matriz Y</button>
      </div>
    );
  }
  