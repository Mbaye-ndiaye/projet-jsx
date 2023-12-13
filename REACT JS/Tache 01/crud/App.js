
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        prenom: '',
        // nom: '',
        // email: '',
        // telephone: '',
        dataUser: []
        }
        this.handleChangePrenom = this.handleChangePrenom.bind(this)
        this.handleChangeNom = this.handleChangeNom.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeTel = this.handleChangeTelephone.bind(this)
    }
    handleChangePrenom(e)  {
        this.setState({prenom: e.target.value})
    }
    handleChangeNom(e) {
        this.setState({nom: e.target.value})

    }
    handleChangeEmail(e) {
        this.setState({email: e.target.value})
    }
    handleChangeTelephone(e) {
        this.setState({telephone: e.target.value})
    }

    addUser = (e) => {
        console.log(e);
         e.preventDefault()
        const userNAme = {
            id: Math.floor(Math.random() * 1000),
            value: this.state.prenom,
            // nom: this.state.nom,
            // email: this.state.email,
            // telephone: this.state.telephone,
            
        }
        // console.log();
        console.log(userNAme);
        this.setState(prev => ({
            dataUser:[...prev.dataUser, userNAme],
        //    value: this.state.prenom
            // nom: '',
            // email: '',
            // telephone: ''
        }
        ))

         
       
    }
    deleteUser = (userId) => {
        const newListeUser = this.state.dataUser.filter(user => user.id !== userId)
        this.setState({dataUser: newListeUser})
    }
    render(){
        console.log('render');
        console.log(this.state.dataUser);
        return(
            <div>
                <Form addUser={this.addUser} dataUser={this.state.dataUser}/>
                <Table dataUser={this.state.dataUser} deleteUser={this.deleteUser}/>
            </div>
        )
    }

    
}

// creeer un TbodyCrud

class TbodyCrud extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return(
            this.props.dataUser.map((user, index) => (
               <div className='tr ms-5' key={user}>
                <div className='td'>{user.prenom}</div>
                <div className='td'>{user.nom}</div>
                <div className='td'>{user.email}</div>
                <div className='td'>{user.telephone}</div>
                <div className='td'>{user.action}</div>
                <div className='td'>
                    <button className='btn btn-warning'>Modifier</button>
                    <button className='btn btn-danger' onClick={() => this.props.deleteUser(index)}>Supprimer</button>
                </div>
               </div> 
            ))
        )
    }
}
// creer des tables

class  Table extends React.Component{
    render() {
        return(
            <div className='table table-striped  text-center'>
                <h3 className='text-center mt-5'>Utilisateur</h3>
                <hr/>
                <div className='thead '>
                    <div className='tr d-flex justify-content-around'>
                        <div className='th fw-bold'>Prenom</div>
                        <div className='th fw-bold'>Nom</div>
                        <div className='th fw-bold'>Email</div>
                        <div className='th fw-bold'>Telephone</div>
                        <div className='th fw-bold'>Action</div>
                    </div>
                </div>
                <div className='Tbody'>
                    <TbodyCrud dataUser={this.props.dataUser} deleteUser={this.props.deleteUser}/>
                </div>
            </div>
        )
    }
}

class Form extends React.Component{
    render() {
        return(
        <div>
            <h1 className='text-center fs-5 mt-3'>JeemaCoder gestion utilisateurs</h1>
            <form onSubmit={this.props.addUser} className='container w-50 shadow'>
            <div className='row mt-3'>
                <div className='col-md-6 mb-3'>
                    <label className='form-label'>Prenom</label>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='Entrer un prenom'
                    value={this.props.prenom} onChange={this.props.handleChangePrenom}/>
                </div>

                {/* <div className='col-md-6 mb-3'>
                    <label className='form-label'>Nom</label>
                    <input 
                    type='text'
                    className='form-control'
                    placeholder='Entrer un nom'

                    value={this.props.nom} onChange={this.props.handleChangeNom}/>
                </div>

                <div className='col-md-6 mb-3'>
                    <label className='form-label'>Email</label>
                    <input 
                    type='email'
                    className='form-control'
                    placeholder='Entrer un email'

                    value={this.props.email} onChange={this.props.handleChangeEmail}/>
                </div>

                <div className='col-md-6'>
                    <label className='form-label'>Telephone</label>
                    <input 
                    type='number'
                    className='form-control'
                    placeholder='Entrer un telephone'

                    value={this.props.telephone} onChange={this.props.handleChangeTelephone}/>
                </div> */}
            </div>
            <button type='submit' className='w-100 btn btn-success mt-4 mb-3' >Ajouter</button>
            </form>
        </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'))