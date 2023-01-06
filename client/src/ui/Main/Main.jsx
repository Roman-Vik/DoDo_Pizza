import s from "./Main.module.css";
import { Ul } from "..//..//components/Ul/Ul";
import { Button } from "../../components/Button/Button";
import { Sliders } from "../../components/Sliders/Sliders";

export function Main() {
	return (
		<main>
			<section>
				<div className={s.container}>
					<div className={s.menu}>
						<Ul></Ul>
						<Button></Button>
					</div>
				</div>
			</section>
			<Sliders />
		</main>
	);
}
