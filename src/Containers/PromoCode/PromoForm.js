import React, { Component } from 'react';

class PromoForm extends Component {
    state={
        promocode:""
    }

    render() {
        return (
            <form>
                <input type="text" 
                value={this.state.promocode}
                onChange={(e)=>{this.setState({promocode:e.target.value})}}
                />
                <input type="submit" value="Apply"/>
            </form>
        );
    }
}
export default PromoForm;