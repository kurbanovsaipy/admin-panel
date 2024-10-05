const Api = {}

Api.url = 'http://localhost:4000/'

Api.get = async (path) => {

    try {
        let res = await fetch(`${Api.url}${path}`)

        res = await res.json()

        if(res.status) {
            return res.data
        } else {
            return 'error'
        }
    } catch(e) {
        return 'error'
    }

}

Api.postFormData = async (path, data) => {

    try {
        let res = await fetch(`${Api.url}${path}`, {
            method: 'POST',
            body: data
        })

        res = await res.json()

        return res
    } catch(e) {
        console.log(e)
        return 'error'
    }

}

Api.delete = async (path) => {
    try {

        let res = await fetch(`${Api.url}${path}`, {
            method: 'DELETE'
        })

        res = await res?.json()

        if(res.success) {
            return res
        } else {
            return 'error'
        }

    } catch(e) {
        return 'error'
    }
}

export default Api