import React, { Component } from "react";

import classes from "./Card.module.css";

//class based component
class Card extends Component {
  render() {
    return <div className={classes.card}>{this.props.children}</div>;
  }
}

/* const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
}; */

export default Card;
