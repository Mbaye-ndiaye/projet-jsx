class FormTodo extends React.Component{
    render () {
        return<div >
       <input className='form-control mb-3 mt-3' type='text' value={this.props.value} onChange={this.props.onChange}/>

       </div>
    }
}
class ButtonAjouter extends React.Component {
    render() {
        return (
        <div>
        <button className='btn btn-primary w-100 mb-3 rounded-3' onClick={
            this.props.onClick} >Ajouter</button>
        </div>)
    }
}

class Form extends React.Component{
    render() {
     return(<div className='container w-100  my-5 
     bg-secondary bg-gradient rounded-3 h-100'>
         <form className=''>
         <FormTodo className='mb-3' value={this.props.value} 
         onChange={this.props.onChange}/>
         <ButtonAjouter onClick={this.props.onClick}/>
         </form>
     </div>
     )
 
 }
}

class TodoUL extends React.Component{ 
    render() {
        return(
            <div>
                <ul>
            <li className='text-dark d-flex justify-content-between p-3  bg-secondary 
                    list-unstyled rounded-3 text-white w-100 mx-auto mb-3'>
              {this.props.todo}
            <button onClick={this.props.onClick}><i class="fa-solid fa-trash"></i></button>
            </li>
            </ul>
            </div>
         
         )  
        }
    }

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todos: [], newTodo: ''};

    };
    handleOnchange = (e) => {
        this.setState({ newTodo: e.target.value})
        console.log(e);
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        const newTach = {
          id:  Math.floor(Math.random() * 100),
          value: this.state.newTodo,
        }    
        console.log(newTach);
        this.setState((prev) => ({
            todos: [...prev.todos, newTach],
            newTodo: '',
        }))
    }
    deleteTask = (todoId) => {
            this.setState((prev) => ({
                    todos: prev.todos.filter(tache => tache.id !== todoId)
                }))
            };

            render () {
        return ( 
            <div className='container w-50 my-5  bg-gradient rounded-3 h-100'>
                    <h1 className='text-center text-white'>TodoList</h1>
                <Form value={this.state.newTodo} onChange={this.handleOnchange} onClick={this.handleAddTodo}/>                                                                                                                                                              
                <div>
                <ul>
                {this.state.todos.map((todo) => (
                    console.log(todo.value),
                    <TodoUL  key={todo.id} className='d-flex justify-content-between p-3  bg-danger 
                    list-unstyled rounded-3 text-white w-100  mb-3 ' todo={todo.value}>
                    <div className='flex'>
                        <button><i class="fa-solid fa-pen"></i></button>
                        <button onClick={() => this.deleteTask(todo.id)} ><i class="fa-solid fa-trash"></i></button>
                        </div>
                        </TodoUL>
                ))}   
                </ul>   
                </div>
            </div>
        )
   }
}



// class Form extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <div>
//                 <h1>liste</h1>
//                 <form>
//                     <input type='text' value={this.props.tache} placeholder='Entrer une tache' onChange={this.props.handleChange}/>
//                     <button type='submit'>Ajouter</button>
//                 </form>
//             </div>
//         )
//     }
// }


// class AppTodo extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {tache: '', listache:[], number:0}
//     }
//     handleChange = (e) => {
//         this.setState({tache: e.target.value})
//     }
//     AjouteTache() {
//         const newTach ={
//             id: Math.floor(Math.random() * 1000),
//             value: this.state.tache
//         }
//         console.log(newTach);
//         this.setState((prev) => ({
//                          todos: [...prev.tache, newTach],
//                         tache: '',
//                     }))

//     }
//     incremente() {
//          this.setState({number: this.state.number + 1})
//         this.setState(valeurPrecendent => {
//             return{number: valeurPrecendent.number + 1}
//         })
//     }
//     render() {
//         return(
//             <div>
//             {/* <button onClick={this.incremente.bind(this)}>incrementer</button> */}
//             <Form tache={this.state.tache} handleChange={this.handleChange}/>
//             </div>
//         )
//     }
// }



ReactDOM.render(<TodoList />, document.getElementById('root'))

// ()=> this.setState({
//     todos: [...this.state.todos, this.state.newTodo],
//     newTodo: '',
//   })



// toggleEditing = (TacheId) => {
//     this.setState(prev => ({
//         listeTache: prev.listeTache.map(tache =>
//             tache.id === TacheId ? { ...tache, isEditing: !tache.isEditing } : tache
//         )
//     }));
// }

