const timestamps = {
  'created_at': 'Criado em',
  'updated_at': 'Atualizado em'
}

module.exports = {
  ra: {
    action: {
      delete: 'Deletar',
      show: 'Exibir',
      list: 'Listar',
      save: 'Salvar',
      create: 'Novo',
      edit: 'Editar',
      cancel: 'Cancelar',
      refresh: 'Atualizar',
      add_filter: 'Adicionar Filtro',
      remove_filter: 'Cancelar filtro',
      sort: 'Ordenar',
      undo: 'Desfazer',
      add: 'Adicionar',
      remove: 'Excluir',
      back: 'Voltar',
      bulk_actions: '%{smart_count} selecionados',
    },
    boolean: {
      true: 'Sim',
      false: 'Não',
    },
    page: {
      list: 'Listar %{name}',
      edit: '%{name} #%{id}',
      show: '%{name} #%{id}',
      create: 'Novo %{name}',
      delete: 'Deletar %{name} #%{id}',
      dashboard: 'Painel de Controle',
      not_found: 'Não encontrado',
      loading: 'Carregando',
    },
    input: {
      file: {
        upload_several:
        'Arraste alguns arquivos para fazer o upload, ou clique para selecioná-los.',
        upload_single: 'Arraste o arquivo para fazer o upload, ou clique para selecioná-lo.',
      },
      image: {
        upload_several: 'Arraste algumas imagens para fazer o upload ou clique para selecioná-las',
        upload_single: 'Arraste um arquivo para upload ou clique em selecionar arquivo.',
      },
      references: {
        all_missing: 'Não foi possível encontrar os dados das referencias.',
        many_missing: 'Pelo menos uma das referências passadas não está mais disponível.',
        single_missing: 'A referência passada aparenta não estar mais disponível.',
      },
    },
    message: {
      yes: 'Sim',
      no: 'Não',
      are_you_sure: 'Tem certeza?',
      about: 'Sobre',
      not_found: 'Ou foi digitada uma URL inválida, ou o link pode estar quebrado.',
      loading: 'A página está carregando. Um momento, por favor',
      invalid_form: 'Este formulário não está valido. Certifique-se de corrigir os erros',
      delete_title: 'Excluir %{name} #%{id}',
      delete_content: 'Você tem certeza que deseja excluir?',
      bulk_delete_title: 'Excluir %{name} |||| Excluir %{smart_count} %{name} itens',
      bulk_delete_content: 'Você tem certeza que deseja excluir %{name}? |||| Você tem certeza que deseja excluir estes %{smart_count} itens?',
    },
    navigation: {
      no_results: 'Nenhum resultado encontrado',
      no_more_results: 'A página numero %{page} está fora dos limites. Tente a página anterior.',
      page_out_of_boundaries: 'Página %{page} fora o limite',
      page_out_from_end: 'Não é possível ir após a última página',
      page_out_from_begin: 'Não é possível ir antes da primeira página',
      page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
      next: 'Próximo',
      prev: 'Anterior',
    },
    auth: {
      username: 'Usuário',
      password: 'Senha',
      sign_in: 'Entrar',
      sign_in_error: 'Erro na autenticação, tente novamente.',
      logout: 'Sair',
    },
    notification: {
      updated: 'Item atualizado com sucesso',
      created: 'Item criado com sucesso',
      deleted: 'Item removido com sucesso!',
      item_doesnt_exist: 'Esse item não existe mais',
      http_error: 'Erro na comunicação com servidor',
      bad_item: 'Item incorreto',
      canceled: 'Ação cancelada',
    },
    validation: {
      required: 'Obrigatório',
      minLength: 'Deve ser ter no mínimo %{min} caracteres',
      maxLength: 'Deve ter no máximo %{max} caracteres',
      minValue: 'Deve ser %{min} ou maior',
      maxValue: 'Deve ser %{max} ou menor',
      number: 'Deve ser um número',
      email: 'Deve ser um email válido',
      oneOf: 'Deve ser uma das seguintes opções: %{options}',
      regex: 'Deve ter o formato específico (regexp): %{pattern}',
    },
  },
  resources: {
    perfis: {
      name: 'Perfil |||| Perfis',
      fields: {
        ...timestamps
      }
    },
    permissoes: {
      name: 'Permissão |||| Permissões',
      fields: {
        ...timestamps
      }
    },
    profissionais: {
      name: 'Profissional |||| Profissionais',
      fields: {
        ...timestamps
      }
    },
  },
};
