import React from 'react'
import Sidebar from './Dashboard_components/Sidebar'
import '../Assets/CSS/NavBar.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import StoreIcon from '@material-ui/icons/Store';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Dashboard_components/Home';
import Orders from './Orders/Orders';
import Shopify from './Integrations/Shopify/Shopify';
import Top_bar from './Dashboard_components/Top_bar';
const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor:'white',

    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
   borderRightColor:'transparent'
  },
  content: {
    flexGrow:1,
    paddingTop:'100px',
    padding: theme.spacing(3),
    backgroundColor:'rgb(248,249,253)',
    minHeight:'100vh'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    height:'63px',
    borderLeftColor:'transparent'
  },
}));
function Dashboard(props) {
    const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isMobile, setisMobile] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.drawerHeader}>
      <Typography variant="h6" style={{color:'#333'}}>
            Logistio
          </Typography>
        </div>
        <div hidden={!isMobile}>
        <Top_bar isMobile={isMobile}/>
        </div>
      {isMobile && <Divider/>}
  
      <List style={{marginTop:'20px',padding:'15px',color:'#303030'}}>
        {[{name:'Dashboard',icon:<DashboardIcon fontSize='small'/>,path:'/home'}, {name:'Orders',icon:<ShoppingCartIcon fontSize='small'/>,path:'/home/orders'}, {name:'Products',icon:<LocalOfferIcon fontSize='small' />,path:'/home/products'}, {name:'Integrations',icon:<AccountTreeIcon fontSize='small' />,path:'/home/integrations'},{name:'Stores',icon:<StoreIcon fontSize='small' />,path:'/home/stores'},{name:'Offers',icon:<AttachMoneyIcon fontSize='small' />,path:'/home/offers'}].map((object) => (
          <Link to={object.path} className='dash_links'><ListItem button key={object.name}>
            <ListItemIcon>{object.icon}</ListItemIcon>
            <ListItemText style={{fontSize:'0rem !important'}} primary={object.name} />
          </ListItem>
          </Link>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setisMobile(true)
    }
   
  }, [])

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
              <div  style={{display:!isMobile ?'flex':'none',width:'100%'}}>
              <Top_bar isMobile={isMobile}/>
              </div>
          </Toolbar>
   
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
              {drawer}
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
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
        <div className={classes.toolbar} />
       <Switch>
           <Route exact path='/home' component={Home}/>
           <Route  path='/home/orders' component={Orders}/>
           <Route  path='/home/integrations' component={Shopify}/>
           {/* <Route exact path='/home' component={}/> */}
       </Switch>
      </main>

      </div>
    );
  }

export default Dashboard
