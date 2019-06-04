const apiHost = 'https://api.worldtradingdata.com/api/v1/';
const search = 'stock_search';
const quotePrice = 'stock';
const apikey =
  'api_token=IsdX32acGoVARDNcEHAVClZRX0BNcuvrWeLSpy9is5Ipe9CP5J6Z8EnYFoL2';
// IsdX32acGoVARDNcEHAVClZRX0BNcuvrWeLSpy9is5Ipe9CP5J6Z8EnYFoL2
// BMxa3DAbRA6UN72hRMCZb228oPGAO5IXO86RZcEB4dbktedzZUsfuBdSNNWQ
export default {
  async fetchStockPrice(val) {
    try {
      const response = await fetch(
        apiHost + quotePrice + '?symbol=' + val + '&' + apikey
      );
      const responseJson = await response.json();
      // console.log('In Ajax' + responseJson.data[0]['price']);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchSearchStock(val) {
    try {
      const response = await fetch(
        apiHost +
          search +
          '?' +
          'search_term=' +
          val +
          '&' +
          'search_by=symbol' +
          '&' +
          'sort_by=market_cap' +
          '&' +
          'sort_order=desc' +
          '&' +
          apikey
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};
