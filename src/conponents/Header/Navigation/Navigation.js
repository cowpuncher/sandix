import React from 'react';
import Link from '../../General/Link'

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
      </div>
    );
  }

export default Navigation;