import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid, Box } from '@mui/material';
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import styles from './styles';
import { useDispatch } from "react-redux";
import { getPosts } from "./Redux/posts";

const App = () => {
  const dispactch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispactch(getPosts())
  }, [dispactch])
  return (
    <Container maxidth="lg">
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography sx={styles.heading} variant="h2" align="center">
          Memories
        </Typography>
        <Box component="img" sx={styles.image} alt="memories" src={memories} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId }/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  )
}

export default App;