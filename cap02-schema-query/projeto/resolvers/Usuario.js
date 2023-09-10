const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const perfs = perfis
        .filter(p => p.id === usuario.id)
        return perfs ? perfs[0] : null
    }
}