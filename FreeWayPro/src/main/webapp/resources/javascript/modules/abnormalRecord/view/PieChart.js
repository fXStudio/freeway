Ext.define('AbnormalRecordModule.view.PieChart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.piechart',

    animate: true,
    shadow: true,

    /**
     * Component Init
     */
    initComponent: function() {
        // Create Store Object
        var store = Ext.create('AbnormalRecordModule.store.EnteStatis');

        // Copy properties to Origin Object
        Ext.apply(this, {
            store: store,
            series: [{
                type: 'pie',
                field: 'staticCount',
                showInLegend: true,
                donut: false,
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                          var total = 0;
                          store.each(function(rec) {
                              total += rec.get('staticCount');
                          });
                          this.setTitle(storeItem.get('enteName') + ': ' + Math.round(storeItem.get('staticCount') / total * 100) + '%');
                    }
                },
                highlight: {
                  segment: {
                    margin: 10
                  }
                },
                label: {
                    field: 'enteName',
                    display: 'rotate',
                    contrast: true,
                    font: '12px Arial'
                }
            }]
        });
        // Call Parent Constructor
        this.callParent(arguments);
    }
});