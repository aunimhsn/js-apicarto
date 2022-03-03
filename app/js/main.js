
$(document).ready(() => {

    $('#zipCode').on('focusout', () => {
        let zipCode = $('#zipCode').val();
        fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${zipCode}`)
        .then((response) => {
            if (response.ok)
                return response.json();

            throw new Error('Something went wrong...');
            
        })
        .then((data) => {
            $('#city').val(data[0].nomCommune);
            console.log("Autocompletion done!")
        })
        .catch((error) => {
            console.log(error);
        });
    });

});


