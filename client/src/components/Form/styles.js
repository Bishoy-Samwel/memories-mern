
const styles = (theme) => {

  return({
    // root: {
    //   '& .MuiTextField-root': {
    //     // margin: theme.spacing(1),
    //   },
    // },
    paper: {
      // padding: theme.spacing(2),
      p:3
    },
    form: {
      background: 'black',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '20px 0',
    },
    buttonSubmit: {
      mb: 2,
    },
  }
)} 


export default styles;