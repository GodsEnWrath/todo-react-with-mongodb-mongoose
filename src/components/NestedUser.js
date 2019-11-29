import React from "react";
import { withRouter } from "react-router-dom";

function NestedUser(props) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: '',
          body: '',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))



const {
    match: {
        params: { id }
    }
} = props;

return (
    <div>
        <p>Ini users dengan nama:{id}</p>
    </div>
);
}

export default withRouter(NestedUser);
