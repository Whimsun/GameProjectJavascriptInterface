/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function start(){
$(document).ready(function() {
    $('#content').DataTable( {
        "ajax": {
            url:'http://193.191.187.14:10298/GameProjectRESTAPI-1.2-SNAPSHOT/gameapi',
            dataSrc:''
        },
        "columns": [
            { "data": "gameID" },
            { "data": "name" },
            { "data": "genre" },
            { "data": "averageScore" }
        ]
    } );
} );
}


