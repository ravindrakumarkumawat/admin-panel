import React, { useState } from 'react';
// material
import { Container, Stack, Typography, Card, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// components
import Page from '../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250
    }
  },
  card: {
    // padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function Create() {
  const classes = useStyles();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  return (
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItem="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Create a new user
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mb={5} spacing={3}>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>xs=6 sm=4</Card>
          </Grid>
          <Grid item xs={18} sm={8}>
            <Card className={classes.card}>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid>
                  <TextField
                    // error
                    id="outlined-error"
                    label="Full Name"
                    value={fullname}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Email Address"
                    value={email}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid>
                  <TextField
                    // error
                    id="outlined-error"
                    label="Phone Number"
                    value={phone}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Country"
                    value={country}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Grid>
                <Grid>
                  <TextField
                    // error
                    id="outlined-error"
                    label="State/Region"
                    value={state}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setState(e.target.value)}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="City"
                    value={city}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>
                <Grid>
                  <TextField
                    // error
                    id="outlined-error"
                    label="Address"
                    value={address}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Zip/Code"
                    value={zipcode}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </Grid>
                <Grid>
                  <TextField
                    // error
                    id="outlined-error"
                    label="Company"
                    value={company}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Role"
                    value={role}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </Grid>
              </form>
              <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" mb={5} mr={3}>
                <Button variant="contained">Create User</Button>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
