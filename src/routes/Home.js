import {Link, Routes, Route} from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import MovieList from '../movieList';

const Home = () => {
    return <div>
                <div>
                    <Link to='/helloWorld'>
                        <button>Home</button>
                    </Link>

                    <Link to='/movieList'>
                        <button>Hello</button>
                    </Link>
                </div>

{/*                     <Routes>
                        <Route path="/helloWorld" element={<HelloWorld />}></Route>
                        <Route path="/movieList" element={<MovieList />}></Route>
                    </Routes>
 */}            
            </div>
    
    ;

}
export default Home;