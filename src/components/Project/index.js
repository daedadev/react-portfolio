import "./style.css";

function Project({
  liveApp,
  githubApp,
  title,
  image,
  classy,
  info,
  challenges,
  triumphs,
  dependancies,
  icons,
  video,
  openModal,
}) {
  return (
    <>
      <button
        style={{
          backgroundImage: image,
        }}
        className={classy}
        onClick={() =>
          openModal(
            liveApp,
            githubApp,
            title,
            image,
            info,
            challenges,
            triumphs,
            dependancies,
            video,
            openModal
          )
        }
      >
        <p className="text-p">{title}</p>
        <div className="icon-holder">
          {icons.map((icon, index) => {
            return (
              <img
                className="icon-item"
                key={index}
                alt={icon.alt}
                src={icon.src}
              ></img>
            );
          })}
        </div>
      </button>
    </>
  );
}

export default Project;
