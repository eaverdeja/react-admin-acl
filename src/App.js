import React from 'react'
import { Admin, Resource } from 'react-admin'
import AppsIcon from '@material-ui/icons/Apps'
import UserIcon from '@material-ui/icons/Group'
import FaceIcon from '@material-ui/icons/Face'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

import { SistemaList, SistemaCreate, SistemaEdit } from './sistemas/sistemas'
import { PerfilList, PerfilCreate, PerfilEdit } from './perfis/perfis'
import { PermissaoList, PermissaoCreate, PermissaoEdit } from './permissoes/permissoes'
import { ProfissionalList, ProfissionalCreate, ProfissionalEdit } from './profissionais/profissionais'

import dataProvider from './dataProvider'
import portugueseMessages from './ra-language-portuguese'

const messages = {
    'pt-BR': portugueseMessages,
}

const i18nProvider = locale => messages[locale]

const App = () => (
    <Admin locale="pt-BR"
        i18nProvider={i18nProvider}
        dataProvider={dataProvider('http://localhost:8000')}>
        <Resource name="sistemas" 
            list={SistemaList}
            create={SistemaCreate}
            edit={SistemaEdit}
            icon={AppsIcon} />
        <Resource name="perfis"
            list={PerfilList}
            create={PerfilCreate}
            edit={PerfilEdit}
            icon={UserIcon} />
        <Resource name="permissoes"
            list={PermissaoList}
            create={PermissaoCreate}
            edit={PermissaoEdit}
            icon={VpnKeyIcon} />
        <Resource name="profissionais"
            list={ProfissionalList}
            create={ProfissionalCreate}
            edit={ProfissionalEdit}
            icon={FaceIcon} />
    </Admin>
)

export default App
