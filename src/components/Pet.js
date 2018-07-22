import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  isAdopted = () => {
    if (isAdopted() === true){
      document.getElementById("ui primary button").disabled = true, document.getElementById("ui disabled button").disabled = false;

    }
    document.getElementById("ui primary button").disabled = false;
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.props.pet.gender.male} or {this.props.pet.female})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age} </p>
            <p>Weight:{this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
