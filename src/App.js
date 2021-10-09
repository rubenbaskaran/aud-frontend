import * as React from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

function App() {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [diagnosis, setDiagnosis] = React.useState("");
  const [contactType, setContactType] = React.useState("");
  const genderList = ["Male", "Female"];
  const contactTypeList = ["0", "1"];

  const ageList = [];
  for (var i = 18; i < 101; i++) {
    ageList.push(i.toString());
  }

  const setAgeHandler = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const setGenderHandler = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const setDurationHandler = (event) => {
    if (event.target.value.match(/[a-z]/i) !== null) {
      return;
    }

    if (Number(event.target.value) > 999) {
      return;
    }

    setDuration(event.target.value);
    console.log(event.target.value);
  };

  const setDiagnosisHandler = (event) => {
    if (event.target.value.length > 4) {
      return;
    }

    setDiagnosis(event.target.value);
    console.log(event.target.value);
  };

  const setContactTypeHandler = (event) => {
    setContactType(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Container fixed>
      <Grid
        container
        style={{
          backgroundColor: "lightblue",
          border: "10px solid lightblue",
          borderRadius: "10px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h1>Alcohol Use Disorder Clinical Decision Support System</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "20px",
            backgroundColor: "teal",
            border: "5px solid teal",
            borderRadius: "10px",
          }}
        />
        <Grid
          item
          xs={12}
          style={{
            height: "30px",
            backgroundColor: "lightblue",
          }}
        />
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <FormControl style={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={setAgeHandler}
            >
              {ageList.map((ageValue) => (
                <MenuItem key={ageValue} value={ageValue}>
                  {ageValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <FormControl style={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={setGenderHandler}
            >
              {genderList.map((genderValue) => (
                <MenuItem key={genderValue} value={genderValue}>
                  {genderValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Length of stay (hours)"
            variant="outlined"
            value={duration}
            onChange={setDurationHandler}
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Action diagnosis"
            variant="outlined"
            value={diagnosis}
            onChange={setDiagnosisHandler}
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <FormControl style={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">Contact type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={contactType}
              label="Contact type"
              onChange={setContactTypeHandler}
            >
              {contactTypeList.map((contactTypeValue) => (
                <MenuItem key={contactTypeValue} value={contactTypeValue}>
                  {contactTypeValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "grey", textAlign: "center" }}
        >
          <h1>Emergency departement (came through ed yes no?) (1 or 0)</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "pink", textAlign: "center" }}
        >
          <h1>
            Intensive care unit (are they going through icu afterwards?) (1 or
            0)
          </h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
