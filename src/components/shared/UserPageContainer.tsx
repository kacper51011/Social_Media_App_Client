import { Grid, SpeedDial, useMediaQuery, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import useScrollToTop from "../../hooks/useScrollToTop";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router";

type Props = {
  profileColumn: ReactNode;
  postsColumn: ReactNode;
  followsColumn: ReactNode;
};

const UserPageContainer = ({
  profileColumn,
  postsColumn,
  followsColumn,
}: Props) => {
  const displayedColumn = useAppSelector((state) => state.column);

  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, scrollToTop] = useScrollToTop();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        spacing={7}
        minHeight="100vh"
        justifyContent="center"
        container
        direction="row"
      >
        {/* profile column */}
        <Grid
          item
          display={{
            xs: displayedColumn === "profile" ? "block" : "none",
            md: "block",
          }}
          xs={12}
          md={3.5}
          mt={{ xs: 5, md: 12.5 }}
        >
          {profileColumn}
        </Grid>
        {/* posts column */}
        <Grid
          item
          display={{
            xs: displayedColumn === "posts" ? "block" : "none",
            md: "block",
          }}
          xs={12}
          md={5}
          mt={{ xs: 5, md: 12.5 }}
        >
          {postsColumn}
        </Grid>
        {/* follows column */}
        <Grid
          item
          display={{
            xs: displayedColumn === "follows" ? "block" : "none",
            md: "block",
          }}
          xs={10}
          md={3.5}
          mt={{ xs: 5, md: 12.5 }}
        >
          {followsColumn}
        </Grid>
      </Grid>
      {visible && isDesktop && (
        <SpeedDial
          sx={{ position: "fixed", bottom: 40, right: 40 }}
          ariaLabel="Scroll to top"
          icon={<ArrowUpwardIcon />}
          onClick={scrollToTop}
        />
      )}
      {id && isDesktop && (
        <SpeedDial
          sx={{ position: "fixed", bottom: 40, right: 120 }}
          ariaLabel="Main page"
          icon={<HomeIcon />}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setTimeout(() => navigate("/"), 500);
          }}
        />
      )}
    </>
  );
};

export default UserPageContainer;
