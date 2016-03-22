import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const inputDivStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(238, 239, 244, 1)',
};

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "NINJACT",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header style={inputDivStyle} changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
