import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Person = () => {

    const fetchPersons = async () => {
        try {
            const response = await axios.get("http://localhost:4000/all-persons");
            return response.data;
        } catch (error) {
            
        }
    }

    const { data, isError, isLoading } = useQuery({
        queryKey: ["person"],
        queryFn: fetchPersons
    })

    if(isError) {
        return <Box>Error fetching data</Box>;
    }

    if(isLoading) {
        return <CircularProgress/>;
    }

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

        {data?.map((person : any) => (
          <Grid
            key={person._id}
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
              <Box>{person.name}</Box>
            </Grid>
            <Grid
              size={1}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Box>{person.age}</Box>
            </Grid>
            <Grid
              size={3}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Box>{person.email}</Box>
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
