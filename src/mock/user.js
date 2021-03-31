import Mock from 'mockjs'

function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}
let List = []
const count = 400
for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            address: Mock.mock('@county(true)'),
            'age|18-60': 1,
            birth: Mock.Random.date(),
            sex: Mock.Random.integer(0, 1)
        })
    )
}

export default {
    getUserList: config => {
        console.log('参数', config)
        const { name, page = 1, limit = 20 } = param2Obj(config.url)
        const mockList = List.filter(user => {
            if (name && user.name.indexOf(name) === -1) return false
            return true
        })
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 20000,
            count: mockList.length,
            list: pageList
        }
    },
    addUser: config => {
        const { name, address, age, birth, sex } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        List.push({
            id: Mock.Random.guid(),
            name: name,
            address: address,
            age: age,
            birth: birth,
            sex: sex
        })
        return {
            code: 20000,
            data: {
                message: '添加成功'
            }
        }
    },
    delUser: config => {
        const { id } = param2Obj(config.url)
        if (!id) {
            return {
                code: -999,
                message: '参数不正确'
            }
        } else {
            List = List.filter(u => u.id !== id)
            return {
                code: 20000,
                message: '删除成功'
            }
        }
    },
    editUser: config => {
        const { id, name, address, age, birth, sex } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        List.some(u => {
            if (u.id === id) {
                u.name = name,
                    u.address = address,
                    u.age = age,
                    u.birth = birth,
                    u.sex = sex
                return true
            }

        })
        return {
            code: 20000,
            message: '编辑成功'
        }
    },
    batchremove: config => {
        let { ids } = param2Obj(config.url)
        ids = ids.split(",")
        List = List.filter(u => !ids.includes(u.id))
        return {
            code: 20000,
            data: {
                message: '批量删除成功'
            }
        }
    }
}