import { useState, type FormEvent } from 'react';
import './App.css';

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: 'Deploy Instantáneo',
    description: 'Conecta tu repositorio y publica cada Pull Request en entornos aislados en segundos.',
  },
  {
    title: 'CI/CD Sin Fricción',
    description: 'Ejecuta pruebas unitarias y linters automáticamente antes de permitir un merge a main.',
  },
  {
    title: 'Métricas en Tiempo Real',
    description: 'Monitorea el rendimiento de tus Core Web Vitals y tiempos de respuesta sin configurar agentes.',
  },
];

export function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div>
      <header className="navbar">
        <span className="logo">DevFlow.io</span>
        <button className="btn" onClick={() => document.getElementById('waitlist')?.focus()}>
          Acceso Anticipado
        </button>
      </header>

      <main>
        <section className="hero">
          <h1>Despliega código frontend a la velocidad de tus ideas</h1>
          <p>
            Automatiza tus pipelines, previsualiza ramas al instante y mantén tu rama principal siempre estable.
          </p>

          <form className="waitlist-box" onSubmit={handleSubmit}>
            <input
              id="waitlist"
              type="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (submitted) setSubmitted(false);
              }}
              required
            />
            <button type="submit" className="btn">
              Unirme a la lista
            </button>
          </form>

          {submitted && (
            <p className="feedback">¡Registro exitoso! Te enviaremos tu invitación pronto.</p>
          )}
        </section>

        <section className="features">
          {FEATURES.map((feat) => (
            <article key={feat.title} className="card">
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;