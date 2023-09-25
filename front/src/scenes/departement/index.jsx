import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import { MonetizationOn } from "@mui/icons-material";
import LaptopIcon from "@mui/icons-material/Laptop";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export default function Departement() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <BlindsClosedIcon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              General Administration
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manages staff postings and transfers, defines staff duties and
              responsibilities, prepares administration reports and ensures
              proper communication between the departments and the Corporation
              Council.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/administration">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <Groups2Icon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Human Ressources
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Finds, hires (and fires), and trains employees. Oversees employee
              relations and manages benefit programs.
              <br />
              <br />
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <MonetizationOn sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Finance and Accounting
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Analyzing the financial records and figuring out ways to improve
              efficiency.
              <br />
              Accurate creation of all financial statements of a business.
              <br />
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <LaptopIcon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Information Technology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ensures that the organization's systems, networks, data and
              applications all connect and function properly. <br /> Deploys and
              maintains business applications, services and infrastructure
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <QueryStatsIcon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Marketing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The arm of a business that promotes the company's brand, products,
              and services.
              <br /> Strategizing, planning, executing, monitoring, optimizing,
              and reporting on all marketing activitie.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <RvHookupIcon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Logistics and Sypply Chain
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Planning, sourcing materials, labor and facilities management,
              producing and delivering those goods and services.
              <br />
              Efficient and cost-effective delivery of goods to the customer.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 300,
          margin: "17px",
          borderRadius: "15px",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <CardActionArea>
          <CurrencyExchangeIcon sx={{ fontSize: "130px" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sales
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A good sales team enables you to obtain qualified leads and
              clients who add value to your business. As a result, if the
              company has good sales, the overall growth of the company
              increases.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="secondary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
