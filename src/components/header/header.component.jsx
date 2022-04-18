import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import { useEffect, useState } from "react";

import "./header.styles.scss";

function Header({ download, print, docName, changeDocName }) {
  const [name, setName] = useState(docName);

  useEffect(() => {
    setName(docName);
  }, [docName])
  

  const handelChange = (e) => {
    let val = e.target.value;
    setName(val);
  }

  const checkBlur = (e) => {
    var spanText = e.target.value;
    if (!spanText){
      spanText = 'A1 Office';
    }
    setName(spanText);
    changeDocName(spanText);
  }

  return (
    <div className="header">
      <div className="items">
        <div>
          <input className="edit" value={name} id="fileName" onChange={handelChange} onBlur={checkBlur} />
        </div>
        <div className="down-print">
          <h1 className="item" onClick={download}>
            <GetAppOutlinedIcon className="icon" fontSize="small" />
            Download
          </h1>
          <h1 className="item" onClick={print}>
            <PrintOutlinedIcon className="icon" fontSize="small" />
            Print
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
