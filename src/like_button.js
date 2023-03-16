const e = React.createElement
const { Button } = semanticUIReact

const domContainer = document.querySelector('#like_button_container')

ReactDOM.render(e(Button, { primary: true}, 'Hello world!'), domContainer)