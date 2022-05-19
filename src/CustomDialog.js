import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, useForm } from "react-hook-form";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const CustomDialog = (props) => {
  const { open, handleClose, handleSubmit, editAddress, handleUpdate, isEdit } =
    props;
  const methods = useForm();
  useEffect(() => {
    if (isEdit) {
      methods.reset({
        name: editAddress.name,
        mobile: editAddress.mobile,
        address: editAddress.address,
        city: editAddress.city,
        state: editAddress.state,
        zip: editAddress.zip,
        type: editAddress.type,
        id: editAddress.id,
      });
    }
    return () => {
      methods.reset({});
    };
  }, [isEdit, editAddress, methods]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Address</DialogTitle>
      <form
        onSubmit={
          isEdit
            ? methods.handleSubmit(handleUpdate)
            : methods.handleSubmit(handleSubmit)
        }
        style={{ marginTop: -16 }}
      >
        <DialogContent>
          <DialogContentText>
            To add an address, please enter the following information:
          </DialogContentText>
          <Controller
            render={({ field }) => {
              return (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={methods.getValues("addType")}
                  label="Address Type"
                  onChange={(e) => {
                    methods.setValue("addType", e.target.value);
                  }}
                  fullWidth
                  {...field}
                >
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                </Select>
              );
            }}
            name="addType"
            control={methods.control}
            defaultValue={isEdit ? editAddress.addType : "Personal"}
          />
          <Controller
            render={({ field }) => {
              return (
                <RadioGroup {...field} sx={{ display: "block" }}>
                  <FormControlLabel
                    value="present"
                    control={<Radio />}
                    label="Present"
                  />
                  <FormControlLabel
                    value="permanent"
                    control={<Radio />}
                    label="Permanent"
                  />
                  <FormControlLabel
                    value="both"
                    control={<Radio />}
                    label="Both"
                  />
                </RadioGroup>
              );
            }}
            name="type"
            control={methods.control}
            defaultValue={isEdit ? editAddress.type : "present"}
          />
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  autoComplete="off"
                  error={methods.formState.errors["name"] ? true : false}
                  onChange={(e) => {
                    methods.setValue("name", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.name : ""}
                />
              );
            }}
            name="name"
            control={methods.control}
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Name must be alphabets only",
              },
            }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["name"] ? true : false}
          >
            {methods.formState.errors["name"]
              ? methods.formState.errors["name"]?.message
              : ""}
          </FormHelperText>
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="Mobile"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={methods.formState.errors["mobile"] ? true : false}
                  autoComplete="off"
                  onChange={(e) => {
                    methods.setValue("mobile", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.mobile : ""}
                />
              );
            }}
            name="mobile"
            control={methods.control}
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid mobile number",
              },
            }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["mobile"] ? true : false}
          >
            {methods.formState.errors["mobile"]
              ? methods.formState.errors["mobile"]?.message
              : ""}
          </FormHelperText>
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="Address"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={methods.formState.errors["address"] ? true : false}
                  autoComplete="off"
                  onChange={(e) => {
                    methods.setValue("address", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.address : ""}
                />
              );
            }}
            name="address"
            control={methods.control}
            rules={{
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Address must be atleast 5 characters",
              },
            }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["address"] ? true : false}
          >
            {methods.formState.errors["address"] &&
              methods.formState.errors["address"]?.message}
          </FormHelperText>
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="City"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={methods.formState.errors["city"] ? true : false}
                  autoComplete="off"
                  onChange={(e) => {
                    methods.setValue("city", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.city : ""}
                />
              );
            }}
            name="city"
            control={methods.control}
            rules={{ required: "This field is required" }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["city"] ? true : false}
          >
            {methods.formState.errors["city"]
              ? methods.formState.errors["city"]?.message
              : ""}
          </FormHelperText>
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="State"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={methods.formState.errors["state"] ? true : false}
                  autoComplete="off"
                  onChange={(e) => {
                    methods.setValue("state", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.state : ""}
                />
              );
            }}
            name="state"
            control={methods.control}
            rules={{
              required: "This field is required",
              //   pattern: {
              //     value: /^[A-Z]$/,
              //     message: "Please enter a valid state",
              //   },
            }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["state"] ? true : false}
          >
            {methods.formState.errors["state"]
              ? methods.formState.errors["state"]?.message
              : ""}
          </FormHelperText>
          <Controller
            render={() => {
              return (
                <TextField
                  margin="dense"
                  label="Zip"
                  type="text"
                  fullWidth
                  variant="standard"
                  error={methods.formState.errors["zip"] ? true : false}
                  autoComplete="off"
                  onChange={(e) => {
                    methods.setValue("zip", e.target.value);
                  }}
                  defaultValue={isEdit ? editAddress.zip : ""}
                />
              );
            }}
            name="zip"
            control={methods.control}
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Please enter a valid zip code",
              },
            }}
            register={methods.register}
          />
          <FormHelperText
            error={methods.formState.errors["zip"] ? true : false}
          >
            {methods.formState.errors["zip"]
              ? methods.formState.errors["zip"]?.message
              : ""}
          </FormHelperText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit">
            {isEdit ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CustomDialog;
