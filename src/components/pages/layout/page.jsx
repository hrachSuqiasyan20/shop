import {Link} from "react-router-dom";

function Lay(){
     return(
         <header>
             <div className="logo">
                 <a href="#">SHop</a>
             </div>
             <ul>
                 <li>
                     <a href="#">Home</a>
                 </li>

                 <li>
                     <a href="#">About</a>
                 </li>

                 <li>
                     <a href="#">Contact</a>
                 </li>
             </ul>
         </header>

     )
}

export default Lay