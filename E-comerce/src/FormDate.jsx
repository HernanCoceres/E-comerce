import { Form, Button } from "react-bootstrap"
import styles from './Modules/FormDate.module.css'

function FormDate ({clearCart}) {
    return(
    <Form className={styles.form}>
      <Form.Group controlId="name" className="mb-3">
        <Form.Control type="text" name="name" placeholder="Enter your name"/>
      </Form.Group>

      <Form.Group controlId="age" className="mb-3">
        <Form.Control type="number" name="age" placeholder="Enter your age"/>
      </Form.Group>

      <Form.Group controlId="address" className="mb-3">
        <Form.Control type="text" name="address" placeholder="Enter your address"/>
      </Form.Group>

      <Form.Group controlId="paymentMethod" className="mb-3">
        <Form.Label className={styles.text}>Método de Pago</Form.Label>
        <Form.Select name="paymentMethod">
          <option>Cash</option>
          <option>Transfer</option>
          <option>Card</option>
        </Form.Select>
      </Form.Group>
      <Button className={styles.button_cart} variant='success' onClick={clearCart}>Buy</Button>
    </Form>
  );
}

export default FormDate