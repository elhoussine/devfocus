import React from 'react';

export default class Checkbox extends React.Component{
  constructor(props){
    super(props)
    this.state = { done: false } 
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount

  handleClick() {
    this.state.done
      ? this.setState({ done: false })
      : this.setState({ done: true });
  }

  render(){

    const checkboxDisplay = this.state.done ? (
      <div className="fa fa-check-square algos-checkbox"></div>
    ) : (
      <div className="fa fa-square-o algos-checkbox"></div>
    )

    return(
      <div onClick={this.handleClick}>
        {checkboxDisplay}
      </div>
    )
  }
}