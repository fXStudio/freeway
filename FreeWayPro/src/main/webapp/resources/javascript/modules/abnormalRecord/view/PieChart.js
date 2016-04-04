Ext.define('AbnormalRecordModule.view.PieChart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.piechart',

    xtype: 'chart',
    animate: true,
    shadow: true,
    theme: 'Base:gradients',
    series: [{
        type: 'pie',
        field: 'data1',
        showInLegend: true,
        donut: false,
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: 'name',
            display: 'rotate',
            contrast: true,
            font: '12px Arial'
        }
    }],

    /**
     * Component Init
     */
    initComponent: function() {
    	var generateData = function(n, floor){
            var data = [],
                p = (Math.random() *  11) + 1,
                i;
                
            floor = (!floor && floor !== 0)? 20 : floor;
            
            for (i = 0; i < (n || 12); i++) {
                data.push({
                    name: Ext.Date.monthNames[i % 12],
                    data1: Math.floor(Math.max((Math.random() * 100), floor))
                });
            }
            return data;
        };
    	var store1 = Ext.create('Ext.data.JsonStore', {
            fields: ['name', 'data1'],
            data: generateData()
        });
        store1.loadData(generateData(6, 20));

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store1,
            tips: {
            	trackMouse: true
            }
        });
        // Call Parent Constructor
        this.callParent(arguments);
    }
});