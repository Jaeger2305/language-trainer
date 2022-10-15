import {Button, ButtonGroup, Paper, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {useState} from "react";
import {TrainerItem} from "./types";
export default function Trainer(props: {
  currentTask: TrainerItem;
  onNext: () => void;
}) {
  console.log("rerender trine", props.currentTask);
  const [isSolved, setIsSolved] = useState(false);

  const onArticleSelect = (article: TrainerItem["article"]) => {
    if (article === props.currentTask.article) {
      setIsSolved(true);
      setTimeout(() => {
        setIsSolved(false);
        props.onNext();
      }, 2000);
    }
  };

  const articles: Array<TrainerItem["article"]> = ["der", "die", "das"];

  return (
    <Grid container spacing={4} sx={{height: "100%"}}>
      <Grid
        xs={3}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <ButtonGroup
          sx={{width: "80%"}}
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {articles.map((article) => (
            <Button key={article} onClick={() => onArticleSelect(article)}>
              {article}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
      {isSolved && (
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Paper sx={{width: "100%"}}>
            <TextField
              id="adjective"
              sx={{width: "100%"}}
              disabled
              variant="filled"
              value={props.currentTask.adjective}
            />
          </Paper>
        </Grid>
      )}
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Paper sx={{width: "100%"}}>
          <TextField
            id="noun"
            sx={{width: "100%"}}
            disabled
            variant="filled"
            value={props.currentTask.noun}
          />
        </Paper>
      </Grid>
      <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
        <Button sx={{width: "100%"}} variant="text" onClick={props.onNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
