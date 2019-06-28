let handleLogin = function (options) {
    if (options) {
        if (options.login) {
            $('#loginForm').on('submit', function (e) {
                e.preventDefault();

                let _thisloginForm = $(this);
                let data = $(this).getFormData();

                $.ajax({
                    crossDomain: true, //bitno
                    url: '/data/login.json',
                    method: 'GET',
                    contentType: 'application/json',
                    headers: {
                        'Acess-Control-Allow-Origin': '*'
                    },
                    data: JSON.stringify(data),
                    beforeSend: function () {
                        $('#loginModal .modal-content').prepend(getLoader());
                        $('button', _thisloginForm).prop('disabled', true); //samo u  tom obrascu u kojem se dogodio submit, disablean button 
                        $('.loader').slideDown(1000);
                    },
                    success: function (data) { //vraca nam backend
                        if (data.status == 0) {
                            $('#loginModal .loader').append(setAjaxMessage(data.message));

                        }else if(data.status ==1){
                            $('#loginModal .loader').append(setAjaxMessage(data.message));
                            setTimeout(function(){
                                window.location('/admin');
                            }, 2000);
                        }
                    },
                    error: function(xhr){
                        $('#loginModal .loader').append(setAjaxMessage('Došlo je do pogreške! Pokušajte ponovno ili kontaktirajte administratora'));
                    },
                    complete: function(){
                        setTimeout(function(){
                            $('.loader').slideUp(500);
                            $('button', _thisloginForm).prop('disabled', false);
                        },2500);
                    }
                });
                console.log(data);
            });
            //loading, nije uspjesno logiran, ostaviti mogucnost ponovne prijave, 
            //poanta: sto manje klikanja korisnika
            //ukidanje klika van modala, pa vratiti nakon.
            $('#loginModal').on('hidden.bs.modal', function (e) {
                e.preventDefault();

                $('#loginForm').trigger('reset').parsley().reset();
            });
        }

    }
};