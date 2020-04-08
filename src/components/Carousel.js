import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from 'gatsby-image'
import Slider from "react-slick"
import styled from 'styled-components'
import Lightbox from 'react-images'

const Content = styled.div`
    margin: 1px;
    opacity: 1;
      transition: opacity .25s ease-in-out;
      -moz-transition: opacity .25s ease-in-out;
      -webkit-transition: opacity .25s ease-in-out;
      cursor: pointer;
`
const Wrapper = styled.div`
    margin: 2rem;
`

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={lightboxIsOpen: false}
        this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);

    }
    openLightbox(index, event){
        event.preventDefault();
        console.log(index)
        this.setState({lightboxIsOpen: true, currentImage: index})
    }
    closeLightbox(){
        this.setState({lightboxIsOpen: false, currentImage: 0})
    }
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}
    render(){
        const lightboxImages = this.props.images.map((image, i) => (
            {id: i, src: image.fluid.src, srcSet: image.fluid.srcSet}
        ))
	const x = 2
 	const settings = {
	      infinite: true,
	      slidesToShow: 4*x,
	      slidesToScroll: 1,
	      initialSlide: 0,
	      dots: false, 
		responsive: [{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3*x,
		    infinite: true,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 2*x,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1*x,
		  }
		}],
	      speed: 200,
	      cssEase: "linear"
	};
        return(
	<Wrapper>
	    <Slider {...settings}>
		{this.props.images.map((image, i) => (
		    <Content key={i} onClick={(e) => this.openLightbox(i, e)}>
			<Img fixed={image.fixed} backgroundColor={'#eeeeee'}/>
		    </Content>
		))}
	    </Slider>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={lightboxImages}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                    backdropClosesModal={true}
                />
	</Wrapper>
        )
    }
}

export default Carousel
