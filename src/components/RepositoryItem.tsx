interface RepositoryItemProps {
  repository: {
    name: string;
    html_url: string;
    owner: {
      login: string
    }
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{ props.repository.name }</strong>
      <p>Autor: { props.repository.owner.login}</p>

      <a href={ props.repository.html_url }>
        Acessar Repositorio
      </a>
    </li>
  )
}