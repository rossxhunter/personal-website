import { Download, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export const Home = () => {
  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "99vh", paddingBottom: "0px" }}
    >
      <Box />
      <Stack alignItems="center" direction="column" spacing={2}>
        <Typography variant="h2">ross hunter</Typography>
        <Button
          download
          href="/files/cv.pdf"
          variant="outlined"
          startIcon={<Download />}
        >
          <Typography variant="h6">cv</Typography>
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton target="_blank" href="https://github.com/rossxhunter">
          <GitHub />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/rossxhunter/"
        >
          <LinkedIn />
        </IconButton>
      </Stack>
    </Stack>
  );
};
