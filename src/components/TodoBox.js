import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

class TodoBox extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      todoText: ''
    };
  }

  onSubmit(e){
    if (this.state.todoText == "") {
      alert('el campo esta vacío')
    }else{
      e.preventDefault();
      this.props.enviar();
      this.setState({todoText:''});
    }
  }

  getTodoBox(){
    return this.state.todoText;
  }

  render() {
    return (
      <div className="todo-box row justify-content-center">
        <form onSubmit={this.onSubmit} className="form-inline">
          <div className="form-group">
            <label htmlFor="">TO DO:</label>
            <input type="text" placeholder="Nuevo Todo"
              className="ml-2 form-control"
              value={this.state.todoText}
              onChange={(e)=>{this.setState({todoText:e.target.value})}}
            />
          </div>
          <button type="submit" className="btn btn-info">Agregar</button>
        </form>
      </div>
    );
  }
}


TodoBox.propTypes = {
  enviar: PropTypes.func.isRequired
}

export default TodoBox;
