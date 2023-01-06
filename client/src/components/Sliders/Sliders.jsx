import s from "./Sliders.module.css";
import { Container } from ".//..//Container/Container";

export function Sliders() {
	return (
		<div className={s.sliders}>
			<Container>
				<div className={s.carusel}>
					<img
						src={require("../images/slider/slide-central.webp")}
						className={s.sliders__main}
						alt="slide-central.webp"
					/>
					<img
						src={require("../images/slider/slide-central.webp")}
						className={s.sliders__main}
						alt="slide-central.webp"
					/>
					<img
						src={require("../images/slider/slide-central.webp")}
						className={s.sliders__main}
						alt="slide-central.webp"
					/>
				</div>
			</Container>
		</div>
	);
}
