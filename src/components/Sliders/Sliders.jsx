import s from './Sliders.css'

export function Sliders (){
    return (
        <section className={s.sliders}>
            <div className="container">
                <div>
                   <img src={require("../images/slider/slide-central.webp")} className={s.sliders__main} alt="slide-central.webp"/>
                </div>
            </div>
        </section>
    )
}