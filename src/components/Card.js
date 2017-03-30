import React from 'react';
import './Card.css';
import Logo from './Logo';

class Card extends React.Component {
  constructor(props) {
    super(props);

		this.logoAnimation = this.logoAnimation.bind(this);

		this.docElm = document.documentElement;
		this.clientWidth = this.docElm.clientWidth;
		this.clientHeight = this.docElm.clientHeight;

		this.docElm.addEventListener('mousemove', (e) => {
			this.directionalHover(e);
		});
  }

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		this.logoLetters = this.card.getElementsByTagName('path');
		console.log("logo letters ==> ", this.logoLetters);
		this.fillValue = 0;
    this.scaleValue = 0;
		this.animId = requestAnimationFrame(this.logoAnimation);
	}

	directionalHover(event) {
		const pos = {
			x: event.pageX,
			y: event.pageY
		};

		const rotX = (this.clientHeight / 2 - pos.y) / 10;
	  const rotY = -(this.clientWidth / 2 - pos.x) / 20;

		this.card.style.cssText = `transform: rotateX(${rotX}deg) rotateY(${rotY}deg) translate(-50%, -50%)`;
	}

	logoAnimation() {
    this.fillValue += 0.01;
    this.card.querySelector('svg').style.fill = `rgba(255, 255, 255, ${this.fillValue})`;

    if (this.scaleValue < 1.2) {
      this.scaleValue += 0.02;
      this.card.querySelector('svg').style.transform = `scale(${this.scaleValue})`;
    }

    if (this.fillValue === 1) {
      cancelAnimationFrame(this.animId);
    }

		this.animId = requestAnimationFrame(this.logoAnimation);
	}

  render() {
    return (
			<div className="center" id="card" ref={(ref) => { this.card = ref; }}>
				<Logo />
			</div>
		);
  }

}

export default Card;
