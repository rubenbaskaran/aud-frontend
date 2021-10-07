import * as React from "react";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <Container fixed>
      <Grid container style={{ backgroundColor: "yellow" }}>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "turquoise",
            textAlign: "center",
          }}
        >
          <h1>Age (18-101) (int)</h1>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "lightblue", textAlign: "center" }}
        >
          <h1>Sex (1 or 0)</h1>
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
