import React, { useState } from 'react';
// material
import {
  Container,
  Stack,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  Alert
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// components
import { createUser } from '../services/User';
import Page from '../components/Page';
import UserUploadProfile from '../components/_dashboard/user/UserUploadProfile';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: '',
    zipcode: '',
    company: '',
    role: ''
  });

  const handleSubmit = async () => {
    if (!name) {
      setError({ ...error, name: 'Name is required' });
    }

    if (!email) {
      setError({ ...error, email: 'Email is required' });
    }

    if (!phone) {
      setError({ ...error, phone: 'Phone number is required' });
    }

    if (!country) {
      setError({ ...error, country: 'Country is required' });
    }

    if (!state) {
      setError({ ...error, state: 'State is required' });
    }

    if (!city) {
      setError({ ...error, city: 'City is required' });
    }

    if (!address) {
      setError({ ...error, address: 'Address is required' });
    }

    if (!zipcode) {
      setError({ ...error, zipcode: 'Zipcode is required' });
    }

    if (!company) {
      setError({ ...error, company: 'Company is required' });
    }

    if (!role) {
      setError({ ...error, role: 'Role is required' });
    }

    if (
      name &&
      email &&
      phone &&
      country &&
      state &&
      city &&
      address &&
      zipcode &&
      company &&
      role
    ) {
      const data = {
        name,
        email,
        phone,
        country,
        state,
        city,
        address,
        zipcode,
        company,
        role
      };
      const addUser = await createUser(data);
      console.log(addUser);
      if (addUser.data.success) {
        setError({
          name: '',
          email: '',
          phone: '',
          country: '',
          state: '',
          city: '',
          address: '',
          zipcode: '',
          company: '',
          role: ''
        });
        setName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setState('');
        setCity('');
        setAddress('');
        setZipcode('');
        setCompany('');
        setRole('');
        setIsSuccess(true);
      }
    }
  };
  return (
    <Page title="User | Minimal-UI">
      {isSuccess && (
        <Alert variant="outlined" severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <Container>
        <Stack direction="row" alignItem="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Create a new user
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mb={5} spacing={3}>
          <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
              <UserUploadProfile />
            </Card>
          </Grid>
          <Grid item xs={18} sm={8}>
            <Card className={classes.card}>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid>
                  <TextField
                    error={error.name}
                    id="outlined-error"
                    label="Full Name"
                    value={name}
                    helperText={error.name}
                    variant="outlined"
                    onChange={(e) => {
                      setName(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, name: '' });
                    }}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Email Address"
                    value={email}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, email: '' });
                    }}
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
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, phone: '' });
                    }}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Country"
                    value={country}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => {
                      setCountry(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, country: '' });
                    }}
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
                    onChange={(e) => {
                      setState(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, state: '' });
                    }}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="City"
                    value={city}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => {
                      setCity(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, city: '' });
                    }}
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
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, address: '' });
                    }}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Zip/Code"
                    value={zipcode}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => {
                      setZipcode(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, zipcode: '' });
                    }}
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
                    onChange={(e) => {
                      setCompany(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, company: '' });
                    }}
                  />
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Role"
                    value={role}
                    helperText="Incorrect entry."
                    variant="outlined"
                    onChange={(e) => {
                      setRole(e.target.value);
                      setIsSuccess(false);
                      setError({ ...error, role: '' });
                    }}
                  />
                </Grid>
              </form>
              <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" mb={5} mr={3}>
                <Button variant="contained" onClick={handleSubmit}>
                  Create User
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
