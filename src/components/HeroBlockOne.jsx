import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "./TwoSidedLayoutOne";
import { Link } from "react-router-dom";

export default function HeroLeft() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" sx={{ fontSize: "lg", fontWeight: "lg" }}>
        Modernized Legacy.
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: "xl",
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        Anytime, Anywhere, Anybody, and in Any Condition
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: "lg", lineHeight: "lg" }}
      >
        Get a cash offer on your home, no obligations or fees. Sell your home
        with no strings attached and in any condition, you do not even have to
        clean up. From start to finish, we do all the work. It has never been
        easier.
      </Typography>
      <Link to={"/Application"}>
        <Button size="lg" endDecorator={<ArrowForward sx={{ font: "xl" }} />}>
          Get Started
        </Button>
      </Link>
      <Typography>
        Not sure yet? <a href="#Scenarios">See Common Scenarios</a>
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Typography>
    </TwoSidedLayout>
  );
}
