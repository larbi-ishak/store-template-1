import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <footer className="mt-auto">
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
        </div>
      </div>
      <section className="py-5 bg-dark">
        <div className="container d-flex justify-content-center">
          <span className="text-muted">Copyright &copy; La Boquiera 2024</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
