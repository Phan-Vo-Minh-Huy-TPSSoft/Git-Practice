const Greetings = 'Hello'
const newVar = "Hello again"

const throwError = () => {
    throw new Error("Hi, it's me Huy");
    
}

const displayError = () => {
    try {
        throwError()
    } catch (error) {
        console.log({
            error: error
        })
    }
}


