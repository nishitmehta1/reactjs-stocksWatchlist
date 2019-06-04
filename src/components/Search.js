import React, { Component } from 'react';
import ajax from '../ajax';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStock: '',
      searchedStocks: []
    };
  }

  handleChange = async e => {
    this.setState(
      {
        searchStock: e.target.value
      },
      async () => {
        if (this.state.searchStock) {
          const value = await ajax.fetchSearchStock(this.state.searchStock);
          if (value != null) {
            this.setState({
              searchedStocks: value.data.slice(0, 4)
            });
          } else {
            console.log(value);
          }
        } else {
          this.setState({
            searchedStocks: null
          });
        }
      }
    );
  };

  onAddButtonClick = stock => {
    var temp = stock;
    this.props.onStockAdd(temp);
  };

  render() {
    const stocks =
      this.state.searchedStocks !== null
        ? this.state.searchedStocks.map((stock, key) => (
            <div className='card eachSuggestion' key={key}>
              <div className='card-body'>
                <h5 className='card-title'>{stock['symbol']}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {stock['name']}
                </h6>
                <p className='card-text'>${stock['price']}</p>
                {this.props.stockList.includes(stock['symbol']) ? (
                  <button
                    href='#'
                    className='btn-outline-primary'
                    disabled
                    onClick={() => this.onAddButtonClick(stock['symbol'])}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    href='#'
                    className='card-link addButton btn-primary btn-block'
                    onClick={() => this.onAddButtonClick(stock['symbol'])}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))
        : '';
    return (
      <div className='search'>
        <div className='input-group input-group-lg'>
          <input
            type='search'
            placeholder='Search by typing the Symbol (E.g. AAPL, MSFT, LYFT...)'
            className='form-control input-group-lg searchBar'
            value={this.state.searchStock}
            onChange={this.handleChange}
          />
        </div>

        <div className='suggestedStocks'>{stocks}</div>
      </div>
    );
  }
}

export default Search;
