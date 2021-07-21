const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
//Переменная для отслеживания активного слайда
let activeSlideIndex = 0;

//устанавливаем соответствующий левый слайд
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
	changeSlide('up');
});

downBtn.addEventListener('click', () => {
	console.log('downBtn: ', downBtn);
	changeSlide('down');
});

function changeSlide(direction) {
	if (direction === 'up') {
		//индекс активного слайда меняем  на +1
		activeSlideIndex++
		//номер активного слайда равен  slidesCount (количество слайдев+1)
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			
			activeSlideIndex = slidesCount - 1;
		
			
		}
	}
	//получаем высоту контейнера = высота экрана
	const height = container.clientHeight;
	console.log('height: ', height);

	//добавляем стили

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}