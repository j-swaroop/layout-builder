// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="navbar">
              <h1 className="navbar-heading"> Left Navbar Menu </h1>
              <ul className="list-item">
                <li> Item1</li>
                <li> Item2</li>
                <li> Item3</li>
                <li> Item4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="navbar-heading"> Content </h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectutor, adispiding Lorem ipsum
                dolor sit amet, consectutor, adispiding
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="navbar">
              <h1 className="navbar-heading"> Right Navbar Menu </h1>
              <p className="item"> Ad 1</p>
              <p className="item"> Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
