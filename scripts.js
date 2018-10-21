function checkvalue() 
{ 
	var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
	
    if(!username.match(/\S/) || !password.match(/\S/) || !email.match(/\S/)  || !confirmpassword.match(/\S/) || !validateEmail(email) || password != confirmpassword)
	{
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    else 
    {
        var x = document.getElementById("snackbar2");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}

function validateEmail(email) 
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function AddToCart(id)
{
    //ugh i just want this done
    if(id == '1')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                <a onclick=\"AddToCart('1')\">\
                        <img src=\"static/img/51p-JgdXvtL.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                    </a>\
                <div class=\"desc\">The Empty Box and the Zeroth Maria</div>\
                ";                
    }

    if(id == '2')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                    <a onclick=\"AddToCart('2')\">\
                        <img src=\"static/img/51GGEiWXyoL.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                    </a>\
                <div class=\"desc\">Monogatari Series</div>\
                ";   
    }

    if(id == '3')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                <a onclick=\"AddToCart('3')\">\
                    <img src=\"static/img/51lOXbj6I6L.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                </a>\
            <div class=\"desc\">Spice & Wolf</div>\
                ";     
    }

    if(id == '4')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "<li>\
                <a onclick=\"AddToCart('4')\">\
                <img src=\"static/img/Mushoku_Tensei_1.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
            </a>\
        <div class=\"desc\">Jobless Reincarnation</div>\
                ";    
    }

    if(id == '5')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "<li>\
                <a onclick=\"AddToCart('5')\">\
                <img src=\"static/img/61tCNyrrZML.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
            </a>\
        <div class=\"desc\">No Game No Life</div>\
                ";    
    }

    if(id == '6')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                    <a onclick=\"AddToCart('6')\">\
                    <img src=\"static/img/501480874.png\" alt=\"Book\" width=\"300\" height=\"200\">\
                </a>\
            <div class=\"desc\">A Certain Magical Index</div>\
                ";      
    }

    if(id == '7')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + " \
                <a onclick=\"AddToCart('7')\">\
                <img src=\"static/img/sao.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                </a>\
                <div class=\"desc\">Sword Art Online </div>\
                ";     
    }

    if(id == '8')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                <a onclick=\"AddToCart('8')\">\
                <img src=\"static/img/232323.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                    </a>\
                <div class=\"desc\">The Rising of the Shield Hero</div>\
                ";     
    }

    if(id == '9')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                <a onclick=\"AddToCart('9')\">\
                <img src=\"static/img/31232.jpg\" alt=\"Book\" width=\"300\" height=\"200\">\
                </a>\
                <div class=\"desc\">The Irregular at Magic High School</div>\
                ";      
    }

    if(id == '10')
    {
        x = document.getElementById('cart');
                x.innerHTML = x.innerHTML + "\
                <a onclick=\"AddToCart('10')\">\
                        <img src=\"static/img/oregairu.png\" alt=\"Book\" width=\"300\" height=\"200\">\
                    </a>\
                <div class=\"desc\">My Youth Romantic Comedy Is Wrong,<br> As I Expected</div>\
                ";      
    }

    
}
