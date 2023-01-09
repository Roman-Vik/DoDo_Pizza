import {Footer} from "../Ui/Footer/Footer";
import {Container} from "../components/Container/Container";
import s from "./Card_2.module.css"
export function Card_2 (){
    return(
        <>
            <header>
                <Container className={s.wrapper}>
                    <div >BRAND IMAGES</div>
                    <div className={s.status}>
                        <div className={s.round}>1</div>
                        <div className={s.round}>2</div>
                        <div className={s.round}>3</div>
                    </div>
                </Container>
            </header>
            <main>
            </main>
            <Footer/>
        </>
    )
}