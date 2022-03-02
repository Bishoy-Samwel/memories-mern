import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material';
import styles from '../../styles';
const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    !posts.length ? <CircularProgress />: (
      <Grid xs={styles.container} container alignItems="stretch" spacing={3}>
    {
      posts.map((post)=>(
        <Grid key={post.id} item xs={12} sm={6}>
          <Post post={post}/>
        </Grid>
     ))
    }
      </Grid>)
  );
}

export default Posts;