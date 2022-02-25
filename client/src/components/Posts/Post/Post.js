import * as React from 'react';
import styles from './styles';
import moment from 'moment';
import { ThumbUp, AccessAlarm, ThreeDRotation, MoreHoriz } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ThumbUpIcon } from '@mui/material';

const Post = ({ post }) => {
  console.log(post);
  const classes = styles()
  return (
    <Card sx={classes.card}>

      <CardMedia
        sx={classes.media}
        // component="img"
        height="140"
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        alt="green iguana"
        title={post.title}
      />
      <div sx={classes.overlay}>
        <Typography variant="h6"> {post.creator} </Typography>
        <Typography variant="body2"> {moment(post.created).fromNow()} </Typography>
      </div>
      <div sx={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.creator}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
        <Typography sx={classes.title} variant="h5" gutterBottom >
          {post.message}
        </Typography>
        <div sx={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => { }}>
          <ThumbUp fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => { }}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;