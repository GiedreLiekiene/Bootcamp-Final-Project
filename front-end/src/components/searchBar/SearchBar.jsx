import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./searchBar.css"

const SearchBar = () => {
  return (
    <>
      <div className="navbar">
        <div className='container'> 
            <h2 className='navbar-brand'>Animated search</h2>
            <form className=''> 
                <input type="text" className="border" placeholder='Search...'/>
            </form>
        </div>       
      </div>
    </>
  );
};

export default SearchBar;
