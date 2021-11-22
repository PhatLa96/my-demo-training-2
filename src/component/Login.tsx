import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../contexts/AuthContext";

interface LoginProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ open, handleClose }: LoginProps) => {
  //context
  const { toggleAuth } = useContext(AuthContext);

  //state
  const [userName, setUserName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleSubmit = () => {
    toggleAuth(userName);
    setUserName("");
    handleClose(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          label="Username"
          onChange={handleChange}
          value={userName}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={userName === ""}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
