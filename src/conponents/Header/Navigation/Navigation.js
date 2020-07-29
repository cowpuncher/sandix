import React from 'react';
import Link from '../../General/Link'
import {Route} from 'react-router-dom';
import Footer from '../../Footer/Footer'

const Navigation = () => {
    return (
      <div className="Navigation">
        <ul>
            <li>
                <Link 
                    href='web sites'
                    linkName='web sites'
                />
            </li>
            <li>
                <Link 
                    href='apps'
                    linkName='apps'
                />
            </li>
            <li>
                <Link 
                    href='logos'
                    linkName='logos'
                />
            </li>
        </ul>
        <Route 
            path='/web_site'
            component={Footer}
          />
          <Route 
            path='/apps'
            component={Footer}
          />
          <Route 
            path='/logo'
            component={Footer}
          />
      </div>
    );
  }

export default Navigation;