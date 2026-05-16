import './Footer.css';

function Footer(){
    const hidefooter =
    location.pathname === "/login" || location.pathname=="/register"  || location.pathname=="/";

  if (hidefooter) {
    // console.log(user);
    return null;
  }
    return(<>
    <div className="footer-wrapper">
        <div className="footer">
           <div className="text">
            <a href="https://thevaibhav.netlify.app">
         <h4>Made with Love By Vaibhav Sharma</h4>
            </a>
           </div>
        </div>

    </div>
    </>)

}
export default Footer;