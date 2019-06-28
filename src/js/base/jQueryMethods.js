(function($){
    // U ovom prostoru kreirate sve custom jQuery funkcije.

    $.fn.getFormData = function(){
        let data = {};
        let dataArray = $(this).serializeArray();

        for(let i=0; i < dataArray.length; i++){
            data[dataArray[i].name] = dataArray[i].value;
        }

        return data;
    }

}) (jQuery);

let getLoader = function(){
    let html= ''; //inicijalizacija
    html += '<div class="loader">'; // dodajemo za svaku liniju div-a 
    html += ' <img src="assets/images/loader.svg">'; 
    html += '</div>';
  


    return html;

    //svaki put kad mi treba loader 
}

let setAjaxMessage = function(message){
    let html= '<div class="message"> '+message+'</div>';
    return html;
}