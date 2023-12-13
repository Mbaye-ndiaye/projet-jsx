
function Welcome(props) {
   
    return<h1>Bonjour {props.name} {props.value} </h1>
}
ReactDOM.render(<Welcome name='Mbaye' value='Ndiaye'/>, 
document.getElementById('root'))