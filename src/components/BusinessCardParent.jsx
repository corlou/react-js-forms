import React from "react"
import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends React.Component {
  constructor(props) {
    super(props);

    // declaring the data in the constructor
    this.state = {
      name: '',
      email: '',
      editMode: false
    }
  }

  // specific update
  updateName = (newName) => {
    this.setState({
      name: newName
    })
  }

  updateEmail = (newEmail) => {
    this.setState({
      email: newEmail
    })
  }
  
/*
  @param{string} stateKey = some key from the component state
  @param{string} newValue = a new value relevant to that key
  e.g  updateState("email", "test@email.com") or
        updateState("name", "Corina")

*/

// this function is generic to make the updates
  updateState = (stateKey, newValue) => {
    this.setState({
      [stateKey]: newValue
    })
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.setState.editMode
    });
  }

  render(){
    if (this.state.editMode) {
      // show the form
      
      return(
        <div>
          <BusinessCardForm
            name={this.state.name}
            email={this.state.email}
            updateState={this.updateState}
          />
          <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
        </div>
      );
    } else {
      // show the read-only data
      <div>
        return(<BusinessCardDisplay name={this.state.name} email={this.state.email}/>);
        <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>

      </div>
    }
  }
}