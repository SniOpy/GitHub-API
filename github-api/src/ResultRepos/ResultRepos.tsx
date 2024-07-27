import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import "./ResultRepos.scss";
import { Link } from "@mui/material";
import Repo from '../@types/index';


interface ReposProps {
  repos: Repo[];
}

export default function ResultRepos({ repos } : ReposProps) {
  return (
    <div className="resultRepos">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid container spacing={3} columns={12}>
          {repos.map((repo) => {
                return (
            <Grid item xs={4} key={repo.id}>
              
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={repo.owner.avatar_url}
                      alt={repo.full_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {repo.full_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {repo.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} color="primary" variant="contained" >
                       Voir sur Github
                      </Button>
                    </CardActions>
                  </Card>
                
            </Grid>
          );
        })}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
