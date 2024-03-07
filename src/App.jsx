import ButtonGradient from "./assets/svg/ButtonGradient";
import Benfits from "./components/Benfits";
import Collaboration from "./components/Collaboration";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header />
				<Hero />
				<Benfits />
				<Collaboration />
			</div>
			<ButtonGradient />
		</>
	);
}

export default App;
