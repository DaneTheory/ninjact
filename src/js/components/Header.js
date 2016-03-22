import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "NINJACT",
    };
  }


  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input placeholder='Type To Change Title' onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
