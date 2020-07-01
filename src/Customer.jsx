import React from 'react';
import ReactDOM from 'react-dom'

class Customer extends React.Component {
    render() {
        return [

            <label> CustomerID: {this.props.Id}</label>,
            <label> Customer Name: {this.props.name}</label>,
            <label> Customer City: {this.props.city}</label>,
            <label> Customer Number: {this.props.number}</label>,
        ]
    }
}
export default Customer;