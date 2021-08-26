import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/sobre.css";
export default function Sobre() {
  return (
    <>
      <main className="page-about">
        <Header />
        <section>
          <div className="title">Sobre o Mapa do Fogo</div>
          <h1>O que é?</h1>

          <p>
            O projeto mapa do fogo é uma iniciativa da comunidade DevOpsPBS
            frente ao desafio de coletar dados sobre queimadas e incêndios
            urbanos na cidade de Parauapebas. Tendo em vista essas dificuldades
            enfrentadas pela forma que tradicionalmente se faz a coleta desses
            dados, idealizamos e construímos uma aplicação web para que a
            própria população possa informar a ocorrência desses eventos.
          </p>

          <h1>Como posso ajudar?</h1>

          <p>
            Você pode nos ajudar informando a localização no mapa das
            ocorrências de queimadas e incêndios que tiver conhecimento, não se
            preocupe se outras pessoas informarem também, estamos ciente que
            isto vai acontecer e até esperamos por isso, assim, sempre que
            souber da ocorrência de algum evento do tipo, corre aqui e nos
            informe!!
          </p>

          <h1>O que vem depois?</h1>

          <p>
            Com os dados fornecidos pela população, poderemos desenvolver
            análises de dados usando ferramentas computacionais que vão nós
            ajudar a construir um mapa das ocorrências de queimadas, e assim,
            saber por exemplo, quais os locais da cidade onde elas ocorrem e em
            qual período do ano, desse modo, o poder publico e a população vai
            poder desenvolver ações visando mitigar a ocorrências desses eventos
            de forma mais eficientes, desta forma, podemos construir um futuro
            sem queimadas.
          </p>

          <h1>Vamos juntos construir um futuro melhor para nossa cidade!!!</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
