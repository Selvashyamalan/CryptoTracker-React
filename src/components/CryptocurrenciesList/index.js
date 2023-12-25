import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrencyList = props => {
  const {cryptoList} = props

  return (
    <div className="app-container">
      <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crpto-image"
      />
      <ul className="currency-list">
        <li className="table-header">
          <p className="header first-cell">Coin Type</p>
          <p className="header">USD</p>
          <p className="header">EURO</p>
        </li>
        {cryptoList.map(each => (
          <CryptocurrencyItem key={each.id} cryptoDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrencyList
