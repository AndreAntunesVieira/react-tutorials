console.log(ReactDOM)
//  const app = <h1>Hello, world</h1>
const app = React.createElement('h1', { children: ' hdkasljhd' })
const container = document.getElementById('app')
ReactDOM.render(app, container)
