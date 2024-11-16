import { social } from '../data';

const Social = () => {
  return (
    <div className="social-container">
      {social.map((link) => {
        return (
          <div className="social-icon" key={link.id}>
            <a href={link.link}>
              <link.icon />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
