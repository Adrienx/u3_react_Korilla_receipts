import Receipt from "./components/Receipt"
import "./App.css"

const receipts = [
  {
    id: 1,
    person: "Jeremy",
    order: {
      main: "Burrito",
      protein: "Skirt Steak",
      rice: "Purple Rice",
      sauce: "Green Crack",
      toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
      drink: "Thai Iced Tea",
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: "Tiffany",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Chicken",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: "Brittany",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20,
    },
    paid: false,
  },
  {
    id: 4,
    person: "Tylus",
    order: {
      main: "Burrito Bowl",
      protein: "Carnitas",
      rice: "yellow rice",
      sauce: "Jalapeno Honey",
      toppings: ["Grilled Corn", "Pico De Gallo", "Guacamole"],
      drink: "Pineapple Jarritos",
      cost: 23,
    },
    paid: true,
  },
  {
    id: 5,
    person: "Karolin",
    order: {
      main: "Burrito",
      protein: "Organic Tofu",
      rice: "Purple Rice",
      sauce: "Green Crack",
      drink: "Korchata",
      cost: 22,
    },
    paid: false,
  },
  {
    id: 6,
    person: "Mark",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      drink: "Korchata",
      cost: 19,
    },
    paid: false,
  },
  {
    id: 7,
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      drink: "Sparkling Blood Orange Soda",
      cost: 20,
    },
    paid: false,
  },
]

// Define the App component

const App = () => {
  //Use .map() to iterate over each receipt in the 'receipts' array.
  // For each receipt, render the corresponding Receipt component from the Receipt.jsx, passing the current receipt as a prop.
  // Pass a unique "key" prop to each Receipt component.

  return (
    <div className="App">
      {receipts.map((receipt) => {
        if (!receipt.paid) {
          // Only render if the receipt has not been paid
          return <Receipt key={receipt.id} receipt={receipt} />
        }
        return null // Don't render anything if the receipt is paid
      })}
    </div>
  )
}

export default App
