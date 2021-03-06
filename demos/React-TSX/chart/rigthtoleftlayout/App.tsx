import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
            { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
            { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
            { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
            { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
            { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
            { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
        ];

        this.state = {
            description: 'Time spent in vigorous exercise by activity',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 100,
                    series: [
                        { dataField: 'Running', displayText: 'Running' },
                        { dataField: 'Swimming', displayText: 'Swimming' },
                        { dataField: 'Cycling', displayText: 'Cycling' }
                    ],
                    seriesGapPercent: 5,
                    type: 'stackedcolumn',
                    valueAxis:
                    {
                        axisSize: 'auto',
                        gridLines: { color: '#CACACA' },
                        maxValue: 100,
                        minValue: 0,
                        tickMarks: { color: '#CACACA' },
                        title: { text: 'Time in minutes' },
                        unitInterval: 10,
                        visible: true
                    }
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 40, top: 0, right: 0, bottom: 10 },
            xAxis: {
                axisSize: 'auto',
                dataField: 'Day',
                gridLines: {
                    color: '#CACACA',
                    interval: 1,
                    visible: false
                },
                tickMarks:
                {
                    color: '#CACACA',
                    interval: 1,
                    visible: true
                },              
                unitInterval: 1
            }
        };
    }

    public render() {
        return (
            <JqxChart theme={'material-purple'} style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description} rtl={true}
                showLegend={true} enableAnimations={true} padding={this.state.padding}
                titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
        );
    }
}

export default App;