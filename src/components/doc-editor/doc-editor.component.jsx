import React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  WordExport,
  SfdtExport,
  Selection,
  Editor,
} from "@syncfusion/ej2-react-documenteditor";

import Header from "../header/header.component";

import "./doc-editor.styles.scss";

DocumentEditorContainerComponent.Inject(
  Toolbar,
  SfdtExport,
  Selection,
  Editor,
  WordExport
);

class DocEditor extends React.Component {
  onCreate() {
    setInterval(() => {
      this.updateDocumentEditorSize();
    }, 100);
    //Adds event listener for browser window resize event.
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
    this.updateDocumentEditorSize();
  }

  updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    this.container.resize(window.innerWidth - 15, window.innerHeight - 57);
  }

  // onToolbarClick = (args) => {
  //   switch (args.item.id) {
  //     case "Custom":
  //       //Disable image toolbar item.
  //       this.container.toolbar.enableItems(4, false);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  save() {
    //Download the document in docx format.
    this.documenteditor.save("sample", "Docx");
  }

  render() {
    // let toolItem = {
    //   prefixIcon: "e-de-ctnr-lock",
    //   tooltipText: "Disable Image",
    //   text: "Disable Image",
    //   id: "Custom",
    // };

    let items = [
      // toolItem,
      "New",
      "Open",
      "Separator",
      "Undo",
      "Redo",
      "Separator",
      "Image",
      "Table",
      "Hyperlink",
      "Bookmark",
      "TableOfContents",
      "Separator",
      "Header",
      "Footer",
      "PageSetup",
      "PageNumber",
      "Break",
      "InsertFootnote",
      "InsertEndnote",
      "Separator",
      "Find",
      "Separator",
      "Comments",
      "TrackChanges",
      // "Separator",
      // "LocalClipboard",
      // "RestrictEditing",
      // "FormFields",
      // "UpdateFields",
    ];

    return (
      <div className="doc-editor">
        <Header />
        <DocumentEditorContainerComponent
          id="container"
          ref={(scope) => {
            this.container = scope;
          }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
          toolbarItems={items}
          isReadOnly={false}
          enableSelection={true}
          enableEditor={true}
          enableSfdtExport={true}
          enableWordExport={true}
          // toolbarClick={this.onToolbarClick.bind(this)}
          created={this.onCreate.bind(this)}
        />
        <button onClick={this.save.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default DocEditor;
