function mensagem (nome) {
  return <h3>Seja bem vindo, {nome}</h3>
}

function Mensagem (props) {
  return <h3>Seja bem vindo, {props.nome}</h3>
}

const app = (
  <div>
    <h1>Olá, seja bem vindo</h1>
    <Mensagem nome="Andre" />
    {mensagem('Ricardo')}
    {mensagem('Gilherme')}
    {mensagem('Pedro')}
  </div>
)

const container = document.getElementById('app')
ReactDOM.render(app, container)
