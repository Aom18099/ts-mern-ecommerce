import {sampleProducts} from './data'
import './App.css'

function App() {
  
  return (
    <>
      <header>Ajarn Ohm</header>
      <main>
    <ul>
      {sampleProducts.map((product)=>(
      <li key={product.slug}>
        <img  src={product.image} alt="aa" className='product-image' />        
        <h2>{product.name}</h2>
        <h2>฿{product.price}</h2>
      </li>
      ))}
    </ul>

      </main>
      <footer>All right reserved</footer>
    </>
  )
}

export default App
