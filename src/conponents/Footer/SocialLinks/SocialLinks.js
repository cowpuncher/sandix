import React from 'react';
import Link from '../../General/Link';

const SocialLinks = () => {
    return(
        <ul>
            <li className="Social-link">
                <Link 
                    linkName="fb"
                />
            </li>
            <li>
                <Link 
                    linkName="inst"
                />
            </li>
            <li>
                <Link 
                    linkName="vk"
                />
            </li>
        </ul>
    )
}

export default SocialLinks;