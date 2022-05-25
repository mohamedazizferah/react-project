import { Button, TextField } from "@mui/material";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// localStorage.setItem()
function Login() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="login_content flex">
        <TextField
          error
          id="standard-error"
          label="User Name"
          variant="standard"
          className="txtfld"
        />
        <TextField
          error
          className="txtfld"
          id="standard-error"
          label="PassWord"
          variant="standard"
          type="password"
          color="error"
        />
        <Button variant="outlined" color="error">
          Login
        </Button>
      </div>
    </ThemeProvider>
  );
}
export default Login;
