import PeriodicTable from './components/PeriodicTable';
import './App.css';
import './style.css';

const App = () => {
    return (
        <>
            <header>
                <div className="container">
                    {/* <h1>The<br></br> Periodic<br></br> Table of<br></br> Elements</h1> */}
                    <h2 className="text-center py-4">The Periodic Table of Elements</h2>
                </div>
            </header>
            <main>
                <div className="container py-4">
                    <PeriodicTable />
                </div>
            </main>
            <footer className="py-3 text-center">
                Made with React and CSS Grid
            </footer>
        </>
    )
}

export default App;
