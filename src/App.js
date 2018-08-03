import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'

import logo from './static/Royal-Beauty-Parlor-Logo.png'
import facebookF from './static/fb_48.png'
import HarmonyKids from './static/Harmony Kids Childcare & Academy.png'
import RamahChurch from './static/Ramah  Church.png'
import R4C from './static/R4C.png'
// import morganspomadeLogo from './static/morgans-pomade.png'


import Home from './routes/Home'
import Aktuelles from './routes/Aktuelles'
import Philosophie from './routes/Philosophie'
import Onlinebuchung from './routes/Onlinebuchung'
import Anfahrt from './routes/Anfahrt'
import Preise from './routes/Preise'
import Video from './routes/Video'
import Impressum from './routes/Impressum'

import TeamStart from './routes/team/Start'
import TeamMember from './routes/team/Member'
import Barisuka from './static/Barisuka.jpg'
import marina from './static/marina.jpg'
import asha from './static/asha.jpg'
import Eddie from './static//Eddie.jpg'
import Jestina from './static/Jestina.jpg'


import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    
    this.state = { 
        in: false,
        member: [
            {
                name: 'Barisuka',
                image: Barisuka,
                text: 'Manager of Royal Beauty Parlor Salon, I bring you all my dedication and experience to our valued clientèle. I am highly trained, having attended training courses in top international cities. As Manager, my credentials include gaving the best salon care, in addition to being a most valuable team player. I am not only dedicated to our Salon Royal Beauty Parlor, but to my highly rated clientèle!.'
            },
            {
                name: 'Ms.Asha',
                image: asha,
                text: 'I absolutely LOVE working at Royal Beauty Parlor Salon. I have been a stylist for over 10 years. My career allows me to be creative and expand my abilities. I am always looking forward to my transfomations. Working in Arizona is amazing looking to continue my education and I never want to stop learning!.'
            },
            {
                name: 'Marina',
                image: marina,
                text: 'I decided to follow my passion for hair. I’ve expanded my education by taking classes and being the best in what I do. Working with the Royal Beauty Parlor Salon team is one of the best thing that ever happen to me.'
            },
            {
                name: 'Eddie',
                image: Eddie,
                text: 'A creative, engaging, full stack developer with a passion for front-end development and UI Design. Specializes in customer satisfaction through teamwork and maintains a commitment to exceed expectations. Actively pursuing opportunities to provide programming skills, leadership ability, and enthusiasm to a fast-paced environment as a fullstack developer.',
                hint: 'Full Stack Web Developer'
            },
            {
                name: 'Charly',
                image: Jestina,
                text: 'TLove what I do with over 6 years experience. I enjoy education and I never want to stop learning. I have a passion for short and long hair.'
            }
        ]
    }
  }

  render() {
    const PUBLIC_URL = process.env.PUBLIC_URL
    const Content = withRouter(({ location }) => (
      <TransitionGroup className="animation-wrapper">
        <CSSTransition key={location.key} classNames="fade" timeout={{enter: 1000, exit: 500}} >
          {(state)=> {
            return (
          <Switch location={location}>                        
            <Route exact path={`${PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${PUBLIC_URL}/aktuelles`}  component={Aktuelles} />
            <Route exact path={`${PUBLIC_URL}/philosophie`}  component={Philosophie} />
            <Route exact path={`${PUBLIC_URL}/online-buchung`}  component={Onlinebuchung} />
            <Route exact path={`${PUBLIC_URL}/anfahrt`}  component={Anfahrt} />
            <Route exact path={`${PUBLIC_URL}/team`}  children={(props) => (<TeamStart {... props}  members={this.state.member}/>)} />
            <Route path={`${PUBLIC_URL}/team/:member`}   children={(props) => (<TeamMember {... props}  members={this.state.member}/>)}></Route>
            <Route exact path={`${PUBLIC_URL}/preise`}  component={Preise} />
            <Route exact path={`${PUBLIC_URL}/video`}  component={Video} />
            <Route exact path={`${PUBLIC_URL}/impressum`}  component={Impressum} />
          </Switch>
          )}}
        </CSSTransition>
      </TransitionGroup>
    ))

    return (
      <div align="center">
      <Router>
        <div className="boxshadow">
        <table width="1024" cellSpacing="0" rules="none" border="0">
        <tbody>
          <tr>
            <td className="lo" width="68" height="200"></td>
            <td className="xn" width="210" height="200">
                  <div align="center">
                      <div className="infoshadow">
                          <p className="info">
                                Royal Beauty Parlor<br/>
                              8626 West Kingman Street 85353&uuml;ck<br/>
                              <br/>
                              Tel.: 602 419 0457
                          </p>
                      </div>
                  </div>
            </td>
            <td className="ro" valign="top" colSpan="2">
                  <div className="tbody" align="center">
                      <img src={logo} alt="Logo" border="0" style={{padding: 20}}/>
                  </div>
            </td>
          </tr>
          <tr>
            <td className="x" width="68">
            </td>
            <td className="xn" width="210" valign="top">
              <div className="lhead" align="left">
                
                <Link id="btHome" to={`${PUBLIC_URL}/`}>Home</Link><br/><br/>
                <Link id="btAktuelles" to={`${PUBLIC_URL}/aktuelles`}>Facebook Page</Link><br/><br/>
                <Link id="btPhilosophie" to={`${PUBLIC_URL}/philosophie`}>Our History</Link><br/><br/>
                <Link id="btTerminplaner" to={`${PUBLIC_URL}/online-buchung`}>Set Up Appointment</Link><br/><br/>
                <Link id="btAnfahrt" to={`${PUBLIC_URL}/anfahrt`}>Location</Link><br/><br/>
                <Link id="btTeam" to={`${PUBLIC_URL}/team`}>Team</Link><br/><br/>
                <Link id="btPrices" to={`${PUBLIC_URL}/preise`}>Service</Link><br/><br/>
                <Link id="btPhotos" to={`${PUBLIC_URL}/video`}>Video</Link><br/><br/>
                <Link id="btImpressum" to={`${PUBLIC_URL}/impressum`}>Some Hair Styles</Link><br/><br/>
                
                <a href="https://www.facebook.com/Royal-Beauty-Parlor-2200045870215097/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank"><img src={facebookF} alt="Facebook" style={{float: 'left'}} border="0"/>Fallow Us</a>
              </div>

              <div align="center">
                <a href="https://www.harmonykidsa.com/" rel="noopener noreferrer" target="_blank" title="www.harmonykidsa.com"><div className="innershadow">
                  <img src={HarmonyKids} width="170" alt="Der faire Salon" border="0" /></div></a>
  							<a href="http://ramahfullgospelchurchphoenix.com/" rel="noopener noreferrer" target="_blank" title="Ramah Full Gospel Church"><div className="innershadow">
                  <img src={RamahChurch} width="150" alt="pomadeshop_logo" border="0" style={{padding: 10}}/></div></a>
							  <a href="https://www.r4cnation.com/" rel="noopener noreferrer" target="_blank" title="R4C Nation"><div className="innershadow">
                  <img src={R4C} width="170" alt="schwarzkopf" border="0"/></div></a>
							  {/* <a href="https://morganspomade.de/" rel="noopener noreferrer" target="_blank" title="Morgans Pomade"><div className="innershadow">
                  <img src={morganspomadeLogo} width="150px" alt="morgans"  style={{padding: 10}} border="0"/></div></a> */}
							  <br/>
						  </div>
            </td>
            <td className="mr" valign="top" colSpan="2">
                  <div className="tbody" >
                    <Content/>
                  </div>
            </td>
            
          </tr>
          <tr>
            <td className="lu" width="68" height="178"></td>
            <td className="xn" width="210" valign="bottom">

            </td>
            <td className="ru">
              <table width="680" cellSpacing="0" rules="none" border="0">
              <tbody>
                <tr>
                  <td colSpan="4"><hr/>
                    <u>Service Hours:</u>
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <p align="left">
                      Monday:<br/>
                      Tusday:<br/>
                      Wednesday:<br/>
                      Thursday:<br/>
                      Friday:<br/>
                      Saturday:
                    </p>
                  </td>
                  <td align="left">
                    <p align="left">
                      Times Available<br/>
                      8:00am - 7:00 pm<br/>
                      8:00am - 7:00 pm<br/>
                      8:00am - 7:00 pm<br/>
                      8:00am - 7:00 pm<br/>
                      8:00am - 7:00 pm<br/>
                      8:00am - 7:00 pm
                    </p>
                  </td>
                </tr>
              </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        </table>            
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
