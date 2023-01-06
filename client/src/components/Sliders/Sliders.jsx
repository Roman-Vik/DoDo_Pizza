import s from './Sliders.module.css'
import slide_central from "../../components/images/slider/slide-central.webp";

export function Sliders (){
    return (
        <section className={s.sliders}>
            <div className="container">
                <div>
                   <img src={slide_central} className={s.sliders__main} alt="slide-central.webp"/>
                </div>
            </div>
        </section>
    )
}