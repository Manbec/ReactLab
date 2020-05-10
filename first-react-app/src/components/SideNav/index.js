import React, {forwardRef, useMemo} from "react";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import LinkIcon from "@material-ui/icons/Link";
import InfoIcon from "@material-ui/icons/Info";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const SideNav = () => {

  function LinkData(title, path) {
    this.title = title;
    this.to = path;
  }

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const appLinks = [
    new LinkData('HOC', 'HOC'),
    new LinkData('Compound Components', 'compound')];
  const infoLinks = [new LinkData('About', 'about')];

  const theme = useTheme();

  const container = window !== undefined ? () => window.document.body : undefined;

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    let renderLink;
    renderLink = useMemo(
      () => forwardRef((itemProps, ref) => {
        return <Link to={to} ref={ref} {...itemProps} />
      }),
      [to],
    );

    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navDrawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {appLinks.map((link, index) => (
          <ListItemLink key={link.title} to={link.to} primary={link.title} icon={<LinkIcon/>} />
        ))}
      </List>
      <Divider />
      <List>
        {infoLinks.map((link) => (
          <ListItemLink key={link.title} to={link.to} primary={link.title} icon={<InfoIcon/>} />
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <nav className={classes.drawer} aria-label="navigation">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {navDrawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {navDrawer}
          </Drawer>
        </Hidden>
      </nav>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}

export default SideNav;