import React from 'react'
import cars from '../cars.json'
import {Container, Paper, Chip, Typography, makeStyles} from '@material-ui/core';
// import material ui components here //
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSm: {
      padding: "40px",
  },
  carName: {
      fontSize: 20,
      fontWeight: "bold",
  }
}));

const Car = (props) => {
    const classes = useStyles()
    const id = parseInt(props.match.params.id)
    const selectedCar = cars.find((car) => id ===car.id)
   return (
     <Container className={classes.containerLarge} maxWidth="sm">
         <Paper className="car-container">
             <Container maxWidth="xs" className={classes.containerSm} >
                 <Typography className={classes.carName}>
                     {selectedCar.Name}
                 </Typography>
                 <br />
                 <Chip label={`ID: ${selectedCar.id}`} />
                 <Chip label={`MPG: ${selectedCar.Miles_per_Gallon}`} />
                 <Chip label={`Cylinders: ${selectedCar.Cylinders}`} />
                 <Chip label={`Displacement: ${selectedCar.Displacement}`} />
                 <Chip label={`Horsepower: ${selectedCar.Horsepower}`} />
                 <Chip label={`Weight: ${selectedCar.Weight_in_lbs}`} />
                 <Chip label={`Acceleration: ${selectedCar.Acceleration}`} />
                 <Chip label={`Year: ${selectedCar.Year}`} />
                 <Chip label={`Origin: ${selectedCar.Origin}`} />
             </Container>
         </Paper>
     </Container>
   )
}

export default Car