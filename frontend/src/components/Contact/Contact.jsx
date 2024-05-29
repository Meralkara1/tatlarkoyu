import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.97378403808!2d29.12744697551594!3d40.18739686956627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3eb7d9f8aba7%3A0x127e405711993447!2sBursa%20Teknik%20%C3%9Cniversitesi%20Mimar%20Sinan%20Yerle%C5%9Fkesi!5e0!3m2!1str!2str!4v1715704623595!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>      
    </section>
  );
};

export default Contact;
