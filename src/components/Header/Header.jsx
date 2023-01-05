import s from "./Header.module.css";
export function Header() {
	return (
		<>
			<div className={s.header}>
				<div className={s.itemsLogo}>
					<div className={s.box}>
						<img className={s.img} src="" alt="dodo" />
					</div>
					<div className={s.boxSecond}>
						<div className={s.logoHeaderBox}>
							<img className={s.img} src="" alt="dodo" />
						</div>
						<div className={s.logoTagline}>
							<img className={s.img} src="" alt="dodo" />
						</div>
					</div>
				</div>
				<div className={s.itemsCnt}>
					<p class={s.tel}>8 800 302-00-60</p>
					<p class={s.text}>Звонок бесплатный</p>
				</div>
			</div>
		</>
	);
}
