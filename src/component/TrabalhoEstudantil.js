import React from "react";
import "../styles.css"; // Importando o CSS puro
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function TrabalhoEstudantil() {

  const generatePDF = () => {
    const input = document.querySelector(".document-container");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Largura do PDF (A4)
      const pageHeight = 297; // Altura do PDF (A4)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft > 0) {
        position = -pageHeight + 2; // Adiciona margem no topo da nova página
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save("trabalho_devops.pdf");
    });
  };


  return (
    <div>
      <div className="button-container">
        <button className="pdf-button" onClick={generatePDF}>Baixar PDF</button>
      </div>
      <div className="document-container">
        <header className="document-header">Trabalho DevOps</header>
        
        <main className="document-content">
          <h2 className="document-title">Sumário</h2>
          <ul className="document-summary">
            <li><a href="#planejamento">Planejamento</a></li>
            <li><a href="#desenvolvimento">Desenvolvimento</a></li>
            <li><a href="#testes">Testes</a></li>
          </ul>

          <h2 className="document-title">Introdução</h2>
          <p className="document-text">
            Este trabalho apresenta um estudo detalhado sobre a aplicação Acme-Banck, abordando três principais etapas: Planejamento, Desenvolvimento e Testes.
          </p>
          
          <section id="planejamento" className="document-section">
            <h3 className="section-title">Planejamento</h3>
            <p className="document-text">
              Todo projeto foi planejado para ser um ponto focal de criação, manutenção, exclusão e todo fluxo de todas as transações bancarias: Saque, Deposito e Transferência entre contas.  
              A estratégia foi reunir toda logica bancaria em um único projeto, para que a equipe entenda o fluxo completo e que um ajude no fluxo do próximo modulo, modulo esse que irei explicar melhor no tópico adiante. 
              A metodologia usada foi o scrum que é um framework ágil de gerenciamento de projetos que ajuda as equipes a trabalharem de forma colaborativa e a se auto-organizar. O Scrum é baseado em ciclos curtos, chamados sprints, que permitem a entrega de valor ao cliente de forma rápida e contínua.
              Como a equipe vive ciclos entre projetos, o quadro scrum foi a melhor sacada para que a equipe tenha a autonomia de fluir em features que mais se identificam no projeto. 
              Cada sprint, quando concluído a feature, fazemos revezamentos entrem módulos para que sempre soubéssemos o fluxo completo das transações. <br/>
              Linha do Tempo: <br/>
                    ●	Semana 1-4: Refinamento do projeto e definição do escopo. (20 dias úteis) <br/>
                    ●	Semana 5-7: Planejamento da arquitetura e estratégias de desenvolvimento. (15 dias úteis) <br/>
                    ●	Semana 8-11: Desenvolvimento inicial (autenticação e estrutura básica). (20 dias úteis) <br/>
                    ●	Semana 12-19: Implementação das funcionalidades principais. (40 dias úteis) <br/>
                    ●	Semana 20-23: Integração e design responsivo. (20 dias úteis) <br/>
                    ●	Semana 24-27: Testes funcionais e validação com stakeholders. (20 dias úteis) <br/>
                    ●	Semana 28-31: Treinamento das equipes e implantação do sistema. (20 dias úteis) <br/>
                    ●	Semana 32 em diante: Suporte contínuo e melhorias. (Contínuo) <br/>

            </p>
          </section>
          
          <section id="desenvolvimento" className="document-section">
            <h3 className="section-title">Desenvolvimento</h3>
            <p className="document-text">
              No desenvolvimento do projeto tomamos a decisão de transformar todos os microsserviços em módulos para que seja compartilhado configurações semelhantes entre projetos, para o desenvolvimento seja entendido e estendido entre os módulos e que se uma feature desenvolvida impactasse outro modulo fosse de rápida solução.
              O projeto todo foi desenvolvido em Java 17 com Spring Boot 3.2 para que as dependências fossem fáceis de gerenciar e de compartilhar dados entre módulos, já que a integração/configuração do Spring para com os módulos é nativa do framework. 
              Usamos também serviços de mensageria, stream e armazenamento em cache, RabbitMq, Kafka e Redis respectivamente para uma comunicação mais rápida possível seja interno como externo.
              Para o desenvolvimento deste projeto, será utilizada a metodologia ágil, com sprints curtos e entregas incrementais. Esse modelo permite maior flexibilidade para ajustes durante o desenvolvimento, além de promover feedback contínuo com as partes interessadas.<br/>
               O processo incluirá: <br/>
                    ●	Reuniões de planejamento e revisão a cada sprint. <br/>
                    ●	Testes contínuos para garantir qualidade e confiabilidade. <br/>
                    ●	Colaboração estreita entre as equipes de desenvolvimento, design e negócio. <br/>

            </p>
          </section>
          
          <section id="testes" className="document-section">
            <h3 className="section-title">Testes</h3>
            <p className="document-text">
              Para os testes, usamos os métodos de testes unitários que os desenvolvedores ao implementar uma feature nova é indispensável a criação de uma classe de teste para que tudo que foi implementado seja testado e o coverage seja no mínimo 80% do implemento. 
              Além dos testes unitários que foi implementado pelo devs, uma equipe de QA é acionada para seguir com uma rigorosa bateria de testes no todo, para verificar se houve impacto em outros serviços já testados e se a feature nova esta dentro do que foi pedido.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
