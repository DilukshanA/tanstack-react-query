import { Box, Button, Grid } from "@mui/material";


const Person = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction={"column"}>
        <Grid container direction="row" size={12} spacing={2}>
          <Grid size={3}>
            <Box>Name</Box>
          </Grid>
          <Grid size={1}>
            <Box>Age</Box>
          </Grid>
          <Grid size={3}>
            <Box>Email</Box>
          </Grid>
          <Grid
            size={2}
            display="flex"
            justifyContent="start"
            alignItems="center"
            sx={{ ml: 2 }}
          >
            <Button
              variant="contained"
              color="success"
              size="small"
              href="/add-person"
            >
              Add
            </Button>
          </Grid>
        </Grid>

        {persons.map((p, index) => (
          <Grid
            key={index}
            container
            direction="row"
            size={12}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Grid
              size={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Box>{p.name}</Box>
            </Grid>
            <Grid
              size={1}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Box>{p.age}</Box>
            </Grid>
            <Grid
              size={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Box>{p.email}</Box>
            </Grid>
            <Grid
              size={2}
              display="flex"
              justifyContent="start"
              alignItems="center"
              sx={{ ml: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                // onClick={() => handleEditRoute(p._id)}
              >
                Edit
              </Button>
            </Grid>
            <Grid
              size={2}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="error"
                size="small"
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Person;
