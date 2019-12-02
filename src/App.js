import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import {
    Home,
    About,
    Contact,
    NestedUser,
    Users,
    Header,
    SignIn,
    SignUp,
    TodoMongoose
} from "./components";
import Todo from "./components/Todo";
// import About from "./components/About";
// import Contact from "./components/Contact";

function App() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    return (
        <Router>
            <Header />
            <Switch>
                {/* <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> */}

                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/" exact={true}>
                    {isLogin !== true ? <Redirect to="/signin" /> : <Home />}
                </Route>
                <Route path="/users" exact={true}>
                    <Users />
                </Route>
                <Route path="/users/:id">
                    <NestedUser />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/todo/mongo/:email">
                    <Todo />
                </Route>
                <Route path="/todo/mongoose">
                    <TodoMongoose />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;