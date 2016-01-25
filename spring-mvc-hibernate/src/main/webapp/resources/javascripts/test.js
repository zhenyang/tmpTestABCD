
var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("dragstart", function(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
    })
    .on("drag", function(d) {
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        d3.select(this)
            .attr("x", d.x)
            .attr("y", d.y)
            .attr("transform", "translate(" + d.x + ", " + d.y + ")");
    })
    .on("dragend", function(d) {
        d3.select(this).classed("dragging", false);

    });

var frameDrag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("dragstart", function(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
    })
    .on("drag", function(d, i) {
        d.x += d3.event.dx;
        d.y += d3.event.dy;

        var self = d3.select(this);

        self.attr("x", d.x)
            .attr("y", d.y)
            .attr("transform", "translate(" + d.x + ", " + d.y + ")");


        console.log('************');
        console.log(d3.select(this).attr('x'));
        console.log(d3.select(this).attr('y'));
        console.log(rack1.attr('x'));
        console.log(rack1.attr('y'));
        console.log(rack1.attr('width'));
        console.log(rack1.attr('height'));
        console.log(rack2.attr('x'));
        console.log(rack2.attr('y'));
        console.log(rack2.attr('width'));
        console.log(rack2.attr('height'));
        [rack1, rack2].forEach(function (rack) {
            console.log(rack.contains(self));
            if (rack.contains(self)) {
                rack.select('rect').style("fill", "blue");
                rack.node().appendChild(self.node());
            } else {
                rack.select('rect').style("fill", "white");
            };
        });
    })
    .on("dragend", function(d, i) {
        d3.select(this).classed("dragging", false);
        [rack1, rack2].forEach(function (rack) {
            rack.select('rect').style("fill", "white");
        });
    });

var svgContainer = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 400)
    .attr("border", 2);

var borderPath = svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 800)
    .attr("height", 400)
    .style("stroke", 'black')
    .style("fill", "none")
    .style("stroke-width", 1);

var rack1 = svgContainer.append("g")
    .data([{x: 100, y: 100, width: 50, height: 100}])
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; });

rack1.append("rect")
        .attr("dx", 0)
        .attr("dy", 0)
        .attr("width", function(d) { return d.width; })
        .attr("height", function(d) { return d.height; })
        .style("stroke", 'black')
        .style('fill', 'white')
        .style('stroke-width', 1);


var frame1 = rack1.append('g')
    .data([{x: 0, y: 0, width: 20, height : 20}])
    .attr("dx", 0)
    .attr("dy", 0);

frame1.append('rect')
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .style("stroke", 'black')
    .style('fill', 'red')
    .style('stroke-width', 1);

frame1.attr("transform", function(d) { return "translate(" + d.x + ", " + d.y + ")"; });

frame1.call(frameDrag);

rack1.attr("transform", function(d) { return "translate(" + d.x + ", " + d.y + ")"; });

rack1.call(drag);

var rack2 = svgContainer.append("g")
    .data([{x: 300, y: 100, width: 50, height: 100}])
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; });

rack2.append("rect")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .style("stroke", 'black')
    .style('fill', 'white')
    .style('stroke-width', 1);

var contains = function(element) {
    var container = this;
    var containerX = Number(container.attr('x'));
    var containerY = Number(container.attr('y'));
    var containerXEnd = Number(container.attr('x')) + Number(container.attr('width'));
    var containerYEnd = Number(container.attr('y')) + Number(container.attr('height'));
    var elementParent = d3.select(element.node().parentNode);
    var elementX = Number(element.attr('x')) + Number(elementParent.attr('x'));
    var elementY = Number(element.attr('y')) + Number(elementParent.attr('y'));
    var elementXEnd = elementX + Number(element.attr('width'));
    var elementYEnd = elementY + Number(element.attr('height'));
    return !!(containerX < elementX && containerY < elementY
    && containerXEnd > elementXEnd && containerYEnd > elementYEnd);
};

rack1.contains = rack2.contains = contains;

//$(function() {
//    var svgContainer = d3.select("body").append("svg")
//        .attr("width", 800)
//        .attr("height", 803);
//
//    var rectg = svgContainer.append("g")
//    var rect = rectg
//        .append("rect")
//        .attr("x", 250).attr("y", 250)
//        .attr("width", 151).attr("height", 141)
//        .attr("stroke", "#7E7E7E")
//        .style("fill", "white");
//
//    var circle3 = svgContainer.append("circle")
//        .attr("id", "tobeDrooped").attr("cx", 35).attr("cy", 310).attr("r", 25)
//        .style("fill", "white").style('cursor', 'move').style("stroke", "black");
//
//    var drag =
//        d3.behavior.drag()
//            .on("dragstart", function (d, i) {
//                this.setAttribute("dx", event.x)
//                this.setAttribute("dy", event.y)
//            })
//            .on("drag", function (d, i) {
//                var cx = Number(this.getAttribute("cx")) + event.x - Number(this.getAttribute("dx"));
//                var cy = Number(this.getAttribute("cy")) + event.y - Number(this.getAttribute("dy"));
//                this.setAttribute("dx", event.x)
//                this.setAttribute("dy", event.y)
//                this.setAttribute("cx", cx)
//                this.setAttribute("cy", cy)
//
//                if (cx > Number(rect.attr("x")) && cx < (Number(rect.attr("x")) + Number(rect.attr("width"))) &&
//                    cy > Number(rect.attr("y")) && cy < (Number(rect.attr("y")) + Number(rect.attr("height")))) {
//                    rectg.node().appendChild(this);
//                    rect.style("fill", "red");
//                }
//            })
//            .on("dragend", function (d, i) {
//                this.removeAttribute("dx")
//                this.removeAttribute("dy")
//            })
//
//    circle3.call(drag);
//});
