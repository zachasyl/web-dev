import {Link} from "react-router-dom";

const Navigation = () => {
    return(
        <>
           <Link to = "/hello">Goodbye</Link> |
           <Link to = "/goodbye">Hello</Link> |

        </>
    )

};
export default Navigation;