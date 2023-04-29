import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { Component } from "react";

class Like extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      mainTitle: document.title,
      count: 0,
      intervalId: null,
    };
  }

  componentDidMount() {
    document.title = `Welcome to ${this.state.mainTitle}`;
    setTimeout(() => {
      document.title = this.state.mainTitle;
    }, 3000);
  }

  componentDidUpdate() {
    document.title = `liked ${this.state.count} Times`;
    setTimeout(() => {
      document.title = this.state.mainTitle;
    }, 3000);
  }

  render() {
    return (
      <Button
        variant="outlined"
        endIcon={<FavoriteBorderOutlined />}
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        Like {this.state.count > 0 && this.state.count}
      </Button>
    );
  }
}

export default Like;
