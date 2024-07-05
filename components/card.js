/* eslint-disable @next/next/no-img-element */

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
            <span>github</span>
          </a>

          <a href={live}>
            <span>Live link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
