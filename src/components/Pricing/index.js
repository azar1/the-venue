import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';

import Zoom from 'react-reveal/Zoom';
export default class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['balcony','medium','stall'],
        desc:['Before applying online a candidate will be required to have a scanned photograph and signature as per the specifications given below',
              'Caps, hats and dark glasses are not acceptable. Religious headwear is allowed but it must not cover your face',
              'If the photo is not uploaded at the place of Photo'],
        link:['http:/sales/b','http:/sales/m','http:/sales/s'],
        delay:[500,0,500]      
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(

            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                <div className='pricing_inner_wrapper'>
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            bck='#ffa800'
                            color='#ffffff'
                            text='Purchase'
                            link={this.state.link[i]}

                        />
                    </div>
                </div>
                </div>

            </Zoom>
            


        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()} 
                    </div>

                </div>
                
            </div>
        )
    }
}
