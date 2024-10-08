import design_system_concept from "../assets/img/design_system_concept.png";

// CSS
import "../css/min/designSystem.min.css";

// Components
import Container from "../components/container.jsx";

function DesignSystem() {
  return (
    <main className="main design-system">
      <Container className={"main__container"}>
        <h1>Design System</h1>
        <img
          className="design-system__img"
          src={design_system_concept}
          alt=""
        />
        <div className="design-system__info">
          <h2 className="design-system__info-subtitle">
            Chat GPT sobre a imagem:
          </h2>
          <span className="design-system__info-prompt">
            Explica-me esta imagem, o que são as quatro coisas?
          </span>
          <p className="design-system__info-description">
            Esta imagem ilustra os componentes principais de um Design System e
            a relação entre as várias equipas que contribuem para sua criação e
            manutenção. Vamos destrinchar os principais elementos:
          </p>
          <ol className="design-system__info-list">
            <li>
              <strong className="orange">Design Tokens:</strong>
              <ul>
                <li>
                  São valores atômicos (como cores, espaçamentos, tipografia)
                  que são reutilizados consistentemente ao longo do design
                  system. Eles garantem que o sistema tenha uma base coesa para
                  criar diferentes interfaces visuais.
                </li>
                <li>
                  <strong>Como usar:</strong> Definir tokens como variáveis para
                  cores, fontes, espaçamento, tamanhos e outros elementos, para
                  serem utilizados em todo o sistema de design.
                </li>
              </ul>
            </li>
            <li>
              <strong className="purple">Design Kit:</strong>
              <ul>
                <li>
                  Um conjunto de ferramentas e arquivos (muitas vezes em
                  ferramentas como Figma ou Sketch) que ajudam os designers a
                  criar interfaces consistentes com o sistema. O kit contém
                  elementos visuais, estilos e padrões de interface.
                </li>
                <li>
                  <strong>Como usar:</strong> Criar componentes de interface e
                  layouts reutilizáveis que podem ser facilmente implementados
                  no processo de design. Ter arquivos prontos que permitam o
                  design rápido de novos produtos ou funcionalidades.
                </li>
              </ul>
            </li>
            <li>
              <strong className="cyan">Component Library:</strong>
              <ul>
                <li>
                  Uma biblioteca de componentes reutilizáveis de código
                  (geralmente em frameworks como React, Angular, etc.) que
                  correspondem aos componentes visuais do design kit.
                </li>
                <li>
                  <strong>Como usar:</strong> Desenvolver componentes UI, como
                  botões, menus, modais, etc., que podem ser integrados
                  diretamente no código de um site ou aplicativo.
                </li>
              </ul>
            </li>
            <li>
              <strong className="pink">Content Design:</strong>
              <ul>
                <li>
                  Refere-se à maneira como os textos e conteúdos são escritos e
                  organizados. UX Writers trabalham para garantir que a
                  linguagem utilizada no sistema seja clara, acessível e
                  consistente.
                </li>
                <li>
                  <strong>Como usar:</strong> Definir diretrizes de escrita e
                  tom de voz para todos os conteúdos, alinhando o conteúdo ao
                  design e à experiência do utilizador.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </Container>
    </main>
  );
}

export default DesignSystem;
