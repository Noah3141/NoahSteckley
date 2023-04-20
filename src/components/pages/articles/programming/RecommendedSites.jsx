import Title from "../../../inc/Title";
import Background from "../../../inc/Background";
import { Link } from "react-router-dom";

function RecommendedSites() {
    return (
        <div className="container-fluid">
            <div className="container text-light">
                <Title
                    title="Recommended Online Tools for Full Stack Web Development"
                    className="text-danger"
                />
                <Background className="bg-dark" />

                <h3>
                    <Link to="https://vectr.com/">Vectr Graphic Design Editor</Link>
                </h3>
                <p>
                    Vectr is one of many online graphic desing editors. I used it to make the icons
                    on all my sites. This is my graphic design tool, there are many like it, but
                    this one I happen to use, and have had a good time with. Reloading a project may
                    jumble the layers a bit, which can be quite the pain for a project with tons of
                    objects that need to cover one another in a particular order, but that can be
                    mitigated by keeping on top of grouping and naming objects. It does have some
                    very nice tools though, like a standard vector-pen tool (which some sites lack),
                    and co-adjusting edge roundness on all points of a vector shape, which is
                    especially useful for creating bubble-icons.
                </p>
            </div>
        </div>
    );
}

export default RecommendedSites;
