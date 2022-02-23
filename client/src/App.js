import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Box } from '@mui/material';
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import styles from './styles';

const App = () => {
  return (
    <Container maxidth="lg">
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography sx={styles.heading} variant="h2" align="center">
          Memories
        </Typography>
        {/* <Image sx={styles.image} src={memories} alt="memories" height={60} /> */}
        <Box component="img" sx={styles.image} alt="memories"  src={memories} />
        {/* <img  src={memories} alt="memories" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  )
}

export default App;