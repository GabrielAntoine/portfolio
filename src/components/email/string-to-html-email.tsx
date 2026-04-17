type Props = {
  string: string
}

export function StringToHtmlEmail({ string }: Props) {
  return string.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))
}
