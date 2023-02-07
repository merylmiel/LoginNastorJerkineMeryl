function Valemail(usrname)
{
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(usrname.value.match(emailformat))
    {
        alert("Valid email address");
        document.form1.usrname.focus();
        return true;
    }
    else
    {
        alert("Invalid email address!");
            document.form1.usrname.focus();
        return false;
    }
} 

function Valpass(psw)
{
    var passwordformat = /^(?=.*\d)(?=.*[`~{};:'"\|,.?/!@#$%^&*_()-+=<>])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(psw.value.match(passwordformat))
    {
        alert("Valid password!");
        document.form1.psw.focus();
        return true;
    }
    else
    {
        alert("Invalid password!");
        document.form1.psw.focus();
        return false;
    }
}