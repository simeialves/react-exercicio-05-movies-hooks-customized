import "./App.css";
import "./styles.css";
import { Header } from "./components/Header";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";

function App() {
	return (
		<>
			<Header />
			<ApplicationRoutes />
		</>
	);
}

export default App;
