import style from "./Container.module.css";
export function Container({ children }) {
	return (
		<>
			<div className={style.container}>{children}</div>
		</>
	);
}
