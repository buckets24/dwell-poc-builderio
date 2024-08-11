import Link from "next/link"

interface Props {
  label: string
  url: string
  bgcolor?: string
  textcolor?: string
}

const Cta: React.FC<Props> = ({ label, url, bgcolor = "#FFFFFF", textcolor = "#FFFFFF" }) => {
  return (
    <Link
      href={url}
      className="px-6 py-3 rounded-full min-h-12 font-bold flex items-center justify-center"
      style={{
        backgroundColor: bgcolor,
        color: textcolor
      }}
    >
      {label}
    </Link>
  )
}

export default Cta