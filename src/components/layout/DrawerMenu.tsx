import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const HEADER_HEIGHT = 64;

export default function DrawerMenu({ isMobile }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile || isSmallScreen) {
    return null;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          top: `${HEADER_HEIGHT}px`,
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/students">
            <ListItemText primary="סטודנטים" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/courses">
            <ListItemText primary="קורסים" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/degree-reqs">
            <ListItemText primary="דרישות תואר" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/admins">
            <ListItemText primary="מנהלים" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
