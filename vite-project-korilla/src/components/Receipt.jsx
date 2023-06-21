import PropTypes from "prop-types"

// This Component receives a prop called 'receipt', which represents an individual receipt. Think ofit as "A Receipt's "properties" (props) are as follows:

const Receipt = ({ receipt }) => {
  return (
    <div className="receipts">
      <div>Hoi</div>
      <h2>Customer: {receipt.person}</h2>
      <p>Main: {receipt.order.main}</p>
      <p>Protein: {receipt.order.protein}</p>
      <p>Rice: {receipt.order.rice}</p>
      <p>Sauce: {receipt.order.sauce}</p>
      <p>Drink: {receipt.order.drink}</p>
      <p>Cost: {receipt.order.cost}</p>
      <p>Toppings:</p>
      {/* Some receipts not having toppings would cause errors if this receipt component expects every receipt to have a 'toppings' field.Render toppings only if they exist. 
        
        Receipt.order.toppings && ( ... ) checks if receipt.order.toppings is truthy. If truthy, it'll render the toppings list, if not truthy, it won't render the list*/}
      <div>
        {receipt.order.toppings && (
          <ul>
            {/* Use .map() to loop over the toppings array and generate a list item <li> for each */}
            {receipt.order.toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

Receipt.propTypes = {
  receipt: PropTypes.shape({
    // .shape() method describes an "object{}" whose keys have specific types.
    id: PropTypes.number,
    person: PropTypes.string,
    order: PropTypes.shape({
      main: PropTypes.string,
      protein: PropTypes.string,
      rice: PropTypes.string,
      sauce: PropTypes.string,
      drink: PropTypes.string,
      cost: PropTypes.number,
      toppings: PropTypes.arrayOf(PropTypes.string), //arrayOf() specifies that an array contains elements of a certain type
    }).isRequired,
    paid: PropTypes.bool,
  }).isRequired,
}

export default Receipt
