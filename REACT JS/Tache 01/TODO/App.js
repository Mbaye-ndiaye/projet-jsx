
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
            todos: [...prev.todos, newTach ],
            newTodo: '',
        }))
    }
    // handleSubmit = () => {
    //     e.preventDefault()
    //     console.log(this.state.todos);
    // }
    deleteTask = (todoId) => {
            this.setState((prev) => ({
                    todos: prev.todos.filter(tache => tache.id !== todoId)
                }))
            };

            render () {
                console.log('render');
                console.log(this.state.todos);
        return ( 
            <div className='container w-50 my-5 bg-secondary bg-gradient rounded-3 h-100'>
                <h1 className='text-center text-white'>TodoList</h1>
                <input type='text' className='form-control mb-3 rounded-3'
                value={this.state.newTodo}
                onChange={this.handleOnchange}/> 
                  <button className='btn btn-primary w-100 mb-3 rounded-3'onClick={this.handleAddTodo}>Ajouter</button>
                <ul>
                {this.state.todos.map((todo) => (
                    <li className='text-white fs-3 bg-success px-3 mb-3 list-unstyled rounded-3' key={todo.id}>{todo.value}
                        <button className='btn btn-light w-10 m-3 text-center rounded-3'><i class="fa-solid fa-pen"></i></button>
                        <button className='btn btn-light w-10 text-center ' onClick={() => this.deleteTask(todo.id)}><i class="fa-solid fa-trash"></i></button>
                    </li>
                ))}
                
                   
                </ul>
            </div>
        )
    }
}



// class TodoList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {todos: [], 
//     list: '',}
//     }

//     handleOnChange = (e) => {
//         this.setState({list: e.target.value})
//     }

//     handleAdd = (e) => {
//         e.preventDefault();
//         const newList = {
//             id: Math.floor(Math.random() * 100),
//             value: this.state.list
//         }
//         console.log(newList);

//         this.setState((prev) => ({
//             todos: [...prev.todos, newList],
//             newList: '',
//         }));

//         deleteTask = (tachId) => {
//            this.setState(prev => ({
//             todos: prev.todos.filter((todo) => todo.id !== tachId)
//            }))
//         }
        
//     }


//      render() {
//         console.log(this.state.todos);
//         return(
//             <div>
//                 <h1>TodoList</h1>
//                 <input type='text'
//                  value={this.state.list}
//                 onChange={this.handleOnChange}
//                 />
//                 <button onClick={this.handleAdd}>Ajouter</button>
//                 <ul>
//                     {this.state.todos.map((todo) => (
//                         <li key={todo.id}>{todo.value}
//                         <button onClick={() => this.deleteTask(todo.id)}>Supprimer</button>
//                         </li>
//                     )) }
//                 </ul>
//             </div>
//         )
//      }






// }
















ReactDOM.render(<TodoList />, document.getElementById('root'))

// ()=> this.setState({
//     todos: [...this.state.todos, this.state.newTodo],
//     newTodo: '',
//   })


