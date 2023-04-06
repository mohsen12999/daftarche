import "./Footer.css"
import {version} from "../../package.json"
const Footer = () =>{
    return(
        <div
        className="footer">
            <div className="row">
            <div className="version">
               V {version}
            </div>
             <p> Design By Mohsen</p></div>
           
        </div>
    )
}
export default Footer;