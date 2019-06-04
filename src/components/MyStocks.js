import React, { Component } from 'react';
import EachStock from './EachStock';

class MyStocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStock1s: []
    };
  }

  handleRemove = stockName => {
    this.props.onStockRemove(stockName);
  };

  render() {
    return (
      <div className='mystocks_div'>
        {this.props.data && <h4 className='yourList'>Your List:</h4>}
        <div className='mystocks'>
          {this.props.data &&
            this.props.data.map((stock, key) => (
              <EachStock
                stock={stock['symbol']}
                name={stock['name']}
                price_open={stock['price_open']}
                price={stock['price']}
                day_high={stock['day_high']}
                day_low={stock['day_low']}
                key={key}
                handleRemove={this.handleRemove}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default MyStocks;
