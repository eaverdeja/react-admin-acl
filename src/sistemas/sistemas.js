import React from 'react'
import {
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceManyField,
    TextField,
    DateField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceArrayInput,
    SelectArrayInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList,
    SingleFieldList,
    ChipField,
} from 'react-admin'

export const SistemaList = (props) => (
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
                    <ReferenceManyField label="Perfis" reference="perfis" target="sistema_id">
                        <SingleFieldList>
                            <ChipField source="nome" />
                        </SingleFieldList>
                    </ReferenceManyField>
                    <DateField source="created_at" showTime locales="pt-BR" />
                    <DateField source="updated_at" showTime locales="pt-BR" />

                    <EditButton />
                </Datagrid>
            }
        />
    </List>
)

export const SistemaCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <LongTextInput source="slug" />
            <ReferenceArrayInput label="Perfis" reference="perfis" source="perfil_ids">
                <SelectArrayInput optionText="nome" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
)

export const SistemaEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="nome" />
            <TextInput source="slug" />
            <ReferenceArrayInput label="Perfis" reference="perfis" source="perfil_ids">
                <SelectArrayInput optionText="nome" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
)
