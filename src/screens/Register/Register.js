import React from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

      /* uso los corchetes porque evalua el valor como una clave (clave dinamica--> la que pone el usuario*/
    controlarCambios(event){
        this.setState({
             [event.target.name] : event.target.value
        }
        );
    }


    evitarSumbit(event){
        event.preventDefault();

        /*primero debo traer lo que este guardado en el local storage a traves del metodo get,
        luego hago las validaciones necesarias y una vez que este todo correcto, recien ahi se crea
        la cuenta del usuario y se guarda en el localStorage la nueva cuenta creada */
       let storage = locarlStorage.getItem ('storage');

       /*si existen usuarios guardados transformo el string en un array usable. 
       si es que no hay datos (else) creo un array para guardar los nuevos datos */
       if (storage!= null){
        storage = JSON.parse(storage);}
       else{
        storage = []
       }

       /* VALIDACIONES */
       let mailExistente = false
       /*me falta como comprobar no se si hacer un for o que */

       
       
    }



    render(){
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input type="email" name="email" placeholder="Email" onChange={(event) => this.controlarCambios(event)} value={this.state.email} />
                <input type="password" name="password" placeholder="Password" onChange={(event) => this.controlarCambios(event)} value={this.state.password} />
                <button type="submit">Register</button>

                {this.state.error != "" ? <p>{this.state.error}</p> : null}

            </form>
        )
    }

}

export default Register