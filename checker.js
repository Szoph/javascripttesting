//at least 8 charecters long
//has at least one letter
//has at least one number
// has at least one UPPERCASE letter
// has at least one symbol
// has at least one lowercase letter
// is not longer than 20 chars


const checkPassword = (password) => {
    includeCorrect = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,20}$/g.test(password)
if (!includeCorrect){
return false
} else {
    return true
}
};


//regex g stands for global so it checks everything without stopping on the first one it finds.






//     const isNotValid = !/[a-z][A-Z]/g.test(password) || !/[0-9]/g.test(password) || !/[\W]/g.test(password) || password.length <= 8

//     return isNotValid ? false : true



// has at least one UPPERCASE letter
// has at least one symbol
// has at least one lowercase letter
// is not longer than 20 chars

// !/[\W]/g.test(password)

//export the function
module.exports = checkPassword;