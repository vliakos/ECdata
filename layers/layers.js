var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_astaras_1 = new ol.format.GeoJSON();
var features_astaras_1 = format_astaras_1.readFeatures(json_astaras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_astaras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_astaras_1.addFeatures(features_astaras_1);
var lyr_astaras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_astaras_1, 
                style: style_astaras_1,
                interactive: true,
                title: '<img src="styles/legend/astaras_1.png" /> astaras'
            });
var format_athanasias1_2 = new ol.format.GeoJSON();
var features_athanasias1_2 = format_athanasias1_2.readFeatures(json_athanasias1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_athanasias1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_athanasias1_2.addFeatures(features_athanasias1_2);
var lyr_athanasias1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_athanasias1_2, 
                style: style_athanasias1_2,
                interactive: true,
                title: '<img src="styles/legend/athanasias1_2.png" /> athanasias1'
            });
var format_athanasias2_3 = new ol.format.GeoJSON();
var features_athanasias2_3 = format_athanasias2_3.readFeatures(json_athanasias2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_athanasias2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_athanasias2_3.addFeatures(features_athanasias2_3);
var lyr_athanasias2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_athanasias2_3, 
                style: style_athanasias2_3,
                interactive: true,
                title: '<img src="styles/legend/athanasias2_3.png" /> athanasias2'
            });
var format_gousios_4 = new ol.format.GeoJSON();
var features_gousios_4 = format_gousios_4.readFeatures(json_gousios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gousios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gousios_4.addFeatures(features_gousios_4);
var lyr_gousios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gousios_4, 
                style: style_gousios_4,
                interactive: true,
                title: '<img src="styles/legend/gousios_4.png" /> gousios'
            });
var format_mparoutas_5 = new ol.format.GeoJSON();
var features_mparoutas_5 = format_mparoutas_5.readFeatures(json_mparoutas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mparoutas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mparoutas_5.addFeatures(features_mparoutas_5);
var lyr_mparoutas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mparoutas_5, 
                style: style_mparoutas_5,
                interactive: true,
                title: '<img src="styles/legend/mparoutas_5.png" /> mparoutas'
            });
var format_nasiaras_6 = new ol.format.GeoJSON();
var features_nasiaras_6 = format_nasiaras_6.readFeatures(json_nasiaras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nasiaras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nasiaras_6.addFeatures(features_nasiaras_6);
var lyr_nasiaras_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nasiaras_6, 
                style: style_nasiaras_6,
                interactive: true,
                title: '<img src="styles/legend/nasiaras_6.png" /> nasiaras'
            });
var format_tasiopoulos_7 = new ol.format.GeoJSON();
var features_tasiopoulos_7 = format_tasiopoulos_7.readFeatures(json_tasiopoulos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tasiopoulos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tasiopoulos_7.addFeatures(features_tasiopoulos_7);
var lyr_tasiopoulos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tasiopoulos_7, 
                style: style_tasiopoulos_7,
                interactive: true,
    title: 'tasiopoulos<br />\
    <img src="styles/legend/tasiopoulos_7_0.png" /> 73.9 - 89.8<br />\
    <img src="styles/legend/tasiopoulos_7_1.png" /> 89.8 - 94.9<br />\
    <img src="styles/legend/tasiopoulos_7_2.png" /> 94.9 - 99.8<br />\
    <img src="styles/legend/tasiopoulos_7_3.png" /> 99.8 - 105.3<br />\
    <img src="styles/legend/tasiopoulos_7_4.png" /> 105.3 - 124<br />'
        });
var format_zatzas_8 = new ol.format.GeoJSON();
var features_zatzas_8 = format_zatzas_8.readFeatures(json_zatzas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zatzas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zatzas_8.addFeatures(features_zatzas_8);
var lyr_zatzas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zatzas_8, 
                style: style_zatzas_8,
                interactive: true,
    title: 'zatzas<br />\
    <img src="styles/legend/zatzas_8_0.png" /> 70.1 - 98.9<br />\
    <img src="styles/legend/zatzas_8_1.png" /> 98.9 - 108.8<br />\
    <img src="styles/legend/zatzas_8_2.png" /> 108.8 - 111.9<br />\
    <img src="styles/legend/zatzas_8_3.png" /> 111.9 - 120.3<br />\
    <img src="styles/legend/zatzas_8_4.png" /> 120.3 - 216.1<br />'
        });
var format_fieldnames_9 = new ol.format.GeoJSON();
var features_fieldnames_9 = format_fieldnames_9.readFeatures(json_fieldnames_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fieldnames_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fieldnames_9.addFeatures(features_fieldnames_9);
var lyr_fieldnames_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fieldnames_9, 
                style: style_fieldnames_9,
                interactive: true,
                title: '<img src="styles/legend/fieldnames_9.png" /> fieldnames'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_astaras_1.setVisible(false);lyr_athanasias1_2.setVisible(false);lyr_athanasias2_3.setVisible(false);lyr_gousios_4.setVisible(false);lyr_mparoutas_5.setVisible(false);lyr_nasiaras_6.setVisible(false);lyr_tasiopoulos_7.setVisible(false);lyr_zatzas_8.setVisible(false);lyr_fieldnames_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_astaras_1,lyr_athanasias1_2,lyr_athanasias2_3,lyr_gousios_4,lyr_mparoutas_5,lyr_nasiaras_6,lyr_tasiopoulos_7,lyr_zatzas_8,lyr_fieldnames_9];
lyr_astaras_1.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_athanasias1_2.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_athanasias2_3.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_gousios_4.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_mparoutas_5.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_nasiaras_6.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_tasiopoulos_7.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_zatzas_8.set('fieldAliases', {'EAST': 'EAST', 'NORTH': 'NORTH', 'QV1': 'QV1', 'TIME': 'TIME', });
lyr_fieldnames_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_astaras_1.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_athanasias1_2.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_athanasias2_3.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_gousios_4.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_mparoutas_5.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_nasiaras_6.set('fieldImages', {'EAST': '', 'NORTH': '', 'QV1': '', 'TIME': '', });
lyr_tasiopoulos_7.set('fieldImages', {'EAST': 'TextEdit', 'NORTH': 'TextEdit', 'QV1': 'TextEdit', 'TIME': 'DateTime', });
lyr_zatzas_8.set('fieldImages', {'EAST': 'Hidden', 'NORTH': 'Hidden', 'QV1': 'TextEdit', 'TIME': 'Hidden', });
lyr_fieldnames_9.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', });
lyr_astaras_1.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'no label', 'QV1': 'inline label', 'TIME': 'no label', });
lyr_athanasias1_2.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'header label', 'QV1': 'inline label', 'TIME': 'no label', });
lyr_athanasias2_3.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'header label', 'QV1': 'inline label', 'TIME': 'no label', });
lyr_gousios_4.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'inline label', 'QV1': 'inline label', 'TIME': 'no label', });
lyr_mparoutas_5.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'no label', 'QV1': 'no label', 'TIME': 'no label', });
lyr_nasiaras_6.set('fieldLabels', {'EAST': 'no label', 'NORTH': 'inline label', 'QV1': 'header label', 'TIME': 'no label', });
lyr_tasiopoulos_7.set('fieldLabels', {'EAST': 'header label', 'NORTH': 'no label', 'QV1': 'inline label', 'TIME': 'no label', });
lyr_zatzas_8.set('fieldLabels', {'QV1': 'header label', });
lyr_fieldnames_9.set('fieldLabels', {'Name': 'inline label', });
lyr_fieldnames_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});