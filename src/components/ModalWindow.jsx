import { Button, Modal, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AddPropertyForm from "../forms/AddPropertyForm";

export default function ModalWindow({ modalOpen, toggleModal, propertyData }) {
  return (
    <>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "80%",
            padding: "32px",
            backgroundColor: "#f1f1f1",
            margin: "2% auto",
            borderRadius: "8px",
            overflow: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
            <Typography variant="h5" component={"h2"}>
              Editar propiedad
            </Typography>
          </Box>
          <AddPropertyForm propertyData={propertyData} />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          >
            <Button
              variant="outlined"
              sx={{ textTransform: "capitalize" }}
              onClick={toggleModal}
            >
              Cerrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

ModalWindow.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  propertyData: PropTypes.object,
};
