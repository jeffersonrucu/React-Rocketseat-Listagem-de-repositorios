export function RepositoryItem(props) {
  return (
    <li>
      <strong>{ props.repository?.name }</strong>
      <p>Autor: { props.repository?.owner.login}</p>

      <a href={ props.repository?.html_url }>
        Acessar Repositorio
      </a>
    </li>
  )
}