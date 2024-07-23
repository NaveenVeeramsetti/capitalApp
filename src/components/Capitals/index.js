import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {
    isActiveCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({isActiveCapitalId: event.target.value})
  }

  getCapital = () => {
    const {isActiveCapitalId} = this.state
    const isActiveCapitalAndCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === isActiveCapitalId,
    )
    return isActiveCapitalAndCountry.country
  }

  render() {
    const {isActiveCapitalId} = this.state
    const country = this.getCapital(isActiveCapitalId)
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="options-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={isActiveCapitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="options"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
