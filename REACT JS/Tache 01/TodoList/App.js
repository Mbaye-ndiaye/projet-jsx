
class TodoList extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                header: '',
                
            }
        }

        handleChange = (e) => {
         this.setState({ header: e.target.value})
        }
    render() {
        return (
                
            <div className='text-center mt-3 '>
                <header>Bonjour je m'appelle {this.state.header}</header>
                <input type='text'
                 value={this.state.header}
                 onChange={this.handleChange}
                 placeholder="Ajouter un nom"/>
            </div>
        )
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))
