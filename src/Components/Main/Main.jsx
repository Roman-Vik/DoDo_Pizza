import s from "./Main.module.css"
import { Ul } from "./Ul/Ul"
import { Button } from "./Button/Button"

export function Main() {
    return (
        <main>
    <section>
        <div className="container">
            <div className={s.menu}>
                <Ul></Ul>
                <Button></Button>
            </div>
        </div>
    </section>
        </main>
    )
}