import React from "react";

interface modalContent {
  contentModal: string;
  contentButton: string;
}

/*ReactModal.defaultProps = {
  contentModal: "Ma modale",
  contentButton: "Mon bouton",
};*/

function ReactModal(props: modalContent) {
  return (
    <div className="reactModal">
      <h4>{props.contentModal}</h4>
      <button>{props.contentButton}</button>
    </div>
  );
}

export default ReactModal;
