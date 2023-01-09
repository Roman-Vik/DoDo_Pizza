import s from "./Main.module.css"
import { Ul } from "../../components/Ul/Ul"
import { Button } from "../../components/Button/Button"
import { Sliders } from "../../components/Sliders/Sliders";
import { Card } from "../../components/Card/Card";
import { NameProduct } from "../../components/NameProduct/NameProduct";
import { Container } from "../../components/Container/Container";
import { New } from "..//../components/New/New";

export function Main() {
	return (
		<main>
			<section>
				<Container>
					<div className={s.menu}>
						<Ul></Ul>
						<Button></Button>
					</div>
				</Container>
			</section>
			<section className={s.range}>
				<Sliders />
				<Container>
					<New />
					<NameProduct></NameProduct>
					<div className={s.cards__items}>
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
						<Card></Card>
					</div>
				</Container>
			</section>
		</main>
	);
}
