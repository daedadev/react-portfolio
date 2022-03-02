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
        <div>
          <p className="text-p">{title}</p>
        </div>
      </button>
    </>
  );
}

export default Project;
