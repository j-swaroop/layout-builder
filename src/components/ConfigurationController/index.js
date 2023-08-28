// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onchangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onchangeShowRighttNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <div className="responsive-cnfig-container">
            <h1 className="config-heading"> Layout </h1>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeShowContent}
                checked={showContent}
              />
              <label htmlFor="content"> Content </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={onchangeShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar"> Left Navbar </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rightNavbar"
                onChange={onchangeShowRighttNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar"> Right Navbar </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
