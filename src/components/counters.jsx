import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id : 1, value :1},
            {id : 2, value :0},
            {id : 3, value :0},
            {id : 4, value :0},
            {id : 5, value :0}
        ]
     }

    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(a => a.id !== counterId);
        this.setState({counters : counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map( a => {a.value = 0; return a});
        this.setState({counters});
    };

    handleValueChange = (param, counter) => {
               
        const counters = [...this.state.counters];
        const indexVal = counters.indexOf(counter);
        counters[indexVal] = {...counter};
        if(param===0)
            counters[indexVal].value++;
        else
        {
            if(counter.value >0)
                counters[indexVal].value--;
        }            
        this.setState({counters}); 
       
    };

    render() { 
        return (
            <div>
                <button className="btn btn-primary" onClick={ this.handleReset }>Reset</button>
                {this.state.counters.map(
                     counters => <Counter key={counters.id} counter={counters} onDelete={ this.handleDelete} onIncOrDec = { this.handleValueChange} />
                )}
            </div>
        );
    }
}
 
export default Counters;