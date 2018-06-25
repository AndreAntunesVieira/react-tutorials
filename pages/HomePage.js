import React from 'react'
import Card from 'components/CourseCard'
import 'styles/styles.sass'

export default () => (
  <div className="content">
    <h1>Tutorial de React com server side render <i>(SSR)</i> explicado passo a passo</h1>
    <section>
      <h3>Conhecendo o React sem SSR</h3>
      <Card href="/sem-ssr/react-puro" title="React puro">
        <p>Criar descrição</p>
      </Card>
      <Card href="/sem-ssr/webpack" title="React + Webpack + Babel">
        <p>Criar descrição</p>
      </Card>
    </section>
    <section>
      <h3>Usando Next.js como base para o SSR</h3>
      <Card href="/minimo" title="React + Next.js">
        <p>Pacote mínimo para um site com server side render, sem nenhum elemento especial ou requisição assíncrona.</p>
      </Card>
      <Card href="/redux" title="+ Next Routes">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Redux">
        <p>Gerencia de estados via Redux</p>
      </Card>
      <Card href="/redux" title="+ Requisições assíncronas">
        <p>Sugerir o `universal-fetch` ou `fetch-isomorphic`...</p>
      </Card>
      <Card href="/redux" title="+ SASS">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Redux Thunk">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Redux Saga">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ MOBX">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Cookies">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Custom Server">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Express">
        <p>Criar descrição</p>
      </Card>
    </section>
    <section>
      <h3>Componentes e funcionalidades úteis (Não sofrem influência com SSR)</h3>
      <Card href="/redux" title="+ classnames">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ PropTypes">
        <p>Criar descrição</p>
      </Card>
      <Card href="/redux" title="+ Jest (testes unitários)">
        <p>Criar descrição</p>
      </Card>
    </section>
  </div>
)
