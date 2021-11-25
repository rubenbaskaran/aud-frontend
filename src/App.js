import * as React from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faQuestion,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

// ["DF10", 2, 50, 0, 0, 0, 1] --> 1
// ["DZ03", 1, 35, 50, 0, 0, 2 ] --> 0
// ["DS72", 2, 100, 55, 0, 0, 1] --> 0
// ["DF10", 1, 50, 55, 0, 0, 1] --> 1

function App() {
  //#region Variables
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [diagnosis, setDiagnosis] = React.useState("");
  const [contactType, setContactType] = React.useState("");
  const [cameThroughEd, setCameThroughEd] = React.useState("");
  const [goingToIcu, setGoingToIcu] = React.useState("");
  const genderList = ["Male", "Female"];
  const contactTypeList = ["1", "2"];
  const cameThroughEdList = ["0", "1"];
  const goingToIcuList = ["0", "1"];
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(null);
  const ageList = [];
  for (var i = 18; i < 101; i++) {
    ageList.push(i.toString());
  }
  //#endregion

  //#region Handlers
  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const setGenderHandler = (event) => {
    setGender(event.target.value);
  };

  const setDurationHandler = (event) => {
    if (event.target.value.match(/[a-z]/i) !== null) {
      return;
    }

    if (event.target.value.length > 3) {
      return;
    }

    setDuration(event.target.value);
  };

  const setDiagnosisHandler = (event) => {
    if (event.target.value.length > 4) {
      return;
    }

    setDiagnosis(event.target.value);
  };

  const setContactTypeHandler = (event) => {
    setContactType(event.target.value);
  };

  const setCameThroughEdHandler = (event) => {
    setCameThroughEd(event.target.value);
  };

  const setGoingToIcuHandler = (event) => {
    setGoingToIcu(event.target.value);
  };
  //#endregion

  //#region Other functions
  React.useEffect(() => {
    if (
      age !== "" &&
      gender !== "" &&
      duration !== "" &&
      diagnosis !== "" &&
      contactType !== "" &&
      cameThroughEd !== "" &&
      goingToIcu !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [
    age,
    gender,
    duration,
    diagnosis,
    contactType,
    cameThroughEd,
    goingToIcu,
  ]);

  React.useEffect(() => {
    if (buttonDisabled) {
      setShowIcon(null);
    }
  }, [buttonDisabled]);

  const submitData = () => {
    const data = {
      age: age,
      gender: gender,
      duration: duration,
      diagnosis: diagnosis,
      contactType: contactType,
      cameThroughEd: cameThroughEd,
      goingToIcu: goingToIcu,
    };

    axios
      .post("http://localhost:3001/submit", { data })
      .then(function (response) {
        switch (response.data.output) {
          case 0:
            setShowIcon("check");
            break;
          case 1:
            setShowIcon("cross");
            break;
          default:
            setShowIcon("question");
            break;
        }
      })
      .catch(function (error) {
        setShowIcon("question");
        console.log(error);
      });
  };
  //#endregion

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
            height: "15px",
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
          <div
            style={{
              fontSize: "35px",
              fontFamily: "Calibri",
              fontWeight: "bold",
            }}
          >
            Alcohol Use Disorder Clinical Decision Support System
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "15px",
            backgroundColor: "lightblue",
          }}
        />
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
          container
          style={{
            direction: "row",
            width: "100%",
            backgroundColor: "lightblue",
            padding: "5px",
          }}
        >
          <Grid
            container
            direction="row"
            style={{
              width: "70%",
            }}
          >
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Action diagnosis"
                variant="outlined"
                value={diagnosis}
                onChange={setDiagnosisHandler}
                style={{ width: "75%" }}
                sx={{
                  "& .MuiInputLabel-formControl": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .Mui-focused": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      fontSize: "20px",
                      color: "black",
                    },
                }}
              />
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <FormControl style={{ width: "75%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={setGenderHandler}
                  style={{ fontSize: "20px" }}
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
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <FormControl style={{ width: "75%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={setAgeHandler}
                  style={{ fontSize: "20px" }}
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
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Length of stay (hours)"
                variant="outlined"
                value={duration}
                onChange={setDurationHandler}
                style={{ width: "75%" }}
                sx={{
                  "& .MuiInputLabel-formControl": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .Mui-focused": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    fontSize: "20px",
                    color: "black",
                  },
                  "& .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      fontSize: "20px",
                      color: "black",
                    },
                }}
              />
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <FormControl style={{ width: "75%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Going to ICU
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={goingToIcu}
                  label="Going to ICU"
                  onChange={setGoingToIcuHandler}
                  style={{ fontSize: "20px" }}
                >
                  {goingToIcuList.map((goingToIcuValue) => (
                    <MenuItem key={goingToIcuValue} value={goingToIcuValue}>
                      {goingToIcuValue}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <FormControl style={{ width: "75%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Came through ED
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cameThroughEd}
                  label="Came through ED"
                  onChange={setCameThroughEdHandler}
                  style={{ fontSize: "20px" }}
                >
                  {cameThroughEdList.map((cameThroughEdValue) => (
                    <MenuItem
                      key={cameThroughEdValue}
                      value={cameThroughEdValue}
                    >
                      {cameThroughEdValue}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <FormControl style={{ width: "75%" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Contact type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={contactType}
                  label="Contact type"
                  onChange={setContactTypeHandler}
                  style={{ fontSize: "20px" }}
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
              style={{
                height: "10px",
                backgroundColor: "lightblue",
              }}
            />
            <Grid
              container
              style={{
                backgroundColor: "lightblue",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              <Button
                onClick={submitData}
                disabled={buttonDisabled}
                variant="contained"
                style={{ width: "75%", fontSize: "20px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid
            style={{
              width: "30%",
              height: "100%",
              backgroundColor: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!showIcon && (
              <FontAwesomeIcon
                icon={faSpinner}
                style={{
                  backgroundColor: "lightblue",
                  color: "teal",
                  height: "25%",
                  width: "75%",
                  opacity: "0.8",
                }}
              />
            )}

            {!buttonDisabled && showIcon === "check" && (
              <FontAwesomeIcon
                icon={faCheck}
                style={{
                  backgroundColor: "lightblue",
                  color: "green",
                  height: "25%",
                  width: "75%",
                }}
              />
            )}

            {!buttonDisabled && showIcon === "cross" && (
              <FontAwesomeIcon
                icon={faTimes}
                style={{
                  backgroundColor: "lightblue",
                  color: "red",
                  height: "25%",
                  width: "75%",
                }}
              />
            )}

            {!buttonDisabled && showIcon === "question" && (
              <FontAwesomeIcon
                icon={faQuestion}
                style={{
                  backgroundColor: "lightblue",
                  color: "orange",
                  height: "25%",
                  width: "75%",
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            height: "25px",
            backgroundColor: "lightblue",
          }}
        />
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
      </Grid>
    </Container>
  );
}

export default App;
