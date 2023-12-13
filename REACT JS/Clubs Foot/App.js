// class ClubFoot extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render() {
//         return(
//             <div></div>
//         )
//     }
// }

class Club extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            coran: [],
            isLoader: false
        };
    }
    componentDitMount(){
        fetch('http://jsonplaceholde.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoader: true,
                coran: json,
            })
            
        });
    }





    render() {
        var {isLoader, coran} = this.state
        if(!isLoader) {
            return<div>isLoader...</div>
        }
        return(
            <div>
               <ul>
                {coran.map(item => (
                    <li key={item.id}> | number: {item.name} Email:{item.email}</li>
                ))}
               </ul>
            </div>
        )
    }
}



















ReactDOM.render(<Coran />, document.getElementById('root'))

































// Modifier Tache

// modifierTache = () => {
//     this.setState({
//         tache: this.StaticRange.listTache[index],
//         tacheModifier: index
//     })
// }

// Supprimer Tache

// supprimer = () => {
//     const array = this.state.listTache;
//     array.splice(index, 1);
//     this.setState({
//         listTache: array
//     });
// }