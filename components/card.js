/* eslint-disable @next/next/no-img-element */

import { GitHub, Link } from "react-feather";

const Card = ({ src, projectText, github, live }) => {
  return (
    <div>
      <img src={src} width={300} height={150} alt="site snapshot" />
      <div>
        <p>{projectText}</p>
      </div>
      <div>
        <div className="preview_icon">
          <a href={github}>
            <GitHub />
          </a>

          <a href={live}>
            <Link />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
