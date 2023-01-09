import {Footer} from "../Ui/Footer/Footer";
import {Container} from "../components/Container/Container";
import s from "./Card_2.module.css"

export function Card_2() {

    return (
        <>
            <Container>
                <header>
                    <div className={`${s.container}`}>
                        <div>BRAND IMAGES</div>
                        <ol className={s.wrapper_round}>
                            <li className={s.round}>1</li>
                            <div className={s.line}></div>
                            <li className={s.round}>2</li>
                            <div className={s.line}></div>
                            <li className={s.round}>3</li>
                        </ol>


                    </div>
                </header>
                <main>
                    <h2 className={s.headerLine}>Заказ на доставку</h2>

                    <div>
                        <div className={s.aside}>
                            <ul className={s.heading}>Состав заказа
                                <li>
                                    <div className={s.food}>
                                        <p className={s.title}>Coca-Cola</p>
                                        <p className={s.price}>3 × 75 ₽</p>
                                    </div>
                                    <span className={s.massProduct}>0,5 л</span>
                                </li>
                                <li>
                                    <div className={s.food}>
                                        <p className={s.title}>Рулетики с ананасами + <br/>Рулетики с брусникой, 16 шт
                                        </p>
                                        <p className={s.price}>195 ₽</p>
                                    </div>
                                    <span className={s.massProduct}>16 шт</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </main>
                <Footer/>
            </Container>

        </>
    )
}