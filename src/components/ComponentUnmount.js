import React, { Component } from 'react'

export default class ComponentUnmount extends Component {
    componentWillMount =() =>{
        alert("the component unmount")
    }

    render() {
        return (
            <div>
                    Hello           
            </div>
        )
    }
}
