import s from "./Main.module.css"
import { Ul } from "../../components/Ul/Ul"
import { Button } from "../../components/Button/Button"
import { Sliders } from "../../components/Sliders/Sliders";
import { Card } from "../../components/Card/Card";
import { Pizza } from "../../components/Pizza/Pizza";

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