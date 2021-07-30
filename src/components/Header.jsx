import React from 'react' // import ALWAYS react //
import image from '../utils/images/footer.PNG'
import {Link} from 'react-router-dom' //Declaration//

const Header = () => {
    return (
            <div className="headerMenu">
                <nav id="menu">
                    <ul>
                    <Link to='/'>
                        <img src={image} alt="Cargando..."/>
                        </Link>
                    </ul>
                    </nav>
                    </div>
    )
}
 export default Header