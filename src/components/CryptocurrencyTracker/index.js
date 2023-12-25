import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoList: [],
  }

  componentDidMount() {
    this.fetchList()
  }

  fetchList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedDate = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({cryptoList: updatedDate, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="page-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Ring" color="#ffffff" width={80} heigth={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
