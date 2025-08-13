import React, { useState } from "react";
import { InternalDialog } from "./InternalDialog";

export const Dialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>
      <button
        onClick={openDialog}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Abrir Modal
      </button>
      {isDialogOpen && (
        <InternalDialog
          title="Hola desde el Modal"
          onClose={closeDialog}
        >
         
          
          <button
            onClick={closeDialog}
            style={{
              marginTop: "20px",
              padding: "10px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#DC3545",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Cerrar Modal
          </button>
           <p>
            my modal content
          </p>
        </InternalDialog>
      )}
    </div>
  );
};

