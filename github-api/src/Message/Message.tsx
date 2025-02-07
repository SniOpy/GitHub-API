import './Message.scss';

interface MessageProps {
  total: number;
}
export default function Message( {total} : MessageProps) {
  return (
    <div className='message'>
        Votre recherche retourne {total} résultat(s)
    </div>
  )
}