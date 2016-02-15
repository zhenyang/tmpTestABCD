joint.shapes.basic.Carbinet = joint.shapes.basic.Generic.extend({

    markup: [
        '<g class="rotatable">',
        '<g class="scalable">',
        '<rect class="carbinet-rect"/>',
        '<rect class="slot1-rect"/>',
        '<rect class="slot2-rect"/>',
        '<rect class="slot3-rect"/>',
        '<rect class="slot4-rect"/>',
        '<rect class="slot5-rect"/>',
        '<rect class="slot6-rect"/>',
        '</g>',
        '<text class="carbinet-text"/>',
        '<text class="slot1-text"/>',
        '<text class="slot2-text"/>',
        '<text class="slot3-text"/>',
        '<text class="slot4-text"/>',
        '<text class="slot5-text"/>',
        '<text class="slot6-text"/>',
        '</g>'
    ].join(''),

    defaults: joint.util.deepSupplement({

        type: 'basic.Carbinet',

        attrs: {

            '.carbinet-rect': {
                'height': '323', 'width': '443', 'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot1-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.03, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot2-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.19, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot3-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.35, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot4-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.51, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot5-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.67, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },
            '.slot6-rect': {
                'ref': '.carbinet-rect', 'ref-y':.25, 'ref-x':.83, 'height': '225', 'width': '62',
                'stroke': 'black', 'stroke-width': 1.5, 'fill': '#fff'
            },

            '.carbinet-text': {
                'ref': '.carbinet-rect', 'ref-y': 200, 'ref-x': 50,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman'
            },
            '.slot1-text': {
                'ref': '.slot1-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '1'
            },
            '.slot2-text': {
                'ref': '.slot2-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '2'
            },
            '.slot3-text': {
                'ref': '.slot3-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '3'
            },
            '.slot4-text': {
                'ref': '.slot4-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '4'
            },
            '.slot5-text': {
                'ref': '.slot5-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '5'
            },
            '.slot6-text': {
                'ref': '.slot6-rect', 'ref-y': .5, 'ref-x':.5,
                'text-anchor': 'middle', 'y-alignment': 'middle', 'font-weight': 'bold', 'fill': 'black',
                'font-size': 12, 'font-family': 'Times New Roman', 'text': '6'
            }
        }


    }, joint.shapes.basic.Generic.prototype.defaults)
});


joint.shapes.basic.Rack = joint.shapes.basic.Generic.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'basic.Rack',
        size: {width: 100, height: 80},
        attrs: {
            'rect': {fill: '#FFFFFF', stroke: 'black', width: 100, height: 80},
            'text': {
                'font-size': 14,
                text: '',
                'ref-x': .5,
                'ref-y': .5,
                ref: 'rect',
                'y-alignment': 'middle',
                'x-alignment': 'middle',
                fill: 'black'
            },
            'image': {
                'ref-x': 0,
                'ref-y': 0,
                ref: 'rect',
                width: 100,
                height: 80,
                'xlink:href': 'resources/images/rack.png'
            }
        }

    }, joint.shapes.basic.Generic.prototype.defaults)
});
