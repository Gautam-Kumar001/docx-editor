import React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  WordExport,
  SfdtExport,
  Selection,
  Editor,
  ImageResizer,
  EditorHistory
} from "@syncfusion/ej2-react-documenteditor";

import Header from "../header/header.component";

import "./doc-editor.styles.scss";

DocumentEditorContainerComponent.Inject(
  Toolbar,
  SfdtExport,
  Selection,
  Editor,
  WordExport,
  ImageResizer,
  EditorHistory
);

const mobile = false;

class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web: true,
      myDoc: "",
    };
  }

  onCreate() {
    // set the doc name to A1 Office initially and save the doc in myDoc state
    this.container.documentEditor.documentName = "A1 Office";

    this.setState({
      ...this.state,
      myDoc: this.container.documentEditor,
    });

    this.updateDocumentEditorSize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
    this.updateDocumentEditorSize();
  }

  updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    let my_bool = window.innerWidth <= 850 ? false : true;

    this.setState({ ...this.state, web: my_bool });

    if (this.container){
      this.container.resize(window.innerWidth, window.innerHeight - 33);
    }
  }

  saveChanges(e) {
    if (this.container){
      this.setState({ ...this.state, myDoc: this.container.documentEditor });
    }
  }

  // handelFileChange() {
  //   console.log("------I am in handelFileChange--------");
  //   document
  //     .getElementById("container_toolbar_open")
  //     .addEventListener("click", this.onFileOpenClick.bind(this));
  // }

  // onFileChange(e) {
  //   console.log('Inside onFileChange');
  //   if (e.target.files[0]) {
  //     //Get selected file.
  //     let file = e.target.files[0];
  //     if (file.name.substr(file.name.lastIndexOf(".")) !== ".sfdt") {
  //       console.log('Going for loadFile as not .sfdt', file);
  //       this.loadFile(file);
  //     }
  //   }
  // }

  // loadFile(file) {
  //   let formData = new FormData();
  //   console.log('Inside loadFile');
  //   let serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/";

  //   let ajax = new XMLHttpRequest();
  //   ajax.open("POST", serviceUrl + "Import", true);
  //   ajax.onreadystatechange = () => {
  //     if (ajax.readyState === 4) {
  //       if (ajax.status === 200 || ajax.status === 304) {
  //         // open SFDT text in document editor
  //         console.log('ajax.responseText :', ajax.responseText);
  //         this.container.documentEditor.open(ajax.responseText);
  //       }
  //     }
  //   };
  //   formData.append("file", file);
  //   console.log('form data :', formData);
  //   ajax.send(formData);
  // }

  // download() {
  //Download the document in docx format.
  // console.log("this.state.myDoc.documentName :", this.state.myDoc.documentName);
  // this.state.myDoc.save(
  //   this.state.myDoc.documentName ? this.state.myDoc.documentName : "A1 Office",
  //   "Docx"
  // );
  // }

  // componentWillUnmount() {
  // clearInterval(this.timerID);
  // }

  render() {
    let items = [
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
      // "InsertFootnote",
      // "InsertEndnote",
      "Separator",
      "Find",
      "Separator",
      "Comments",
      "TrackChanges",
      "Separator",
      "LocalClipboard",
      "RestrictEditing",
      // "FormFields",
      // "UpdateFields",
    ];

    return (
      <div className="doc-editor">
        <Header
          download={() => {
            this.state.myDoc.save(this.state.myDoc.documentName, "Docx");
          }}
          print={() => {
            this.state.myDoc.print();
          }}
          docName={
            this.state.myDoc ? this.state.myDoc.documentName : "A1 Office"
          }
          changeDocName={(name) => {
            this.container.documentEditor.documentName = name;
          }}
        />
        <DocumentEditorContainerComponent
          id="container"
          ref={(scope) => {
            this.container = scope;
          }}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          created={this.onCreate.bind(this)}
          enableToolbar={true}
          toolbarItems={items}
          isReadOnly={false}
          enableSelection={true}
          enableEditor={true}
          enableSfdtExport={true}
          enableWordExport={true}
          restrictEditing={false}
          enableImageResizer={true}
          enableEditorHistory={true}
          showPropertiesPane={this.state.web}
          enableContextMenu={true}
          enableSearch={true}
          enableOptionsPane={true}
          enableBookmarkDialog={true}
          enableBordersAndShadingDialog={true}
          enableFontDialog={true}
          enableTableDialog={true}
          enableParagraphDialog={true}
          enableHyperlinkDialog={true}
          enableListDialog={true}
          enablePageSetupDialog={true}
          enableStyleDialog={true}
          enableTableOfContentsDialog={true}
          enableTableOptionsDialog={true}
          enableTablePropertiesDialog={true}
          enableTextExport={true}
          allowResizing={true}
          enableOptimizedTextMeasuring={true}
          layoutType={'Pages'}
          // selectionChange={this.saveChanges.bind(this)}
          // toolbarClick={this.handelFileChange.bind(this)}
          documentChange={this.saveChanges.bind(this)}
        />
      </div>
    );
  }
}

export default DocEditor;
