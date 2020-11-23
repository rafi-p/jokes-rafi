import React from 'react'

class Jokes extends React.Component {
    render() {
        const { joke } = this.props
        return (
            <div className="card mb-2 shadow-sm" style={{width:'25rem'}}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '11px'}}>{joke.category}</h6>
                    <p className="card-text" style={{fontSize: '14px', marginBottom:'0rem'}}>
                    {joke.setup}
                    </p>
                    <a href="#!" className="card-link float-right" style={{fontSize: '13px'}}>Delivery</a>
                </div>
            </div>
        )
    }
}

export default Jokes