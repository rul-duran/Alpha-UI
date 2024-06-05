import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import VisualizationImage from '@assets/images/visualization.svg';

const SignIn = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap={12}
      mt={15}
    >
      <Grid container xs={6} sm={4} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            Welcome back!
          </Typography>
        </Grid>
        <Grid item xs={12} gap={2}>
          <TextField label="Username" variant="outlined" fullWidth />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="large" fullWidth>
            LogIn
          </Button>
        </Grid>
      </Grid>
      {!isMobile && (
        <Grid container sm={4}>
          <img
            alt="Sign In"
            src={VisualizationImage}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      )}
    </Box>
  );
};

export default SignIn;
