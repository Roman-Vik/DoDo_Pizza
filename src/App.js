import { Main } from "./Components/Main/Main"
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<>
			<Container>
				<Header />
        <Main></Main>
			</Container>
		</>
	);
}

export default App;
