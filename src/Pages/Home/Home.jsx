import Card from "../Card/Card"
import Sorting from "../Sorting/Sorting"

const Home = () => {
    return( 
        <div className="container max-w-7xl mx-auto">
            <Sorting/>
            <Card/>
        </div>
    )
}

export default Home