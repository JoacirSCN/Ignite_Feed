/* Props vai ser um objeto */

export function Post(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
    </div>

  )
}
