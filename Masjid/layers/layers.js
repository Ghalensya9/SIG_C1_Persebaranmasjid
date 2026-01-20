var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahan_1 = new ol.format.GeoJSON();
var features_BatasKelurahan_1 = format_BatasKelurahan_1.readFeatures(json_BatasKelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_1.addFeatures(features_BatasKelurahan_1);
var lyr_BatasKelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_1, 
                style: style_BatasKelurahan_1,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_1.png" /> Batas Kelurahan'
            });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_FasilitasUmun_3 = new ol.format.GeoJSON();
var features_FasilitasUmun_3 = format_FasilitasUmun_3.readFeatures(json_FasilitasUmun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmun_3.addFeatures(features_FasilitasUmun_3);
var lyr_FasilitasUmun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmun_3, 
                style: style_FasilitasUmun_3,
                popuplayertitle: 'Fasilitas Umun',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmun_3.png" /> Fasilitas Umun'
            });
var format_Permukiman_4 = new ol.format.GeoJSON();
var features_Permukiman_4 = format_Permukiman_4.readFeatures(json_Permukiman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_4.addFeatures(features_Permukiman_4);
var lyr_Permukiman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_4, 
                style: style_Permukiman_4,
                popuplayertitle: 'Permukiman',
                interactive: true,
                title: '<img src="styles/legend/Permukiman_4.png" /> Permukiman'
            });
var format_TitikMasjid_5 = new ol.format.GeoJSON();
var features_TitikMasjid_5 = format_TitikMasjid_5.readFeatures(json_TitikMasjid_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikMasjid_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikMasjid_5.addFeatures(features_TitikMasjid_5);
var lyr_TitikMasjid_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikMasjid_5, 
                style: style_TitikMasjid_5,
                popuplayertitle: 'Titik Masjid',
                interactive: true,
                title: '<img src="styles/legend/TitikMasjid_5.png" /> Titik Masjid'
            });
var format_JalanPerumahan_6 = new ol.format.GeoJSON();
var features_JalanPerumahan_6 = format_JalanPerumahan_6.readFeatures(json_JalanPerumahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_6.addFeatures(features_JalanPerumahan_6);
var lyr_JalanPerumahan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_6, 
                style: style_JalanPerumahan_6,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_6.png" /> Jalan Perumahan'
            });
var format_JalanRaya_7 = new ol.format.GeoJSON();
var features_JalanRaya_7 = format_JalanRaya_7.readFeatures(json_JalanRaya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_7.addFeatures(features_JalanRaya_7);
var lyr_JalanRaya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_7, 
                style: style_JalanRaya_7,
                popuplayertitle: 'Jalan Raya ',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_7.png" /> Jalan Raya '
            });
var format_JalanKampung_8 = new ol.format.GeoJSON();
var features_JalanKampung_8 = format_JalanKampung_8.readFeatures(json_JalanKampung_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKampung_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKampung_8.addFeatures(features_JalanKampung_8);
var lyr_JalanKampung_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKampung_8, 
                style: style_JalanKampung_8,
                popuplayertitle: 'Jalan Kampung ',
                interactive: true,
                title: '<img src="styles/legend/JalanKampung_8.png" /> Jalan Kampung '
            });
var format_JalanKota_9 = new ol.format.GeoJSON();
var features_JalanKota_9 = format_JalanKota_9.readFeatures(json_JalanKota_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKota_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKota_9.addFeatures(features_JalanKota_9);
var lyr_JalanKota_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKota_9, 
                style: style_JalanKota_9,
                popuplayertitle: 'Jalan Kota',
                interactive: true,
                title: '<img src="styles/legend/JalanKota_9.png" /> Jalan Kota'
            });
var format_JalanPerumahan_10 = new ol.format.GeoJSON();
var features_JalanPerumahan_10 = format_JalanPerumahan_10.readFeatures(json_JalanPerumahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPerumahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPerumahan_10.addFeatures(features_JalanPerumahan_10);
var lyr_JalanPerumahan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanPerumahan_10, 
                style: style_JalanPerumahan_10,
                popuplayertitle: 'Jalan Perumahan',
                interactive: true,
                title: '<img src="styles/legend/JalanPerumahan_10.png" /> Jalan Perumahan'
            });
var format_Gang_11 = new ol.format.GeoJSON();
var features_Gang_11 = format_Gang_11.readFeatures(json_Gang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_11.addFeatures(features_Gang_11);
var lyr_Gang_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_11, 
                style: style_Gang_11,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_11.png" /> Gang'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKelurahan_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_FasilitasUmun_3.setVisible(true);lyr_Permukiman_4.setVisible(true);lyr_TitikMasjid_5.setVisible(true);lyr_JalanPerumahan_6.setVisible(true);lyr_JalanRaya_7.setVisible(true);lyr_JalanKampung_8.setVisible(true);lyr_JalanKota_9.setVisible(true);lyr_JalanPerumahan_10.setVisible(true);lyr_Gang_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKelurahan_1,lyr_Building_2,lyr_FasilitasUmun_3,lyr_Permukiman_4,lyr_TitikMasjid_5,lyr_JalanPerumahan_6,lyr_JalanRaya_7,lyr_JalanKampung_8,lyr_JalanKota_9,lyr_JalanPerumahan_10,lyr_Gang_11];
lyr_BatasKelurahan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kode Pos': 'Kode Pos', 'Luas': 'Luas', 'LUASSSS': 'LUASSSS', });
lyr_Building_2.set('fieldAliases', {'FID': 'FID', });
lyr_FasilitasUmun_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'LUASSSSS': 'LUASSSSS', });
lyr_Permukiman_4.set('fieldAliases', {'id': 'id', 'Permukiman': 'Permukiman', 'Nama jalan': 'Nama jalan', 'Kelurahan': 'Kelurahan', 'LUAS': 'LUAS', 'LUASSSS': 'LUASSSS', });
lyr_TitikMasjid_5.set('fieldAliases', {'ID Masjid': 'ID Masjid', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kode Pos': 'Kode Pos', 'Koordinat': 'Koordinat', });
lyr_JalanPerumahan_6.set('fieldAliases', {'FID': 'FID', });
lyr_JalanRaya_7.set('fieldAliases', {'id': 'id', 'Jalan Raya': 'Jalan Raya', 'Panjang': 'Panjang', 'PANJANG_1': 'PANJANG_1', });
lyr_JalanKampung_8.set('fieldAliases', {'id': 'id', 'Kampung': 'Kampung', 'Panjang': 'Panjang', 'PANJANGG': 'PANJANGG', });
lyr_JalanKota_9.set('fieldAliases', {'id': 'id', 'Provinsi': 'Provinsi', 'Panjang': 'Panjang', 'PANJANGGGG': 'PANJANGGGG', });
lyr_JalanPerumahan_10.set('fieldAliases', {'id': 'id', 'Perumahan': 'Perumahan', 'Panjang': 'Panjang', 'PANJANGGGG': 'PANJANGGGG', });
lyr_Gang_11.set('fieldAliases', {'id': 'id', 'Gang': 'Gang', 'Panjang': 'Panjang', 'PANJANGGGG': 'PANJANGGGG', });
lyr_BatasKelurahan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kode Pos': 'TextEdit', 'Luas': 'TextEdit', 'LUASSSS': '', });
lyr_Building_2.set('fieldImages', {'FID': '', });
lyr_FasilitasUmun_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': '', 'LUASSSSS': '', });
lyr_Permukiman_4.set('fieldImages', {'id': 'TextEdit', 'Permukiman': 'TextEdit', 'Nama jalan': 'TextEdit', 'Kelurahan': 'TextEdit', 'LUAS': '', 'LUASSSS': '', });
lyr_TitikMasjid_5.set('fieldImages', {'ID Masjid': '', 'Nama': '', 'Alamat': '', 'Kelurahan': '', 'Kode Pos': '', 'Koordinat': '', });
lyr_JalanPerumahan_6.set('fieldImages', {'FID': '', });
lyr_JalanRaya_7.set('fieldImages', {'id': 'TextEdit', 'Jalan Raya': 'TextEdit', 'Panjang': '', 'PANJANG_1': '', });
lyr_JalanKampung_8.set('fieldImages', {'id': 'TextEdit', 'Kampung': 'TextEdit', 'Panjang': '', 'PANJANGG': '', });
lyr_JalanKota_9.set('fieldImages', {'id': 'TextEdit', 'Provinsi': 'TextEdit', 'Panjang': '', 'PANJANGGGG': '', });
lyr_JalanPerumahan_10.set('fieldImages', {'id': 'TextEdit', 'Perumahan': 'TextEdit', 'Panjang': '', 'PANJANGGGG': '', });
lyr_Gang_11.set('fieldImages', {'id': 'TextEdit', 'Gang': 'TextEdit', 'Panjang': '', 'PANJANGGGG': '', });
lyr_BatasKelurahan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kode Pos': 'no label', 'Luas': 'no label', 'LUASSSS': 'no label', });
lyr_Building_2.set('fieldLabels', {'FID': 'no label', });
lyr_FasilitasUmun_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'LUASSSSS': 'no label', });
lyr_Permukiman_4.set('fieldLabels', {'id': 'no label', 'Permukiman': 'no label', 'Nama jalan': 'no label', 'Kelurahan': 'no label', 'LUAS': 'no label', 'LUASSSS': 'no label', });
lyr_TitikMasjid_5.set('fieldLabels', {'ID Masjid': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Kelurahan': 'no label', 'Kode Pos': 'no label', 'Koordinat': 'no label', });
lyr_JalanPerumahan_6.set('fieldLabels', {'FID': 'no label', });
lyr_JalanRaya_7.set('fieldLabels', {'id': 'no label', 'Jalan Raya': 'no label', 'Panjang': 'no label', 'PANJANG_1': 'no label', });
lyr_JalanKampung_8.set('fieldLabels', {'id': 'no label', 'Kampung': 'no label', 'Panjang': 'no label', 'PANJANGG': 'no label', });
lyr_JalanKota_9.set('fieldLabels', {'id': 'no label', 'Provinsi': 'no label', 'Panjang': 'no label', 'PANJANGGGG': 'no label', });
lyr_JalanPerumahan_10.set('fieldLabels', {'id': 'no label', 'Perumahan': 'no label', 'Panjang': 'no label', 'PANJANGGGG': 'no label', });
lyr_Gang_11.set('fieldLabels', {'id': 'no label', 'Gang': 'no label', 'Panjang': 'no label', 'PANJANGGGG': 'no label', });
lyr_Gang_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});