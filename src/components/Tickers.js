import React, { Component } from "react";
import axios from "axios";
import "./Tickers.css";
import Cryptocurrency from "./Cryptocurrency";
import YodacomLogo from "../../src/y_yodacom_Icon_white40x40.png";

class Tickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "eos",
          name: "EOS",
          symbol: "eos",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "golem",
          name: "Golem",
          symbol: "GNT",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      10 * 1000
    );
  }

  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        const wanted = [
          "bitcoin",
          "ethereum",
          "litecoin",
          "eos",
          "golem-network-tokens"
        ];
        const result = response.data.filter(currency =>
          wanted.includes(currency.id)
        );
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
  }

  render() {
    const tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ));
    return (
      <div className="tickers-container">
        <ul className="tickers">{tickers}</ul>
        <p>
          Information updated every 10 seconds courtesy of coinmarketcap.com</p>

        <a href="http://jjblack.com" className="attribFooter" target="_blank" > <img src={YodacomLogo} className="attribLogo" alt="Yodacom.com" />Developed byYodacom</a>
      </div>

      // <div className="Media">
      //   <img class="Media-figure" src={YodacomLogo} alt="Yodacom Logo">
      //     <p class="Media-body">Developed by Yodacom</p>
      // </div>

    );
  }
}

export default Tickers;
