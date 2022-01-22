import {
  Download,
  GitHub,
  LinkedIn,
  Shuffle,
  ShuffleOn,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { BackgroundCanvas } from "../components/BackgroundCanvas";
import randomColor from "../randomColor";
import { useStore } from "../store";

export const Home = () => {
  const background = useStore((state) => state.background);
  return (
    <Stack
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: "100vh",
        paddingBottom: "0px",
        backgroundColor: background,
      }}
    >
      <MainView />

      {/* <Stack alignItems="center" direction="column" spacing={2}>
        <Typography textAlign="center" variant="h2">
          ross hunter
        </Typography>
        <Button
          download
          href="/files/cv.pdf"
          variant="outlined"
          startIcon={<Download />}
        >
          <Typography variant="h6">cv</Typography>
        </Button>
      </Stack> */}

      <Stack
        sx={{ width: "100%" }}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <Box />
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            target="_blank"
            href="https://github.com/rossxhunter"
          >
            <GitHub />
          </IconButton>
          <IconButton
            size="small"
            target="_blank"
            href="https://www.linkedin.com/in/rossxhunter/"
          >
            <LinkedIn />
          </IconButton>
        </Stack>
        <ShuffleButton />
      </Stack>
    </Stack>
  );
};

const ShuffleButton = () => {
  const changeBackground = useStore((state) => state.changeBackground);
  const changeCube = useStore((state) => state.changeCube);
  const changeCubeCount = useStore((state) => state.changeCubeCount);
  function shuffleClicked() {
    let color = randomColor();
    let color2 = randomColor({ luminosity: "bright" });
    changeBackground(color);
    changeCube(color2);
    changeCubeCount(Math.floor(Math.random() * 5) + 1);
  }
  return (
    <IconButton onClick={shuffleClicked} size="large">
      <ShuffleOn fontSize="80px" />
    </IconButton>
  );
};

const MainView = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
        position: "relative",
      }}
    >
      <div
        id="textA"
        style={{
          backgroundColor: "#33333300",
          //   backdropFilter: "blur(2px)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "10",
        }}
      />
      <BackgroundCanvas />

      <div
        id="textA"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "100",
        }}
      >
        <Typography variant="h1">ROSS HUNTER</Typography>
        <Typography variant="h4">
          Full-Stack Software Engineer, LDN/Remote
        </Typography>
        <br />
        <Button
          download
          href="/files/cv.pdf"
          variant="contained"
          endIcon={<Download />}
        >
          CV
        </Button>
      </div>
    </div>
  );
};
