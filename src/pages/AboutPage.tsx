import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque
        velit? Repellat, animi molestiae vitae molestias in totam libero
        corrupti.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
