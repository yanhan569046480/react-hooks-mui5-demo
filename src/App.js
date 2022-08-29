import './App.css';
import BasicTable from "./components/BasicTable";
import {Alert, Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <div className="App">
      <Alert severity="error">This is an error alert — check it out!</Alert>

      <Grid container spacing={0}>
        <Grid item xs={6} xsOffset={3}>
          <Paper elevation={3} >
            <BasicTable />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
