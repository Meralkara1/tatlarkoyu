import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { Spin, message } from "antd";

const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { cartItems } = useContext(CartContext);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  const handlePayment = async () => {
    setLoading(true);
    if (!user) {
      return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
    }

    try {
      window.location.href = "/success";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-totals">
      <h2>Toplam Tutar</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Ürünler Toplamı</th>
            <td>
              <span id="subtotal">₺{subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Teslimat Ücreti</th>
            <td>
              <ul>
                <li>
                  <label>
                    Hızlı kargo: ₺15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Toplam</th>
            <td>
              <strong id="cart-total">${cartTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <Spin spinning={loading}>
          <button className="btn btn-lg" onClick={handlePayment}>
            Ödeme işlemine geçin
          </button>
        </Spin>
      </div>
    </div>
  );
};

export default CartTotals;
