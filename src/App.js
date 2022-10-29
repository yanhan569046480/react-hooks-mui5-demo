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
      <Grid container spacing={2}>
        <Grid item xs={6} style={{
          border: '1px solid black',
          padding: '8px'
        }}>
          <Stack spacing={2}>
            <MediaControlCard  style={{
              border: '1px solid black',
              padding: '8px'
            }}/>

            <DateAndTimePickers  style={{
              border: '1px solid black',
              padding: '8px'
            }}/>
          </Stack>
        </Grid>

        <Grid item xs={6} style={{
          border: '1px solid black',
          padding: '8px'
        }}>
          <Stack spacing={2}>
            <Alert severity="error" style={{
              border: '1px solid black',
              padding: '8px'
            }}>This is an error alert — check it out!</Alert>

            <BasicTable  style={{
              border: '1px solid black',
              padding: '8px'
            }}/>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;