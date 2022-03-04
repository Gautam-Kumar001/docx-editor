// import React from "react";
// import {
//   DocumentEditorComponent,
//   DocumentEditorContainerComponent,
//   Toolbar,
// } from "@syncfusion/ej2-react-documenteditor";

// DocumentEditorContainerComponent.Inject(Toolbar);

// class DocEditor extends React.Component {
//   render() {
//     return (
//       <div className="doc-editor">
//         <DocumentEditorContainerComponent
//           id="container"
//           height={"100vh"}
//           width={"100%"}
//           serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
//           enableToolbar={true}
//         />
//       </div>
//     );
//   }
// }

// export default DocEditor;

import React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";

import "./doc-editor.styles.scss";

DocumentEditorContainerComponent.Inject(Toolbar);

class DocEditor extends React.Component {
  onCreate() {
    setInterval(() => {
      this.updateDocumentEditorSize();
    }, 1);
    //Adds event listener for browser window resize event.
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
    this.updateDocumentEditorSize();
  }

  updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    this.container.resize(window.innerWidth - 23, window.innerHeight);
  }

  render() {
    return (
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          this.container = scope;
        }}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
        created={this.onCreate.bind(this)}
      />
    );
  }
}

export default DocEditor;
