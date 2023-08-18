import React, { useState } from "react";
import "./reactModal.css";

/**
 * Ici sont définis les propset quel type de valeur est attendu de la part de chacun de ses props
 * ContentModal : Contiendra le texte afficher dans la modale
 * ContentButton : Contiendra le texte affiché dans le bouton de la modale
 * OnClose : Attend une fonction depuis le composant parent qu'il l'appelera qui doit servir a fermer la modale
 * backgroundColorButton (OPTIONNEL) : Attend un chaine de caractère qui doit indiquer la couleur de fond du bouton
 */
interface modalContent {
  contentModal: string;
  contentButton: string;
  onClose: () => void;
  backgroundColorButton?: string;
}

function ReactModal(props: modalContent) {
  const handleButtonClick = () => {
    props.onClose(); // Appeler la fonction de fermeture du modal fournie par le parent
  };

  /**
   * Utilisation de la couleur de fond fournie par les props ou la valeur par défau
   */
  const buttonStyle = {
    backgroundColor: props.backgroundColorButton || "#646cff",
  };

  return (
    <div className="overlayModal">
      <div className="reactModal">
        <h4>{props.contentModal}</h4>
        <button style={buttonStyle} onClick={handleButtonClick}>
          {props.contentButton}
        </button>
      </div>
    </div>
  );
}

export default ReactModal;
