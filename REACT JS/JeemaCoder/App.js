class Input extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
         const {type, value, name, onChange, children} = this.props
        return <div className='mx-auto w-100 '>
                <label htmlFor=
                {name}>{children}
                </label>
                <input type={type} 
                value={value} onChange={onChange} id={name} name={name} className='form-control'/>  
            </div>  
    }
}
// class Button extends React.Component{
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const {text, color, onClick, taille} = this.props
//         return(
//             <div>
//                 <button text={text} color={color} onClick={onClick} taille={taille}></button>
//             </div>
//         )
//     }
// }
// pour  creer des tableaux
class TableCrud extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div>
                    <h2 className='text-center fs-4 mt-5'>Utilisateurs</h2>
                    <hr/>
        </div>
            <table className='table   table-striped  text-center container w-100'>
                <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Action</th>
                    </tr>
                </thead>
              <Tbdoy dataUser={this.props.dataUser} deletUser={this.props.deletUser} updateUser={this.props.updateUser} />
            </table>
            </div>
            
        )
    }
}
class Tbdoy extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(    
                <tbody>
                    {this.props.dataUser.map((item) => (
                <tr key={item.id} >
                    <td>{item.prenom}</td>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.telephone}</td>
                        <td className="mx-auto text-center m-0 py-auto d-flex justify-content-around">
                            <button className='text-light p-1 rounded-2'style={{backgroundColor: 'orange'}} onClick={() => this.props.updateUser(item.id)}>Modifier</button>
                            <button className="me-1  text-light p-1 rounded-2" style={{backgroundColor: 'red'}} onClick={() => this.props.deletUser(item.id)}>Supprimer</button>
                        </td>    
                </tr>
                    ))}
                </tbody>
        )
    }
}

class FormCrud extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            prenom: '',
            nom: '',
            telephone: '',
            email: '',
            idModifier: null,
            modifier: false,
            dataUser: []
        }
       this.handleChange= this.handleChange.bind(this)
       this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleChange(e) {
        // console.log(tache);
        const name = e.target.name
        this.setState({
             [name]: e.target.value,
        })
        
    }
      handleAddTodo(e) {
        e.preventDefault();
        const {prenom, nom, email, telephone, modifier, idModifier} = this.state
        if(modifier === true){
            this.setState((prev) => {
                const user = prev.dataUser.find(user => user.id === idModifier)
                const updateUtilisateur = {
                    ...user,
                    prenom: prenom,
                    nom: nom,
                    email: email,
                    telephone: telephone,
                }
                const updatedUsers = prev.dataUser.map(user => user.id === idModifier ? updateUtilisateur : user)
                return {
                    dataUser: updatedUsers,
                    prenom: '',
                    nom: '',
                    email: '',
                    telephone: '',
                    idModifier: null,
                    modifier: false
                }
            })
        } else {
            const newUser = {
                id: Math.floor(Math.random() * 10000),
                prenom: prenom,
                nom: nom,
                email: email,
                telephone: telephone,
            }
            this.setState((prev) => ({
                dataUser: [...prev.dataUser, newUser],
                prenom: '',
                nom: '',
                telephone: '',
                email: '',
            }))
        }
      } 

    //  handleAddTodo(e) {
    //      e.preventDefault();
    //      const {prenom, nom, email, telephone, modifier, idModifier} = this.state
    //      if(modifier === true){
    //         const user = this.state.dataUser.map(index => index.id === idModifier)
    //         this.setState({
    //             dataUser: user,
    //             prenom: prenom,
    //             nom: nom,
    //             email: email,
    //             telephone: telephone,
    //             //  idModifier: null,
    //             // modifier: false
    //         })
    //      } else {
    //         const newUtilister = {
    //             id: Math.floor(Math.random() * 10000),
    //            // value: e.target.name                         
    //             prenom: prenom,
    //             nom: nom,
    //             email: email,
    //             telephone:telephone,
                
    //         }
    //         // console.log(newUtilister);
    //         this.setState((prev) => ({
    //            dataUser: [...prev.dataUser, newUtilister],
    //            prenom: '',
    //            nom: '',
    //            telephone: '',
    //            email: '',
    //        }))
    //      }
    //      // donner le nombre aleatoire a mes valeurs 
    //  }


     // fonction pour supprimer une (Id)
     deletUser = (userId) => {
        const listeUser = this.state.dataUser.filter(user => user.id !== userId)
        this.setState({dataUser: listeUser,
            prenom: '',
            nom: '',
            telephone: '',
            email: '',
            })
                  

    }
     


     updateUser = (id) => {
        //  const {prenom, nom, email, telephone, modifier} = this.state
         // if (modifier !== '' ) {
             const updateUtilisateur = this.state.dataUser.find(todo => todo.id === id)
        this.setState({
            modifier: true,
            prenom: updateUtilisateur.prenom,
            nom: updateUtilisateur.nom,
            email: updateUtilisateur.email,
            telephone: updateUtilisateur.telephone, 
            idModifier: id
        })
     }
     
    handleSubmit = (e) => {
        e.preventDefault();
    //     if (this.state.prenom !== "" ||
    //     this.state.nom !== "" ||
    //     this.state.email !== "" ||
    //     this.state.telephone !== "") 
    //     {
        
    // } else{
    //     alert('Veuillez remplir ce champ avant d\'ajouter un utilisateur')
    
    // }

    
     
      
    }


    render() {
        console.log('render');
        console.log(this.state.dataUser);
        return(
            <React.Fragment>
                <h1 className='text-center mt-3 fs-4'>JeemarCoder</h1>
            <form className='container mx-auto row w-50 col-12 shadow' onSubmit={this.handleSubmit}>
                <div className='form-group col-md-6'>
                <Input type='text' value={this.state.prenom} onChange={this.handleChange} name='prenom'>Prenom</Input>
                </div>
                <div className='form-group col-md-6 mb-3'>
                <Input type='text' value={this.state.nom} onChange={this.handleChange} name='nom'>Nom</Input>
                </div>
                <div className='form-group col-md-6'>
                <Input type='mail' value={this.state.email} onChange={this.handleChange} name='email'>Email</Input>
                </div>
                <div className='form-group col-md-6'>
                <Input type='number' value={this.state.telephone} onChange={this.handleChange} name='telephone'>Telephone</Input>
                </div>
                <div className='mt-3 mb-3'>
                <button className='btn btn-success  w-100'
                style={{backgroundColor: this.state.modifier ? 'orange' : 'vert' } }
                 onClick={this.handleAddTodo}>
                    {this.state.modifier ? 'Modifier' : 'Ajouter'}
                    </button>
                </div>
 
                {/* {JSON.stringify(this.state)} */}
              
            </form>
                <TableCrud dataUser={this.state.dataUser} deletUser={this.deletUser} updateUser={this.updateUser}/>
            </React.Fragment>
              
        )
    }
}

ReactDOM.render(<FormCrud />, document.getElementById('root'))