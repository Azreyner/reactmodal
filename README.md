# Bibliothèque ReactModal

Bibliothèque React permettant de créer facilement des modales réutilisables.

## Installation

Pour installer cette bibliothèque, vous pouvez utiliser la ligne de commande suivante :

```bash
npm install @Azreyner/reactmodal
```

## Node version

v18.16.0

## Utilisation

```javascript
import React, { useState } from 'react';
import ReactModal from '@Azreyner/reactmodal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Ouvrir la modale</button>
      {modalIsOpen &&
      <ReactModal
        contentModal="Contenu de la modale"
        contentButton="Fermer"
        isOpen={modalIsOpen}
        onClose={closeModal}
        backgroundColorButton="#3498db"
      />}
    </div>
  );
}

export default App;
```
