import React, { Component } from 'react';

class Counter extends Component {
    
    btnClass = 'btn btn-secondary btn-sm m-2';

    render() { 
        return ( 
            <div>
                <span className={ this.formatClassname() }>{ this.formatCount() }</span>
                <button key={"inc"+ this.props.counter.id} onClick={ () => { this.props.onIncOrDec(0, this.props.counter) } } className={ this.btnClass }>+</button>
                <button key={"dec"+ this.props.counter.id} onClick={ () => { this.props.onIncOrDec(1 , this.props.counter) } } className={ this.btnClass }>-</button>
                <button className="btn btn-danger btn-sm" onClick={ () => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
         );
    }

    formatCount (){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

    formatClassname (){
       let classFormatter = 'badge  m-2 badge-';
       return this.props.counter.value === 0 ? classFormatter+'warning' : classFormatter+'primary'; 
    }
}
 
export default Counter;