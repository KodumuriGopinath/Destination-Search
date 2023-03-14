// Write your code here
import './index.css'

const DestinationItem = props => {
  const {listItems} = props
  return (
    <ul className="list-items-constainer">
      {listItems.map(eachItem => (
        <li className="list-item" key={eachItem.id}>
          <img
            className="image-item"
            src={eachItem.imgUrl}
            alt={eachItem.name}
          />
          <p>{eachItem.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default DestinationItem
