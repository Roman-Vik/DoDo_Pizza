import s from "./Main.module.css"
import { Ul } from "./Ul/Ul"
import { Button } from "./Button/Button"
import {Sliders} from "../Sliders/Sliders";

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
            <Sliders/>
        </main>
    )
}