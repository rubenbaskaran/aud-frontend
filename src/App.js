import * as React from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function App() {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const genderList = ["Male", "Female"];

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

  return (
    <Container fixed>
      <Grid container style={{ backgroundColor: "yellow" }}>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "turquoise",
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
          style={{ backgroundColor: "lightgreen", textAlign: "center" }}
        >
          <h1>Length of stay 3 digits (int hours)</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "teal", textAlign: "center" }}
        >
          <h1>Action diagnosis (string 4 CHARS e.g. "DM16")</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "orange", textAlign: "center" }}
        >
          <h1>Contact type (0 or 1)</h1>
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
