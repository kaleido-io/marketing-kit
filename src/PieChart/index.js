import PropTypes from 'prop-types'
import React from 'react'

import './PieChart.scss'

/** Similar to Infographic, but with ability to graph multiple values */
const PieChart = ({ text, values }) => {
    
    let totalValue = 0;
    
    return (
        <div className="k-grid k-grid--2 k-grid-col-gap--4 k-grid-row-gap-sm--2 k-pie-chart">

            <div className="k-infographic">
                <h3 className="k-infographic__title--small">{text }</h3>

                { values.map((fill, index) => {
                    totalValue = totalValue + fill.value

                    const rotation = (totalValue / 100 * -360) - 54;

                    return (
                        <svg key={index} width="352" height="352" style={{
                            transform: 'rotate(' + rotation + 'deg)'
                        }}>
                            <circle r="171" cx="176" cy="176" style={{
                                strokeDasharray: 'calc((' + fill.value + ' / 100 ) * 2 * 3.14 * 171) calc(( 1 - (' + fill.value + ' / 100)) * 2 * 3.14 * 171)'
                            }}/>
                        </svg>
                    )
                })}
            </div>
                
            <div className="k-pie-chart__labels">

                { values.map((fill, index) => (
                    <div className="k-pie-chart__label" key={index}>
                        <span className="k-pie-chart__legend"></span>
                        <h4 className="k-pie-chart__number">{ fill.value }<small>%</small></h4>
                        <div>
                            <h5 className="k-pie-chart__title">{ fill.title }</h5>
                            <p>{ fill.text }</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

PieChart.defaultProps = {
    values: [{
        title: 'Value 1',
        text: 'This is text',
        value: 35
    },{
        title: 'Value 2',
        text: 'This is text',
        value: 15
    },{
        title: 'Value 3',
        text: 'This is text',
        value: 50
    }]
};

PieChart.propTypes = {
    /** Text displayed inside the chart */
    text: PropTypes.string,
    /** Objects that are to be charted */
    values: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            text: PropTypes.string
        })
    ).isRequired
}

export default PieChart