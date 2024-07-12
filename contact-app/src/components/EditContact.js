import React from "react";

class EditContact extends React.Component {
    //define state (initially)
    constructor(props) {
        super(props)
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        };
    }

    //handle form submission. display error msg if the field blank
    update = (e) => {
        e.preventDefault(); //prevent reload page after add
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({name:"", email:""}) //reset form state afer submit
        ////add this so that after we click add button, 
        //the page will save the data and direct us to 
        //contactlist page
        this.props.history.push("/"); 
    }

    render() {
        return (
            <div className="ui main main-content">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={(e)=> this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email: </label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={(e)=> this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className="ui button blue" ><i className="plus square icon"></i>Update</button>
                </form>
            </div>
        );
    }
}

export default EditContact;