

export const Main = () => {
  return (
    <main id="grid-container">
      <div className="main">
        <h2 className="">Destaques</h2><hr className="hr" />

              <h3><a href="https://ea-gamesnake.netlify.app" className="b">Jogo da cobrinha</a></h3>
              <img src="../../../public/img/cobra.jpeg" className="img1" alt="Imagem de tabuleiro do jogo" />

              <p className="p">O jogo foi criado com HTML 5, CSS 3 e JavasSript<br/>
                    busquei aplicar vários conceitos como canvas e aplicação de estilos direto do JavaScript,
                    busquei deixar mais atrativo visualmente e responsivo para mobile, podendo-se
                    jogar por toque na tela ou teclado no computador.
              </p>
              
              <h3><a href="https://eudisalves-jogodavelha.netlify.app" className="b">Jogo da Velha</a></h3>
              <img src="../../../public/img/Captura de Tela (2).png" className="img1" alt="tabuleiro do jogo da velha" />
              
              <p className="p">
                O jogo foi uma obra para estudos de eventos cliques
                onde busquei aplicar conceitos básicos de
                JavaScript com HTML5 e CSS 3.
                Uma aplicação básica e simplificada da linguagem
                JavaScript, o código completo está no meu github, link no menu!           
              </p>
                  
      
                  <h3><a href="https://eudisalves-jogo-da-memoria.netlify.app" className="b">Jogo da memória</a></h3>

              <img src="../../../public/img/memoria.jpeg" className="img1" alt="imagem do jogo da mamória"/>

              <p className="p">
                No jogo da memória apliquei mais conceitos básicos e avançados
                em JavaScript, e um trabalho ainda maior em html 5 e css 3,
                usando um trabalho ainda mair no visual e conceitos de logicas
                de programação bem interessantes! Confira o código no meu Github
                link no menu da pagina:
              </p>
      </div>
      <div className="footer">
        <div className="item4">
              <h3 className="footer">linguagens em estudos</h3>
              <img src="../../../public/img/klipartz.com.png" alt="icone do JavaScript" className="img2"/>
              <img src="../../../public/img/nodejs.png" alt="icone do node js" className="img3"/>
              <img src="../../../public/img/react.png" alt="" className="img3"/>
          </div>
      </div>
    </main>
  );
}