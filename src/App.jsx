import Products from './components/Products'
import './App.css'

const productList = [
  { id: 1, title: "Batai", price: 59.99, onSale: true },
  { id: 2, title: "Marškinėliai", price: 19.99, onSale: false },
  { id: 3, title: "Kepurė", price: 15.00, onSale: true }
];

function App() {
  

  return (
    <div>
      <h1 className='text-center p-10 text-4xl '>Mūsų Produktai</h1>
      {productList.map((product) => (
        <Products 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          onSale={product.onSale} 
        />
      ))}
       </div>
  )
}

export default App
