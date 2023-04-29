import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { Component } from "react";

class Like extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    const mainTitle = document.title;

    document.title = `Welcome to ${mainTitle}`;

    setTimeout(() => {
      document.title = mainTitle;
    }, 3000);
  }

  componentDidUpdate() {
    const mainTitle = document.title;

    document.title = `liked ${this.state.count} Times`;
    
    setTimeout(() => {
      document.title = mainTitle;
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
