import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// localStorage.setItem()
function Login() {
  const [users, getusers] = useState([]);
  const [useName, getuseName] = useState([]);
  const [password, getPassword] = useState([]);
  const [error, setError] = useState(false);
  const getdata = () => {
    axios
      .get(`http://localhost:8000/user`)
      .then((result) => {
        getusers(result.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  const handleChangeUser = (e) => {
    getuseName(e.target.value);
  };
  const handleChangePassword = (e) => {
    getPassword(e.target.value);
  };
  const handleClick = () => {
    const user = users.find((x) => x.userName === useName);

    if (!user) {
      alert("userName not found");
    } else {
      if (user.password === password) {
        alert("log in successfully");
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      } else {
        alert("Password Incorrect");
      }
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="login_content flex">
        <TextField
          error
          id="standard-error"
          label="User Name"
          variant="standard"
          className="txtfld"
          value={useName}
          onChange={handleChangeUser}
        />
        <TextField
          error
          className="txtfld"
          id="standard-error"
          label="PassWord"
          variant="standard"
          type="password"
          color="error"
          value={password}
          onChange={handleChangePassword}
        />
        <Button variant="outlined" color="error" onClick={handleClick}>
          Login
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default Login;
