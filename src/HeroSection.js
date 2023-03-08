import React, { useEffect, useRef, useState } from 'react'
 
import './herosection.css'
// import i1 from './images/1.png'
// import i2 from './images/2.png'
// import i3 from './images/3.png'
// import i4 from './images/4.png'
// import i5 from './images/5.png'
// import i6 from './images/6.png'
// import i7 from './images/7.png'
// import i8 from './images/8.png'
// import i9 from './images/9.png'
// import i10 from './images/10.png'
// import i11 from './images/11.png'
// import i12 from './images/12.png'
import hpic1 from './images/19362653-ai (1).png'
import hpic2 from './images/19362653-ai (2).png'
import hpic3 from './images/19362653-ai (3).png'
import hpic4 from './images/19362653-ai (4).png'
import hpic5 from './images/19362653-ai (5).png'
import hpic6 from './images/19362653-ai (6).png'
import hpic7 from './images/19362653-ai (7).png'
import hpic8 from './images/19362653-ai (8).png'
import hpic9 from './images/19362653-ai (9).png'
import hpic10 from './images/19362653-ai (10).png'
import hpic11 from './images/19362653-ai (11).png'
import hpic12 from './images/19362653-ai (12).png'
import hpic13 from './images/19362653-ai (13).png'
import hpic14 from './images/19362653-ai (14).png'
import hpic15 from './images/19362653-ai (15).png'
import hpic16 from './images/19362653-ai (16).png'
import hpic17 from './images/19362653-ai (17).png'
import hpic18 from './images/19362653-ai (18).png'
import hpic19 from './images/19362653-ai (19).png'
import hpic20 from './images/19362653-ai (20).png'
import hpic21 from './images/19362653-ai(22).png'
const HeroSection = () => {
    const [position, setposition] = useState(false);
    const [postonx, setpostonx] = useState(0);
    const arr = [hpic18, hpic1,
        hpic2,
        hpic3,
        hpic4,
        hpic5,
        hpic6,
        hpic7,
        hpic8,
        hpic9,
        hpic10,
        hpic11,
        hpic12,
        hpic13,
        hpic14,
        hpic15,
        hpic16,
        hpic17,

        hpic19,
        hpic21,
    ]
    let x = useRef();
    let y = useRef();
    let hsection = useRef();
    window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
            if (postonx <= 0) {
                setpostonx(postonx + 1);
            }
        } else if (e.deltaY > 0) {
            setpostonx(postonx - 1);
        }
    });

    useEffect(() => {
        y.current.style.transform = `translateX(${-postonx * 20}px)`;
        x.current.style.transform = `translateX(${postonx * 20}px)`;

    }, [postonx])

    return (
        <>
            <div className='herosec' ref={hsection}>


                <div className='sec1' ref={x}>
                    <div>

                        <p className='hello'>
                            <span style={{ color: '#ffd700' }}>{"{"}</span> Hello,
                        </p>
                        <p className='prename'>I am <span className='name'>Monirul Islam Soumik</span></p>
                        <p className='title'>"I make things for the web!"     <span style={{ color: '#ffd700' }}>{"}"}</span></p>
                    </div>
                </div>
                <div className='sec2' ref={y}>
                    {


                        arr.map((x, i) => (

                            <img src={x} className="layer" data-speed={Math.floor(Math.random() * (8 - (-8) + 1)) + (-8)}
                                alt={"x" + 1} key={i} width='100%' />
                        )





                        )


                    }





                </div>
            </div>        </>
    )
}

export default HeroSection