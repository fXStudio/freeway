Ext.define('AbnormalRecordModule.view.ColumnChart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.columnchart',

    animate: true,
    shadow: true,
    axes: [{
    	type: 'Numeric',
        position: 'bottom',
        fields: ['staticCount'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0')
        },
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'left',
        fields: ['enteName']
    }],
    background: {
    	gradient: {
    		id: 'backgroundGradient',
    		angle: 45,
    		stops: {
    			0: { color: '#ffffff' }
    		}
    	}
    },
    series: [{
    	type: 'bar',
        axis: 'bottom',
        highlight: true,
        label: {
        	display: 'insideEnd',
            field: 'staticCount',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333',
            'text-anchor': 'middle'
        },
        xField: 'name',
        yField: ['staticCount']
    }],

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('AbnormalRecordModule.store.LaneStatis');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store
        });
        // Call Parent Constructor
        this.callParent(arguments);
    }
});