const FakeLogin=({email, password})=>
    new Promise((resolve,reject)=> {
        setTimeout(() => {
            if (email && password) {
                resolve({email, password})
            } else {
                reject({message: 'Invalid email or password'})
            }
        }, 1000)
    })

export {FakeLogin};

const FakeRegister=({email, password, userName})=>
    new Promise((resolve,reject)=> {
        setTimeout(() => {
            if (email && password && userName) {
                resolve({userName})
            } else {
                reject({message: 'Invalid email or password'})
            }
        }, 1000)
    })

export {FakeRegister};