PhoneJSApp.home = function () {
    var viewModel = {
        linearGaugeOptions: {
            scale: ko.observable({
                startValue: 0,
                endValue: 100,
                majorTick: {
                    showCalculatedTicks: false,
                    customTickValues: [0, 15, 60, 100]
                }
            }),
            rangeContainer: {
                backgroundColor: 'none',
                ranges: [
                {
                    startValue: 0,
                    endValue: 15,
                    color: '#A6C567'
                },
                {
                    startValue: 15,
                    endValue: 60,
                    color: '#FCBB69'
                },
                {
                    startValue: 60,
                    endValue: 100,
                    color: '#E19094'
                }
                ]
            },
            title: ko.observable({
                text: "Title",
            }),
            needles: [{ value: 42 }],
            markers: [{ value: 32 }],
            rangeBars: [{ value: 32 }]
        }
    };

    viewModel.changeText = function () {
        viewModel.linearGaugeOptions.title({ text: 'Title has been changed', position: 'top-left' });
        viewModel.linearGaugeOptions.scale({ majorTick: {color: 'Red' } });
    };

    return viewModel;
}