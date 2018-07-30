import React from 'react'
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    EditButton,
    DisabledInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
    ReferenceArrayInput,
    SelectArrayInput,
} from 'react-admin'

export const ProfissionalList = (props) => (
    <List {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.nome}
                    secondaryText={record => record.email}
                    tertiaryText={record => new Date(record.created_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="nome" />
                    <EmailField source="email" />
                    <ReferenceManyField label="Perfis" reference="perfis" target="profissional_id">
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

export const ProfissionalCreate = (props) => (
    <Create title="Criar Profissional" {...props}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <ReferenceArrayInput label="Perfis" reference="perfis" source="perfil_ids">
                <SelectArrayInput optionText="nome" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
)

export const ProfissionalEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="nome" />
            <TextInput source="email" />
            <ReferenceArrayInput label="Perfis" reference="perfis" source="perfil_ids">
                <SelectArrayInput optionText="nome" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
)
