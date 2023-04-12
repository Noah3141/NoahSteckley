import { Link } from "react-router-dom";
import Title from "../inc/Title";

function OtherArts() {
  return (
    <div className="container pb-5">
      <Title title="Other Topics" />
      <div className="card mt-4 shadow bg-info text-light border border-dark border-2">
        <div className="card-body">
          <h4>
            <Link to="">
              Voluptatibus, doloremque repellendus facilis magni
            </Link>
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium ratione dolorum possimus accusamus, aliquam eius fugiat
            molestiae quaerat at similique vitae doloribus repellendus
            cupiditate est, consequuntur maxime pariatur amet corrupti?
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtherArts;
