import PropTypes from 'prop-types';
import React from 'react';

import './PieChart.scss';

/** Similar to Infographic, but with ability to graph multiple values */
const PieChart = ({ text, values }) => {

    let totalValue = 0;

    return React.createElement(
        'div',
        { className: 'k-grid k-grid--2 k-grid-col-gap--4 k-grid-row-gap-sm--2 k-pie-chart' },
        React.createElement(
            'div',
            { className: 'k-infographic' },
            React.createElement(
                'h3',
                { className: 'k-infographic__title--small' },
                text
            ),
            values.map((fill, index) => {
                totalValue = totalValue + fill.value;

                const rotation = totalValue / 100 * -360 - 54;

                return React.createElement(
                    'svg',
                    { key: index, width: '352', height: '352', style: {
                            transform: 'rotate(' + rotation + 'deg)'
                        } },
                    React.createElement('circle', { r: '171', cx: '176', cy: '176', style: {
                            strokeDasharray: 'calc((' + fill.value + ' / 100 ) * 2 * 3.14 * 171) calc(( 1 - (' + fill.value + ' / 100)) * 2 * 3.14 * 171)'
                        } })
                );
            })
        ),
        React.createElement(
            'div',
            { className: 'k-pie-chart__labels' },
            values.map((fill, index) => React.createElement(
                'div',
                { className: 'k-pie-chart__label', key: index },
                React.createElement('span', { className: 'k-pie-chart__legend' }),
                React.createElement(
                    'h4',
                    { className: 'k-pie-chart__number' },
                    fill.value,
                    React.createElement(
                        'small',
                        null,
                        '%'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h5',
                        { className: 'k-pie-chart__title' },
                        fill.title
                    ),
                    React.createElement(
                        'p',
                        null,
                        fill.text
                    )
                )
            ))
        )
    );
};

PieChart.defaultProps = {
    values: [{
        title: 'Value 1',
        text: 'This is text',
        value: 35
    }, {
        title: 'Value 2',
        text: 'This is text',
        value: 15
    }, {
        title: 'Value 3',
        text: 'This is text',
        value: 50
    }]
};

PieChart.propTypes = {
    /** Text displayed inside the chart */
    text: PropTypes.string,
    /** Objects that are to be charted */
    values: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        text: PropTypes.string
    })).isRequired
};

export default PieChart;