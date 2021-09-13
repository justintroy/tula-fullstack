import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPoem, updatePoem } from "../../actions/poems";

const Form = ({ currentId, setCurrentId }) => {
  const [poemData, setPoemData] = useState({ title: "", body: "", tags: "" });
  const poem = useSelector((state) => currentId ? state.poems.find((p) => p._id === currentId) : null)
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(poem) setPoemData(poem) 
  }, [poem])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePoem(currentId, { ...poemData, name: user?.result?.name }));
    } else {
      dispatch(createPoem({ ...poemData, name: user?.result?.name }));
    }
    clear()
  };

  const clear = () => {
    setCurrentId(null)
    setPoemData({ title: "", body: "", tags: "" })
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          mangyaring mag-signin upang mag-sumite.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'baguhin' : 'sumulat'}</Typography>
        <TextField required={true} name="title" variant="outlined" label="pamagat" fullWidth value={poemData.title} onChange={(e) => setPoemData({ ...poemData, title: e.target.value })} />
        <TextField required={true} inputProps={{ pattern: "/\n{3,}" }} name="body" multiline={true} minRows={5} maxRows={20} variant="outlined" label="nilalaman" fullWidth value={poemData.body} onChange={(e) => setPoemData({ ...poemData, body: e.target.value })} />
        <TextField required={true} name="tags" variant="outlined" label="paksa" fullWidth value={poemData.tags} onChange={(e) => setPoemData({ ...poemData, tags: e.target.value.split(", ") })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" type="submit" fullWidth >
          i-sumite
        </Button>
      </form>
      <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" type="submit" onClick={clear} fullWidth>
        burahin
      </Button>
    </Paper>
  );
};

export default Form;
