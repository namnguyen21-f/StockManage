import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/index';
import Stock from './pages/Stock/index';
import Login from './pages/Login/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
// iCON
import HomeIcon from '@material-ui/icons/Home';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Fragment } from 'react';
//Set color for icon
const iconcolor = "#999999";

const data = [
  {
      title: "General",
      data : [
          {
              title: "Home",
              icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
              path: "/"
          },
          {
              title: "Stock",
              icon : <YoutubeSearchedForIcon style={{color: iconcolor}}></YoutubeSearchedForIcon>,
              path: "/stock"
          }
      ]
  },
  {
      title: "Personal",
      data : [
          {
              title: "Library",
              icon : <VideoLibraryIcon style={{color: iconcolor}}></VideoLibraryIcon>,
              path: "/popular"
          },
          {
              title: "Watched Video",
              icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
              path: "/popurlar"
          },
          {
              title: "Manage Video",
              icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
              path: "/popurlar",
              sub: [
                  {
                      title: "Upload",
                      icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
                       path: "LOL"
                  },
                  {
                      title: "Seen",
                      icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
                      path: "LOL"
                  }
              ]
          },
          {
              title: "Liked Video",
              icon : <HomeIcon style={{color: iconcolor}}></HomeIcon>,
              path: "LOL"
          }
      ]
  }
]

const NavigationWrapper = (props) =>{
  return (
    <Fragment>
      <div className="navSection">
        <NavigationBar isVertical={true} data={data}></NavigationBar>
      </div>
      <div className="MainSection">
        {props.children}
      </div>
    </Fragment>
  )
} 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavigationWrapper>
              <Home></Home>   
            </NavigationWrapper>
          </Route>
          <Route path="/stock">
            <NavigationWrapper>
              <Stock></Stock>  
            </NavigationWrapper>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        
        
      </div>
    </Router>
    
  );
}

export default App;
