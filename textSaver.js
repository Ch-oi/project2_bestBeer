// purchaseList
[
    [
        { price: 200, quantity: 5, beer_name: "Tom's Total Tipple" },
        { price: 12, quantity: 2, beer_name: "Chris' Cracking Cask" },
    ],
];

// Data
[{
    id: 1,
    paid_at: null,
    method: 'card',
    user_id: 1,
    delivery_address_id: 1,
    status: false,
    default: true,
    address: 'Whompoa',
    purchase_list: "undefined<tr><td>Tom's Total Tipple</td><td>5</td><td>200</td><td>40</td></tr><tr><td>Chris' Cracking Cask</td><td>2</td><td>12</td><td>40</td></tr>",
}, ];

// Rubbish
let dropdownValue = document.querySelector(`#dropdown${id}`).value;
console.log('HI');
console.log(dropdownValue);
axios.post('/data/buyBeers', {
    id: 1,
});

// Form validation
$('#newUserRegistration').submit(function(event) {
    event.preventDefault();
    var fName = event.target.firstName.value;
    var lName = event.target.lastName.value;
    var email = event.target.email.value;
    var pw = event.target.password.value;

    var comment1 = $('<p/>', {
        class: 'text-left',
        style: (color = 'red'),
        html: `<small>Please enter less than 15 characters.</small>`,
    });
    var comment2 = $('<p/>', {
        class: 'text-left',
        style: (color = 'red'),
        html: `<small>Please enter a valid email address.</small>`,
    });
    var comment3 = $('<p/>', {
        class: 'text-left',
        style: (color = 'red'),
        html: `<small>Please enter less than 10 characters.</small>`,
    });
    if (fName === '' || fName.length < 1 || fName.length > 15) {
        $('.fName').css('border', 'red solid 2px');
        $('.fName').append(comment1);
    } else if (lName === '' || lName.length < 1 || lName.length > 15) {
        $('.lName').css('border', 'red solid 2px');
        $('.lName').append(comment1);
    } else if (email === '' || email.length < 1 || email.length > 20) {
        $('.email').css('border', 'red solid 2px');
        $('.email').append(comment2);
    } else if (pw === '' || pw.length < 1 || pw.length > 10) {
        $('.pw').css('border', 'red solid 2px');
        $('.pw').append(comment3);
    } else {
        alert(`Thanks ${fName}, your registration has been submitted`);
        $('.fName').css('border', '');
        $('.lName').css('border', '');
        $('.email').css('border', '');
        $('.pw').css('border', '');
        $('#newUserRegistration')[0].reset();
    }
});