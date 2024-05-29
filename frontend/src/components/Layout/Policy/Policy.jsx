import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>Ücretresiz Teslimat</strong>
              <span>₺60 üzeri alışverişler teslimat ücreti yok</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>Destek 24/7</strong>
              <span>24 saat canlı destek</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong> 30 Gün İçinde İade</strong>
              <span>Ürünü aldıktan sonra 30 gün içinde iade edebilirsiniz.</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong> Ödeme Yöntemi </strong>
              <span>Güvenli ödeme </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
