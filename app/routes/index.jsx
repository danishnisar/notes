
import {Link} from '@remix-run/react';
import homeStyle from '~/styles/home.css';

export default function IndexPage()
{
  return (
      <main id="content">
        <h1>A better way of keeping track of your notes</h1>
        <p>Try our early beta and never loose track of your notes</p>
        <p id="cta">
          <Link to="/note">Try Now!</Link>
        </p>

      </main>
  );
}

export function links()
{
  return [{rel:'stylesheet',href:homeStyle}];
};