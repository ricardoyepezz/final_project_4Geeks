import React, { useContext, useEffect, UseState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";


const data = [
    { id: 1, Nombre: "", Apellido: "", Correo: "", Ciudad:"", País:"", Website:"", Twitter:"" },
  
  ];
  
  class Editar extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        Nombre: "",
        Apellido: "",
        Correo: "",
        Ciudad: "",
        País: "",
        Website:"",
        Twitter:"",
      },
    };
  
    mostrarModalActualizar = (dato) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };
  
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };
  
  
    editar = (dato) => {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo[contador].Nombre = dato.nomre;
          arreglo[contador].Apellido = dato.Apellido;
          arreglo[contador].Correo = dato.Correo;
          arreglo[contador].Ciudad = dato.Ciudad;
          arreglo[contador].País = dato.país;
          arreglo[contador].Website = dato.website;
          arreglo[contador].Twitter = dato.twitter;
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    };
  
 
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.id=this.state.data.length+1;
      var lista= this.state.data;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data: lista });
    }
  
    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      });
    };
  
    render() {
      
      return (
        <>

        <div className="Container-fluid editardatos">
          <div isOpen={this.state.modalActualizar}>
            <header>
             <div><h3>Editar Registro</h3></div>
            </header>
  
            <div>
              <form>
                <label>
                 Id:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </form>
              
              <form>
                <label>
                  Nombre 
                </label>
                <input
                  className="form-control"
                  name="Nombre"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Nombre}
                />
              </form>
  
              <form>
                <label>
                  Apellido 
                </label>
                <input
                  className="form-control"
                  name="Apellido"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Apellido}
                />
              </form>
              
              <form>
                <label>
                  Correo: 
                </label>
                <input
                  className="form-control"
                  name="Correo"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.correo}
                />
              </form>
  
              <form>
                <label>
                  Ciudad 
                </label>
                <input
                  className="form-control"
                  name="Ciudad"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Ciudad}
                />
              </form>
  
              <form>
                <label>
                  País 
                </label>
                <input
                  className="form-control"
                  name="País"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.País}
                />
              </form>
  
              <form>
                <label>
                  Website 
                </label>
                <input
                  className="form-control"
                  name="Website"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Website}
                />
              </form>
  
              <form>
                <label>
                  Twitter 
                </label>
                <input
                  className="form-control"
                  name="Twitter"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Twitter}
                />
              </form>
            </div>
  
            <div>
              <button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </button>
              <button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </button>
            </div>
          </div>
          </div>
        </>
      );
    }
  }
  export {Editar};
  