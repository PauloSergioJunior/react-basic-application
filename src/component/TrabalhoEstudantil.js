import React from "react";
import "../styles.css"; // Importando o CSS puro

export default function TrabalhoEstudantil() {
  return (
    <div className="document-container">
      <header className="document-header">Trabalho Estudantil</header>
      
      <main className="document-content">
        <h2 className="document-title">Sumário</h2>
        <ul className="document-summary">
          <li><a href="#planejamento">Planejamento</a></li>
          <li><a href="#desenvolvimento">Desenvolvimento</a></li>
          <li><a href="#testes">Testes</a></li>
        </ul>

        <h2 className="document-title">Introdução</h2>
        <p className="document-text">
          Este trabalho apresenta um estudo detalhado sobre um determinado tema, abordando três principais etapas: Planejamento, Desenvolvimento e Testes.
        </p>
        
        <section id="planejamento" className="document-section">
          <h3 className="section-title">Planejamento</h3>
          <p className="document-text">
            Nesta fase, serão definidas as estratégias e metodologias para o desenvolvimento do projeto.
          </p>
        </section>
        
        <section id="desenvolvimento" className="document-section">
          <h3 className="section-title">Desenvolvimento</h3>
          <p className="document-text">
            Implementação das ideias e desenvolvimento prático do projeto com base no planejamento.
          </p>
        </section>
        
        <section id="testes" className="document-section">
          <h3 className="section-title">Testes</h3>
          <p className="document-text">
            Verificação da qualidade e funcionamento do projeto, identificando possíveis melhorias.
          </p>
        </section>
      </main>
    </div>
  );
}