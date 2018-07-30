import React from 'react'
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DisabledInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList
} from 'react-admin'

export const PermissaoList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.nome}
                    secondaryText={record => record.slug}
                    tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="nome" />
                    <TextField source="slug" />
                    <DateField source="created_at" showTime locales="pt-BR" />
                    <DateField source="updated_at" showTime locales="pt-BR" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
)

export const PermissaoCreate = (props) => (
    <Create title="Criar permissão" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="slug" />
        </SimpleForm>
    </Create>
)

export const PermissaoEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="nome" />
            <DisabledInput source="slug" />
        </SimpleForm>
    </Edit>
)
