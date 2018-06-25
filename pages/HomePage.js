import React from 'react'
import Card from 'components/CourseCard'
import 'styles/styles.sass'

export default () => (
  <div className="content">
    <h1>Tutorial de React com server side render <i>(SSR)</i> explicado passo a passo</h1>
    <section>
      <h3>Conhecendo o React sem SSR</h3>
      <Card href="/sem-ssr/react-puro" title="React puro">
        Criar descrição
      </Card>
      <Card href="/sem-ssr/webpack" title="React + Webpack + Babel">
        Criar descrição
      </Card>
    </section>
    <section>
      <h3>Usando Next.js como base para o SSR</h3>
      <Card href="/minimo" title="React + Next.js">
        Pacote mínimo para um site com server side render, sem nenhum elemento especial ou requisição assíncrona.
      </Card>
      <Card href="/redux" title="+ Next Routes">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Redux">
        Gerencia de estados via Redux
      </Card>
      <Card href="/redux" title="+ Requisições assíncronas">
        Sugerir o `universal-fetch` ou `fetch-isomorphic`...
      </Card>
      <Card href="/redux" title="+ SASS">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Redux Thunk">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Redux Saga">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ MOBX">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Cookies">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Custom Server">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Express">
        Criar descrição
      </Card>
    </section>
    <section>
      <h3>Componentes e funcionalidades úteis (Não sofrem influência com SSR)</h3>
      <Card href="/redux" title="+ classnames">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ PropTypes">
        Criar descrição
      </Card>
      <Card href="/redux" title="+ Jest (testes unitários)">
        Criar descrição
      </Card>
    </section>
  </div>
)
