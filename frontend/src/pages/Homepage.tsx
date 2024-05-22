
import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'


export default function Homepage() {
  return (
    <Row>
    {sampleProducts.map((product)=>(
      <Col key={product.slug} sm={6} md={4} lg={3}>
        <Link to={'/product/'+product.slug}>
        <img  src={product.image} alt="aa" className='product-image' />        
      <h3>{product.name}</h3>
      <h2>฿{product.price}</h2>
        </Link>
      </Col>
    ))}
        </Row>
  )
}
