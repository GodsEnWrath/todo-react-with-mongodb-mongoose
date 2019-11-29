import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const API_PLACEHOLDER = process.env.REACT_APP_API_PLACEHOLDER;


export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    console.log(API_PLACEHOLDER)
    fetch(API_PLACEHOLDER)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        this.setState({ data: data });
      });
  };

  render() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                textAlign:"center",
                height: "60%"
            }}
        >
            {this.state.data.length > 0 &&
                this.state.data.map((item, key) => {
                    return (
                        <Card
                            style={{ maxWidth: "300px", margin: "10px" }}
                            key={key}
                        >
                            <CardContent>
                                <Typography color="textSecondary">
                                    {item.email}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Hello my name is {item.name}
                                </Typography>
                                <br />
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                >
                                    Phone: {item.phone}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                >
                                    Website: {item.website}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">
                                    <Link to={`/users/${item}`}>
                                        Learn More
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
        </div>
    );
}
}