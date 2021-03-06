var chartDataStr = decodeHtml(chartData);
var chartJsonArray= JSON.parse(chartDataStr);

var arrayLength = chartJsonArray.length;
var numericData = [];
var labelData = [];

for(var i =0; i < arrayLength; i++){
	numericData[i] = chartJsonArray[i].value;
	labelData[i] = chartJsonArray[i].label;
}

new Chart(document.getElementById("myPieChart"), {
    type: 'pie',
   
   	 data: {
        labels: labelData,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#9c9c9a","#343a40","#dee2e6"], 
        //  borderColor: 'rgb(240, 200, 240)',
            data: numericData
        }]
    },

    // Configuration options go here
    options: {
    	title: {
    		display: true,
    		text: 'Project Statuses'
    	}
    
    }
	
});

//"[{"value":1,"label": "COMPLETED},{"value":2,"label": "INPROGRESS},{"value":1,"label": "NOTSTARTED}]"
function decodeHtml(html){
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
}