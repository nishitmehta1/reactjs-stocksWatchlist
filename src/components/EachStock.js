import React, { Component } from 'react';

class EachStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: []
    };
  }

  render() {
    const yahooLink = 'https://finance.yahoo.com/quote/' + this.props.stock;
    return (
      <div className='eachstock'>
        {this.props.stock && (
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{this.props.stock}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                {this.props.name}
              </h6>
              <p className='card-text'>{this.props.price}</p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  Open: {this.props.price_open}
                </li>
                <li className='list-group-item'>
                  Day High: {this.props.day_high}
                </li>
                <li className='list-group-item'>
                  Day Low: {this.props.day_low}
                </li>
              </ul>
              <div className='link-div'>
                <a href={yahooLink} className='card-link yahoo'>
                  Yahoo Finance
                </a>
                <button
                  onClick={() => this.props.handleRemove(this.props.stock)}
                  className='card-link remove btn-danger'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EachStock;
