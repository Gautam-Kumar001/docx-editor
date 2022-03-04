import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="items">
      <h1 className="item edit">A1 Office</h1>
      <h1 className="item">
        <GetAppOutlinedIcon className="icon" fontSize="small" />
        Download
      </h1>
      <h1 className="item">
        <PrintOutlinedIcon className="icon" fontSize="small" />
        Print
      </h1>
    </div>
  </div>
);

export default Header;
