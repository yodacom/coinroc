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
          id: "ripple",
          name: "Ripple",
          symbol: "XRP",
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
          "ripple",
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
        <a href="https://www.coinbase.com/join/594066242c5bb500a80e1419" alt="Get Free Bitcoin" >Want $10 free BitCoin?  Use this link </a>

        <a href="http://jjblack.com" className="attribFooter" > <img src={YodacomLogo} className="attribLogo" alt="Yodacom.com" />Developed by Yodacom</a>
      </div>

    );
  }
}

export default Tickers;
