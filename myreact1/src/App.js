import './App.css';
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Content from './components/Content'

function App() {
  return (
	<div>
		<Header/>
		<div className="container">
		<LeftNav/>
		<Content/>
		</div>
	</div>
	
  );
}

export default App;
