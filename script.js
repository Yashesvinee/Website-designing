$(document).ready(function() {
$("#basic-form").validate({
rules: {
name : {
required: true,
minlength: 3
},
email: {
required: true,
email: true
},
number: true,
min: 0
}
}
});
});
messages : {
name: {
minlength: "Name should be at least 3 characters"
},
email: {
email: "The email should be in the format: abc@domain.tld"
},
}