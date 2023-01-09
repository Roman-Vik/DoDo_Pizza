import s from "./Sliders.module.css";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/scrollbar";

export function Sliders() {
	return (
		<>
			<Swiper
				modules={[Scrollbar]}
				spaceBetween={30}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide>
					<img
						src={require("../images/slider/slide-left.png")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={require("../images/slider/slide-central.webp")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={require("../images/slider/right-promo.png")}
						className={s.card}
						alt="slide-central.webp"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
