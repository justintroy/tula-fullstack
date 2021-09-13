import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    margin: "30px 10px",
    boxShadow: "none",
  },
  heading: {
    fontFamily: "Playfair Display"
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }

}));
