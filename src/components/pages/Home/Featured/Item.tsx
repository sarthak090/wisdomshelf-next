import Image from "next/image";

export default function Item(props) {
    const {book} =props
  return (
    <div>
        <Image src={book.thumbnail} alt={book.title} />
    </div>
  )
}
