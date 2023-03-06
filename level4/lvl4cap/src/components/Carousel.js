import React from 'react';
import poke from '../images/pokeball.png'
import { useMediaQuery } from 'react-responsive'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 521px)'
    })
  return ( 
    <CarouselProvider 
      naturalSlideWidth={50}
      naturalSlideHeight={70}
      totalSlides={props.num}
    children
    className="carouselcontainer carouselcontainer-shrink"
    visibleSlides={2}
    isPlaying={true}
    
    infinite={true}
    interval={2000}
    >
    <Slider className='slider-carousel'>
      {props.bank.map((data, index) => 
        (<Slide index={index} dataa={data} key={index} className='slide-carousel'>
            {isDesktopOrLaptop?
                <div className="carouselCardContainer position">
                <div className="nameHp">
                <h3>{data.name}</h3>
                <img src={poke}/>
                <h3>HP: {data.hp}</h3>
            </div>
            <div className="pokeImg">
                <img src={data.img
                ?
                data.img
                :
                data.imgB}  
                className={data.img?'cardImgB cardImgBgg':'cardImgB2 cardImgBg'} alt=''/>
            </div>
            <div className="infoBanner">
                <h6>ID: {data.id}</h6>
                <h6>Types:</h6>
                    <div className="">
                        <div className="infoBannerTypes">{data && data.types 
                        ? 
                        data.types.map(type => (
                            <div className={type.type.name}></div>
                            ))
                            :
                            ''
                        }
                        </div>
                    </div>
                <h6>Height: {data.height}</h6>
                <h6>Weight: {data.weight}</h6>
            </div>
            <h6 className="desc">{data.species}</h6>
            <div className="attackMe">
                <h6>Known Attacks:</h6>
                <div>
                    <div>
                    {data && data.attacks
                    ?
                    data.attacks.map(attack => (
                        <><h6>{attack.ability.name}</h6></>
                        ))
                        :
                        ''
                    }
                    </div>
                </div>
                <h6>Base Attack Power:{data.attack}</h6>
            </div>
        </div>
            :
            <div className="carouselCardContainer position-shrink">
            <div className="nameHp">
            <h3>{data.name}</h3>
            <img src={poke}/>
            <h3>HP: {data.hp}</h3>
        </div>
        <div className="pokeImg">
            <img src={data.img
            ?
            data.img
            :
            data.imgB}  
            className={data.img?'cardImgB cardImgBgg':'cardImgB2 cardImgBg'} alt=''/>
        </div>
        <div className="infoBanner">
            <h6>ID: {data.id}</h6>
            <h6>Types:</h6>
                <div className="">
                    <div className="infoBannerTypes">{data && data.types 
                    ? 
                    data.types.map(type => (
                        <div className={type.type.name}></div>
                        ))
                        :
                        ''
                    }
                    </div>
                </div>
            <h6>Height: {data.height}</h6>
            <h6>Weight: {data.weight}</h6>
        </div>
        <h6 className="desc">{data.species}</h6>
        <div className="attackMe">
            <h6>Known Attacks:</h6>
            <div>
                <div>
                {data && data.attacks
                ?
                data.attacks.map(attack => (
                    <><h6>{attack.ability.name}</h6></>
                    ))
                    :
                    ''
                }
                </div>
            </div>
            <h6>Base Attack Power:{data.attack}</h6>
        </div>
    </div>
            }
            
    </Slide>))
        }
      </Slider>
        <div className='carouselbuttons'>
      <ButtonBack className='carouselbutt'>Back</ButtonBack>
      <ButtonNext className='carouselbutt'>Next</ButtonNext>
        </div>
    </CarouselProvider>
  );
};
export default Carousel;