# Gauge - How to change options using the KnockoutJS approach


<p>When using the Knockout approach to create a Gauge  widget, some of the widget objects or all of them can be specified as ViewModel fields. Therefore, to get an option value, get a value of the corresponding ViewModel field. For example:</p><br />


```js
var viewModel = {
    linearGaugeOptions: {
        rangeContainer: {
            backgroundColor: 'green',
... 

```

<p> </p>

```js
var rangeContainerColor = viewModel.linearGaugeOptions.rangeContainer.backgroundColor; 

```

<p> </p><p>However, if you require an option value that can be changed dynamically during an application flow and a widget that is updated in response to the option change, utilize observables. This example illustrates this approach in action:</p><br />


```js
var viewModel = {
    linearGaugeOptions: {
        scale: ko.observable({
            majorTick: {
                showCalculatedTicks: false,
                customTickValues: [0, 15, 60, 100]
            }
        }),
... 

```

<p> </p>

```js
viewModel.linearGaugeOptions.title({ text: 'Title has been changed', position: 'top-left' });
viewModel.linearGaugeOptions.scale({ majorTick: { color: 'Red' } }); 

```

<p> </p>

<br/>


