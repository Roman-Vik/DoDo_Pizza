import style from "./Header.module.css";
export function Header() {
	return (
		<>
			<div className={style.header}>
				<div className={style.itemsLogo}>
					<div className={style.box}>
						<img className={style.img} src="" alt="dodo" />
					</div>
					<div className={style.boxSecond}>
						<div className={style.logoHeaderBox}>
							<img className={style.img} src="" alt="dodo" />
						</div>
						<div className={style.logoTagline}>
							<img className={style.img} src="" alt="dodo" />
						</div>
					</div>
				</div>
				<div className={style.itemsCnt}>
					<p class={style.tel}>8 800 302-00-60</p>
					<p class={style.text}>Звонок бесплатный</p>
				</div>
			</div>
		</>
	);
}
