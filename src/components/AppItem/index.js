// Write your code here
import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="appLogo-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
