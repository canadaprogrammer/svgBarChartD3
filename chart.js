var num = [40,130,75,170];

function insert() {
    var count = num.length;
    console.log(count);
    var value = document.getElementById('inputField').value;
    num.push(value);
    // if value is less than 20 or greater than 200
    // need to be adjust text location
    console.log(this);
    drawChart();
    if (value < 20) {
        document.getElementsByTagName('g')[count].classList.add('active');
    }
    document.getElementById('inputField').value = '';
}

function drawChart() {
    var svg = d3.select('svg');
    var selection = svg.selectAll('g')
        .data(num)
        .enter().append('g')
        .attr('transform', (d,i) => 'translate(' + 40*i + ',' + (200 - d) + ')');
    selection.append('rect')
        .attr('width',39)
        .attr('height', (d,i) => d);
    selection.append('text')
        .attr('x', 25)
        .attr('y', (d,i) => {
            if (d < 20) return -5;
            else if (d > 200) return (d - 185)
            else return 15;
        })
        .text(d => d/10);
}
drawChart();

document.getElementById('inputField').addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        event.preventDefault();
        insert();
    }
})