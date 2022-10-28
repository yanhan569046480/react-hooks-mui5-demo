import './App.css';
import BasicTable from "./components/BasicTable";
import { Alert } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import Variants from './components/Variants';
import MediaControlCard from './components/MediaControlCard';
import Stack from '@mui/material/Stack';
import DateAndTimePickers from './components/DateAndTimePickers';

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={6} xsOffset={3}>
          <Stack spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>

            <BasicTable />

            <Variants />

            <MediaControlCard />

            <DateAndTimePickers />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;