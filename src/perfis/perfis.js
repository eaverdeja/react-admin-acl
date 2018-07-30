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
    LongTextInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList
} from 'react-admin'

export const PerfilList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.id}
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

export const PerfilCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <LongTextInput source="slug" />
        </SimpleForm>
    </Create>
)

export const PerfilEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="nome" />
            <DisabledInput source="slug" />
        </SimpleForm>
    </Edit>
)
