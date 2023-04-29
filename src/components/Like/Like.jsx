import { FavoriteBorderOutlined, StarOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { Component, Fragment } from "react";

class Like extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      mainTitle: document.title,
      like: 0,
      follow: 0,
    };
  }

  componentDidMount() {
    document.title = `Welcome to ${this.state.mainTitle}`;
    setTimeout(() => {
      document.title = this.state.mainTitle;
    }, 3000);
  }

  componentDidUpdate(preveProps, preveStates) {
    if (preveStates.like !== this.state.like) {
      document.title = `liked ${this.state.like} Times`;
    } else if (preveStates.follow !== this.state.follow) {
      document.title = `followed ${this.state.follow} Times`;
    }

    setTimeout(() => {
      document.title = this.state.mainTitle;
    }, 3000);
  }

  render() {
    return (
      <Fragment>
        <div className="inline-block m-2">
          <Button
            variant="outlined"
            endIcon={<FavoriteBorderOutlined />}
            onClick={() => this.setState({ like: this.state.like + 1 })}
          >
            Like {this.state.like > 0 && this.state.like}
          </Button>
        </div>

        <div className="inline-block m-2">
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<StarOutline />}
            onClick={() => this.setState({ follow: this.state.follow + 1 })}
          >
            Follow {this.state.follow > 0 && this.state.follow}
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default Like;
