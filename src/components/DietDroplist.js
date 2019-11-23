import React from 'react'
import './BasicInfo.css'

export default function DietDroplist() {

    constructor(props) {
      super(props);
      this.state = {value: 'none'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none">None</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="halal-kosher">Halal/Kosher</option>
            </select>
          </label>
        </form>
      );
    }
  }
  