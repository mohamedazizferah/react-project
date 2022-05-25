import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    color: "orange",
  },
});
function SignUp() {
  const [users, setusers] = useState([]);
  const [username, setusername] = useState("");
  const [pass, setpassword] = useState("");
  const [valide, setvalide] = useState("");
  const [error, setError] = useState(false);
  const [found, setfound] = useState(false);
  const handleAddTask = async () => {
    const user = { userName: username, password: pass };
    const result = await axios.post("http://localhost:8000/user", user);
    console.log("a", result);
  };
  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handlepass = (e) => {
    setpassword(e.target.value);
  };
  const handlevalide = (e) => {
    setvalide(e.target.value);
  };
  console.log(users);
  const handleAddUser = () => {
    users.map((e) => {
      if (e.userName === username) {
        setfound(true);
      }
    });
    if (found == true) {
      alert("username Already in use");
    } else if (found == false && pass != valide) {
      alert("password incorrect");
    } else if (found == false && pass === valide) {
      handleAddTask();
      alert("User added successfully");
    }
    setfound(false);
  };
  const getdata = () => {
    axios
      .get(`http://localhost:8000/user`)
      .then((result) => {
        setusers(result.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
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
          value={username}
          onChange={handleusername}
        />
        <TextField
          error
          className="txtfld"
          id="standard-error"
          label="PassWord"
          variant="standard"
          type="password"
          color="error"
          value={pass}
          onChange={handlepass}
        />
        <TextField
          error
          className="txtfld"
          id="standard-error"
          label="Confirm PassWord"
          variant="standard"
          type="password"
          color="error"
          value={valide}
          onChange={handlevalide}
        />
        <Button variant="outlined" color="error" onClick={handleAddUser}>
          SIgn UP
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default SignUp;
