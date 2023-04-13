import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  currentSlideIndex = 0;
  intervalId: any;
  showNextImage() {
    this.currentSlideIndex++;
    const slides = document.querySelectorAll(".slide");
    if (this.currentSlideIndex >= slides.length) {
      this.currentSlideIndex = 0;
    }
    slides.forEach((slide, index) => {
      if (index === this.currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

showPrevImage() {
    this.currentSlideIndex--;
    const slides = document.querySelectorAll(".slide");
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
      if (index === this.currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
}
  startSlide() {
    this.intervalId = setInterval(() => {
      this.showNextImage();
    }, 1000);
  }
  stopSlide() {
    clearInterval(this.intervalId);
  }

}
