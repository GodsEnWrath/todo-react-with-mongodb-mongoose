import React, { Component } from 'react'
import ComponentUnmount from './ComponentUnmount'
import ComponentUpdate from "./ComponentUpdate.js";

export default class ComponentMount extends Component {
    constructor(props){
        super(props)

        this.state ={
            color: 'red',
            text: "Update",
            data: {}
        }
    }

    componentDidMount =() => {
        fetch("https://api.github.com/users/godsenwrath")
        .then(response => {
            return response.json()
        })
    .then(data => {
        this.setState({ data: data})
    })
    }


    render() {
        return (
            <div>
                <ComponentUnmount></ComponentUnmount>
                <p>this color is {this.state.color}</p>
                <p style={{background: "red"}}>
                    {this.state.text !== "" && this.state.text} {" "}
                </p> 
                <img src={this.state.data.avatar_url} alt="profile_picture"></img>
                <ComponentUpdate text={this.state.text}></ComponentUpdate>
            </div>
        )
    }
}
