import s from "./Main.module.css"
import { Ul } from "./Ul/Ul"
import { Button } from "./Button/Button"
import { Sliders } from "../Sliders/Sliders";
import { Card } from "../Card/Card";
import { Pizza } from "../Pizza/Pizza";

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
    <section className={s.range}>
        <div className={s.container}>
            <Sliders/>
            <Pizza></Pizza>
         <div className={s.cards__items}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
         </div>
        </div>
    </section>
        </main>
    )
}