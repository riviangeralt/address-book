import "./App.css";
import AddressTable from "./AddressTable";
import CustomDialog from "./CustomDialog";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  const [addresses, setAddresses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (values) => {
    const newAddress = {
      ...values,
      id: Math.random().toString(36).split(".")[1],
    };
    setAddresses([...addresses, newAddress]);
    setModalOpen(false);
  };

  const handleEdit = (id) => {
    setModalOpen(true);
    setIsEdit(true);
    setEditAddress(addresses.find((address) => address.id === id));
  };

  const updateAddress = (values) => {
    const updatedAddresses = addresses.map((address) => {
      if (address.id === values.id) {
        return { ...address, ...values };
      }
      return address;
    });
    setAddresses(updatedAddresses);
    setModalOpen(false);
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="App">
      <Stack direction="column" sx={{ width: "80%" }}>
        <Stack
          direction="row"
          align="center"
          sx={{
            width: "100%",
            marginBottom: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              setModalOpen(true);
              setIsEdit(false);
            }}
          >
            Add Address
          </Button>
        </Stack>
        <AddressTable
          addresses={addresses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {modalOpen && (
          <CustomDialog
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
            handleSubmit={handleSubmit}
            editAddress={editAddress}
            handleUpdate={updateAddress}
            isEdit={isEdit}
          />
        )}
      </Stack>
    </div>
  );
}

export default App;
