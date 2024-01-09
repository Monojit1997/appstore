// Write your code here
import './index.css'

const TabItem = props => {
  const {tabList, clickTabItem, isActive} = props
  const {tabId, displayText} = tabList

  const onclickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeListStyle = isActive ? 'active-list-style' : ''

  const activeButtonStyle = isActive ? 'active-button-style' : ''

  return (
    <li className={`list-button-style ${activeListStyle}`}>
      <button
        type="button"
        className={`button ${activeButtonStyle}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
