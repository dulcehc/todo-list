import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
  constructor (props){
    super(props);
    this.state = {
      items: this.props.lista
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.lista.length !== this.state.items.length) {
      this.setState({items:nextProps.lista})
    }
    console.log(nextProps);
  }

  render() {
    let item = this.state.items.map(
      (currentValue, index) => {
        return (
          <li className="list-group-item" key={index}>{currentValue}</li>
        )
      }
    )

    return (
      <div className = "todo-list mt-4 row justify-content-center" >
      <ul className="list-group">
        {item}
      </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  lista: PropTypes.array.isRequired
}

export default TodoList;
