import classNames from 'classnames'
import Link from 'next/link'

export default function Badge({ type }: any) {
  return (
    <Link href={`/category/${type}`}>
      <a className="min-w-[140px]">
        <span
          className={classNames('bg-gray-100 py-1 px-2 text-xs font-mono rounded-md uppercase ')}
        >
          {type}
        </span>
      </a>
    </Link>
  )
}
