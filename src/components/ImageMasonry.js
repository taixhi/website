import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Img from 'gatsby-image'
import styled from 'styled-components'
import Lightbox from 'react-images'

const Content = styled.div`
    margin: 1px;
    opacity: 1;
      transition: opacity .25s ease-in-out;
      -moz-transition: opacity .25s ease-in-out;
      -webkit-transition: opacity .25s ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
`
const Wrapper = styled.div`
    margin: 2rem;
`

class ImageMasonry extends React.Component {
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
        return(
            <Wrapper>
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        {this.props.images.map((image, i) => (
                            <Content key={i} onClick={(e) => this.openLightbox(i, e)}>
                                <Img fluid={image.fluid} backgroundColor={'#eeeeee'}/>
                            </Content>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
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

export default ImageMasonry