import React from 'react';


class Customer extends React.Component {
    render() {
        return [

            <label> CustomerID: {this.props.Id}</label>,
            <label> Customer Name: {this.props.name}</label>,
            <label> Customer City: {this.props.city}</label>,
            
        ]
    }
}
export default Customer;